import { createImageUrlBuilder } from 'next-sanity'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  useCdn: process.env.NODE_ENV === 'production'
}

export const imageBuilder = createImageUrlBuilder(config)

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max')

const cms = () => {
  const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT as string

  return getSdk(
    new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`
      }
    })
  )
}

export default cms
