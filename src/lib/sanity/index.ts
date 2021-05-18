import { createImageUrlBuilder } from 'next-sanity'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react'

const config = {
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
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
        Authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`
      }
    })
  )
}

export { BlockContent }
export default cms
