const { parse } = require('graphql')
const { GraphQLClient } = require('graphql-request')

const docCache = new Map()

// A map fragmentName -> [normalized source]
const fragmentSourceMap = new Map()

let printFragmentWarnings = true
let experimentalFragmentVariables = false

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim()
}

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end))
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
function processFragments(ast) {
  const seenKeys = new Set()
  const definitions = []

  ast.definitions.forEach((fragmentDefinition) => {
    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc)

      // We know something about this fragment
      let sourceKeySet = fragmentSourceMap.get(fragmentName)
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn(
            'Warning: fragment with name ' +
              fragmentName +
              ' already exists.\n' +
              'graphql-tag enforces all fragment names across your application to be unique; read more about\n' +
              'this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names'
          )
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, (sourceKeySet = new Set()))
      }

      sourceKeySet.add(sourceKey)

      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey)
        definitions.push(fragmentDefinition)
      }
    } else {
      definitions.push(fragmentDefinition)
    }
  })

  return {
    ...ast,
    definitions
  }
}

function stripLoc(doc) {
  const workSet = new Set(doc.definitions)

  workSet.forEach((node) => {
    if (node.loc) delete node.loc
    Object.keys(node).forEach((key) => {
      const value = node[key]
      if (value && typeof value === 'object') {
        workSet.add(value)
      }
    })
  })

  const loc = doc.loc
  if (loc) {
    delete loc.startToken
    delete loc.endToken
  }

  return doc
}

function parseDocument(source) {
  var cacheKey = normalize(source)
  if (!docCache.has(cacheKey)) {
    const parsed = parse(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    })
    if (!parsed || parsed.kind !== 'Document') {
      throw new Error('Not a valid GraphQL document.')
    }
    docCache.set(
      cacheKey,
      // check that all "new" fragments inside the documents are consistent with
      // existing fragments of the same name
      stripLoc(processFragments(parsed))
    )
  }
  return docCache.get(cacheKey)
}
function gql(literals, ...args) {
  if (typeof literals === 'string') {
    literals = [literals]
  }

  let result = literals[0]

  args.forEach((arg, i) => {
    if (arg && arg.kind === 'Document') {
      result += arg.loc.source.body
    } else {
      result += arg
    }
    result += literals[i + 1]
  })

  return parseDocument(result)
}
const defaultWrapper = (action) => action()

const ImageFragmentDoc = gql`
  fragment Image on MainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      url
      title
      assetId
      path
      metadata {
        dimensions {
          width
          height
        }
      }
    }
    captionRaw
    alt
  }
`

const SectionBlockFragmentDoc = gql`
  fragment SectionBlock on SectionBlock {
    image {
      ...Image
    }
    title
    subtitleRaw
    element
    glow
  }
  ${ImageFragmentDoc}
`

const ResourceFragmentDoc = gql`
  fragment Resource on ResourcePage {
    _id
    _createdAt
    metadata {
      title
      description
    }
    index
    slug {
      current
    }
    shortTitle
    title
    subtitleRaw
    formId
    formTitle
    introTitleRaw
    introSubtitleRaw
    introImage {
      ...Image
    }
    introCaptionRaw
    sectionBlock {
      ...SectionBlock
    }
    callToAction {
      caption
      signup
      contact
      contactEngineer
      contactEngineerDark
    }
  }
  ${ImageFragmentDoc}
  ${SectionBlockFragmentDoc}
`

const ResourcesPagesDocument = gql`
  query ResourcesPages {
    allResourcePage(sort: { index: ASC }) {
      ...Resource
    }
  }
  ${ResourceFragmentDoc}
`

const UseCaseFeatureFragmentDoc = gql`
  fragment UseCaseFeature on UseCaseFeature {
    icon {
      ...Image
    }
    titleRaw
    subTitleRaw
  }
  ${ImageFragmentDoc}
`

const UseCaseFragmentDoc = gql`
  fragment UseCase on UseCasePage {
    _id
    _createdAt
    metadata {
      title
      description
    }
    index
    slug {
      current
    }
    shortHeaderTitle
    shortFooterTitle
    title
    subtitleRaw
    heroImage {
      ...Image
    }
    introTitleRaw
    introLeftTextRaw
    introRightTextRaw
    useCaseFeatureBlock {
      ...UseCaseFeature
    }
    additionalImage {
      ...Image
    }
    callToAction {
      caption
      signup
      contact
      contactEngineer
      contactEngineerDark
    }
  }
  ${ImageFragmentDoc}
  ${UseCaseFeatureFragmentDoc}
`

const UseCasesPagesDocument = gql`
  query UseCasesPages {
    allUseCasePage(sort: { index: ASC }) {
      ...UseCase
    }
  }
  ${UseCaseFragmentDoc}
`

function getSdk(client, withWrapper = defaultWrapper) {
  return {
    ResourcesPages(variables, requestHeaders) {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request(ResourcesPagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'ResourcesPages'
      )
    },
    UseCasesPages(variables, requestHeaders) {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request(UseCasesPagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'UseCasesPages'
      )
    }
  }
}

module.exports.cms = () => {
  const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT
  return getSdk(
    new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`
      }
    })
  )
}
