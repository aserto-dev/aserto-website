import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type About = Document & {
  __typename?: 'About'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
  foundersSectionTitle?: Maybe<Scalars['String']>
  foundersSectionSubtitle?: Maybe<Scalars['String']>
  founders?: Maybe<Array<Maybe<FounderBlock>>>
  teamSectionEnabled?: Maybe<Scalars['Boolean']>
  teamSectionTitle?: Maybe<Scalars['String']>
  teamSectionSubtitle?: Maybe<Scalars['String']>
  team?: Maybe<Array<Maybe<MemberBlock>>>
  investorsSectionTitle?: Maybe<Scalars['String']>
  investorsSectionSubtitle?: Maybe<Scalars['String']>
  investors?: Maybe<Array<Maybe<InvestorBlock>>>
  angelsSectionTitle?: Maybe<Scalars['String']>
  angelsSectionSubtitle?: Maybe<Scalars['String']>
  angelsWithImage?: Maybe<Scalars['Boolean']>
  angels?: Maybe<Array<Maybe<FounderBlock>>>
  hiringSectionTitle?: Maybe<Scalars['String']>
  hiringSectionLinkLabel?: Maybe<Scalars['String']>
  hiringSectionLinkHref?: Maybe<Scalars['String']>
}

export type AboutFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  foundersSectionTitle?: Maybe<StringFilter>
  foundersSectionSubtitle?: Maybe<StringFilter>
  teamSectionEnabled?: Maybe<BooleanFilter>
  teamSectionTitle?: Maybe<StringFilter>
  teamSectionSubtitle?: Maybe<StringFilter>
  investorsSectionTitle?: Maybe<StringFilter>
  investorsSectionSubtitle?: Maybe<StringFilter>
  angelsSectionTitle?: Maybe<StringFilter>
  angelsSectionSubtitle?: Maybe<StringFilter>
  angelsWithImage?: Maybe<BooleanFilter>
  hiringSectionTitle?: Maybe<StringFilter>
  hiringSectionLinkLabel?: Maybe<StringFilter>
  hiringSectionLinkHref?: Maybe<StringFilter>
}

export type AboutSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  foundersSectionTitle?: Maybe<SortOrder>
  foundersSectionSubtitle?: Maybe<SortOrder>
  teamSectionEnabled?: Maybe<SortOrder>
  teamSectionTitle?: Maybe<SortOrder>
  teamSectionSubtitle?: Maybe<SortOrder>
  investorsSectionTitle?: Maybe<SortOrder>
  investorsSectionSubtitle?: Maybe<SortOrder>
  angelsSectionTitle?: Maybe<SortOrder>
  angelsSectionSubtitle?: Maybe<SortOrder>
  angelsWithImage?: Maybe<SortOrder>
  hiringSectionTitle?: Maybe<SortOrder>
  hiringSectionLinkLabel?: Maybe<SortOrder>
  hiringSectionLinkHref?: Maybe<SortOrder>
}

export type Author = Document & {
  __typename?: 'Author'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
  image?: Maybe<MainImage>
  bioRaw?: Maybe<Scalars['JSON']>
}

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  position?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  image?: Maybe<MainImageFilter>
}

export type AuthorReference = {
  __typename?: 'AuthorReference'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  author?: Maybe<Author>
}

export type AuthorReferenceFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  author?: Maybe<AuthorFilter>
}

export type AuthorReferenceOrSpan = AuthorReference | Span

export type AuthorReferenceSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export type AuthorSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
  slug?: Maybe<SlugSorting>
  image?: Maybe<MainImageSorting>
}

export type Block = {
  __typename?: 'Block'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<Span>>>
  style?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['String']>
}

export type BlockOrBlogBodyImage = Block | BlogBodyImage

export type BlogBodyImage = {
  __typename?: 'BlogBodyImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  captionRaw?: Maybe<Scalars['JSON']>
  /** Important for SEO and accessiblity. */
  alt?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export type BlogBodyImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  alt?: Maybe<StringFilter>
  asset?: Maybe<SanityImageAssetFilter>
  hotspot?: Maybe<SanityImageHotspotFilter>
  crop?: Maybe<SanityImageCropFilter>
}

export type BlogBodyImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  alt?: Maybe<SortOrder>
  hotspot?: Maybe<SanityImageHotspotSorting>
  crop?: Maybe<SanityImageCropSorting>
}

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>
}

export type Careers = Document & {
  __typename?: 'Careers'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  firstSubtitle?: Maybe<Scalars['String']>
  facts?: Maybe<Array<Maybe<FeatureItem>>>
  subtitleRaw?: Maybe<Scalars['JSON']>
  cultureSectionTitle?: Maybe<Scalars['String']>
  cultureSectionSubtitleRaw?: Maybe<Scalars['JSON']>
  culture?: Maybe<Array<Maybe<SectionBlock>>>
  cultureSectionTaglineRaw?: Maybe<Scalars['JSON']>
  diversitySectionTitle?: Maybe<Scalars['String']>
  diversitySectionSubtitleRaw?: Maybe<Scalars['JSON']>
  valuesSectionTitle?: Maybe<Scalars['String']>
  valuesSectionSubtitleRaw?: Maybe<Scalars['JSON']>
  values?: Maybe<Array<Maybe<SectionBlock>>>
  perksSectionTitle?: Maybe<Scalars['String']>
  perksSectionSubtitleRaw?: Maybe<Scalars['JSON']>
  perks?: Maybe<Array<Maybe<FeatureItem>>>
  openPositionsSectionTitle?: Maybe<Scalars['String']>
  openPositionsSectionSubtitleRaw?: Maybe<Scalars['JSON']>
}

export type CareersFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  firstSubtitle?: Maybe<StringFilter>
  cultureSectionTitle?: Maybe<StringFilter>
  diversitySectionTitle?: Maybe<StringFilter>
  valuesSectionTitle?: Maybe<StringFilter>
  perksSectionTitle?: Maybe<StringFilter>
  openPositionsSectionTitle?: Maybe<StringFilter>
}

export type CareersSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  firstSubtitle?: Maybe<SortOrder>
  cultureSectionTitle?: Maybe<SortOrder>
  diversitySectionTitle?: Maybe<SortOrder>
  valuesSectionTitle?: Maybe<SortOrder>
  perksSectionTitle?: Maybe<SortOrder>
  openPositionsSectionTitle?: Maybe<SortOrder>
}

export type Category = Document & {
  __typename?: 'Category'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
}

export type CategorySorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
}

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>
}

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>
}

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
}

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
}

export type DocumentSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
}

export type Faq = Document & {
  __typename?: 'Faq'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  faqs?: Maybe<Array<Maybe<FaqBlock>>>
}

export type FaqBlock = {
  __typename?: 'FaqBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  questions?: Maybe<Array<Maybe<QuestionBlock>>>
}

export type FaqBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export type FaqBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type FaqFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  subtitle?: Maybe<StringFilter>
}

export type FaqSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  subtitle?: Maybe<SortOrder>
}

export type FeatureBlock = {
  __typename?: 'FeatureBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  titleRaw?: Maybe<Scalars['JSON']>
  blocks?: Maybe<Array<Maybe<FeatureItem>>>
}

export type FeatureBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
}

export type FeatureBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export type FeatureItem = {
  __typename?: 'FeatureItem'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  icon?: Maybe<MainImage>
  title?: Maybe<Scalars['String']>
}

export type FeatureItemFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  icon?: Maybe<MainImageFilter>
  title?: Maybe<StringFilter>
}

export type FeatureItemSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  icon?: Maybe<MainImageSorting>
  title?: Maybe<SortOrder>
}

export type File = {
  __typename?: 'File'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
}

export type FileFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  asset?: Maybe<SanityFileAssetFilter>
}

export type FileSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>
}

export type FounderBlock = {
  __typename?: 'FounderBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  avatar?: Maybe<MainImage>
  name?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  linkedIn?: Maybe<Scalars['String']>
}

export type FounderBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  avatar?: Maybe<MainImageFilter>
  name?: Maybe<StringFilter>
  position?: Maybe<StringFilter>
  linkedIn?: Maybe<StringFilter>
}

export type FounderBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  avatar?: Maybe<MainImageSorting>
  name?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
  linkedIn?: Maybe<SortOrder>
}

export type Geopoint = {
  __typename?: 'Geopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  alt?: Maybe<Scalars['Float']>
}

export type GeopointFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  lat?: Maybe<FloatFilter>
  lng?: Maybe<FloatFilter>
  alt?: Maybe<FloatFilter>
}

export type GeopointSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  lat?: Maybe<SortOrder>
  lng?: Maybe<SortOrder>
  alt?: Maybe<SortOrder>
}

export type Home = Document & {
  __typename?: 'Home'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  slogan?: Maybe<Array<Maybe<TextBlock>>>
  ctaLabel?: Maybe<Scalars['String']>
  theProblemSectionLabel?: Maybe<Scalars['String']>
  theProblemSectionTitle?: Maybe<Scalars['String']>
  theProblemSectionSubtitle?: Maybe<Scalars['String']>
  theProblemSectionCards?: Maybe<Array<Maybe<SectionBlock>>>
  theSolutionSectionLabel?: Maybe<Scalars['String']>
  theSolutionSectionTitle?: Maybe<Scalars['String']>
  theSolutionSectionCards?: Maybe<Array<Maybe<SectionBlock>>>
  featuresSectionTitle?: Maybe<Scalars['String']>
  features?: Maybe<Array<Maybe<FeatureBlock>>>
  testimonialsSectionTitle?: Maybe<Scalars['String']>
  testimonials?: Maybe<Array<Maybe<TestimonialBlock>>>
  pillars?: Maybe<Array<Maybe<PillarBlock>>>
  infos?: Maybe<Array<Maybe<InfoBlock>>>
}

export type HomeFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  subtitle?: Maybe<StringFilter>
  ctaLabel?: Maybe<StringFilter>
  theProblemSectionLabel?: Maybe<StringFilter>
  theProblemSectionTitle?: Maybe<StringFilter>
  theProblemSectionSubtitle?: Maybe<StringFilter>
  theSolutionSectionLabel?: Maybe<StringFilter>
  theSolutionSectionTitle?: Maybe<StringFilter>
  featuresSectionTitle?: Maybe<StringFilter>
  testimonialsSectionTitle?: Maybe<StringFilter>
}

export type HomeSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  subtitle?: Maybe<SortOrder>
  ctaLabel?: Maybe<SortOrder>
  theProblemSectionLabel?: Maybe<SortOrder>
  theProblemSectionTitle?: Maybe<SortOrder>
  theProblemSectionSubtitle?: Maybe<SortOrder>
  theSolutionSectionLabel?: Maybe<SortOrder>
  theSolutionSectionTitle?: Maybe<SortOrder>
  featuresSectionTitle?: Maybe<SortOrder>
  testimonialsSectionTitle?: Maybe<SortOrder>
}

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Scalars['ID']>>
  nin?: Maybe<Array<Scalars['ID']>>
}

export type Image = {
  __typename?: 'Image'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export type ImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  asset?: Maybe<SanityImageAssetFilter>
  hotspot?: Maybe<SanityImageHotspotFilter>
  crop?: Maybe<SanityImageCropFilter>
}

export type ImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  hotspot?: Maybe<SanityImageHotspotSorting>
  crop?: Maybe<SanityImageCropSorting>
}

export type InfoBlock = {
  __typename?: 'InfoBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<MainImage>
  imagePath?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  items?: Maybe<Array<Maybe<InfoItemBlock>>>
}

export type InfoBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  image?: Maybe<MainImageFilter>
  imagePath?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  subtitle?: Maybe<StringFilter>
}

export type InfoBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  image?: Maybe<MainImageSorting>
  imagePath?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  subtitle?: Maybe<SortOrder>
}

export type InfoItemBlock = {
  __typename?: 'InfoItemBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<MainImage>
  title?: Maybe<Scalars['String']>
}

export type InfoItemBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  image?: Maybe<MainImageFilter>
  title?: Maybe<StringFilter>
}

export type InfoItemBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  image?: Maybe<MainImageSorting>
  title?: Maybe<SortOrder>
}

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>
}

export type InvestorBlock = {
  __typename?: 'InvestorBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<MainImage>
  name?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
}

export type InvestorBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  image?: Maybe<MainImageFilter>
  name?: Maybe<StringFilter>
  href?: Maybe<StringFilter>
}

export type InvestorBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  image?: Maybe<MainImageSorting>
  name?: Maybe<SortOrder>
  href?: Maybe<SortOrder>
}

export type JobPosting = Document & {
  __typename?: 'JobPosting'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  /** Titles should be catchy, descriptive, and not too long */
  title?: Maybe<Scalars['String']>
  team?: Maybe<Scalars['String']>
  leverHref?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['DateTime']>
  icon?: Maybe<MainImage>
  descriptionRaw?: Maybe<Scalars['JSON']>
  bodyRaw?: Maybe<Scalars['JSON']>
}

export type JobPostingFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  team?: Maybe<StringFilter>
  leverHref?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  publishedAt?: Maybe<DatetimeFilter>
  icon?: Maybe<MainImageFilter>
}

export type JobPostingSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  team?: Maybe<SortOrder>
  leverHref?: Maybe<SortOrder>
  slug?: Maybe<SlugSorting>
  publishedAt?: Maybe<SortOrder>
  icon?: Maybe<MainImageSorting>
}

export type MainImage = {
  __typename?: 'MainImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  /** Important for SEO and accessiblity. */
  alt?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export type MainImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  caption?: Maybe<StringFilter>
  alt?: Maybe<StringFilter>
  asset?: Maybe<SanityImageAssetFilter>
  hotspot?: Maybe<SanityImageHotspotFilter>
  crop?: Maybe<SanityImageCropFilter>
}

export type MainImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  caption?: Maybe<SortOrder>
  alt?: Maybe<SortOrder>
  hotspot?: Maybe<SanityImageHotspotSorting>
  crop?: Maybe<SanityImageCropSorting>
}

export type MemberBlock = {
  __typename?: 'MemberBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  avatar?: Maybe<MainImage>
  name?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  bioRaw?: Maybe<Scalars['JSON']>
  linkedIn?: Maybe<Scalars['String']>
}

export type MemberBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  avatar?: Maybe<MainImageFilter>
  name?: Maybe<StringFilter>
  position?: Maybe<StringFilter>
  linkedIn?: Maybe<StringFilter>
}

export type MemberBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  avatar?: Maybe<MainImageSorting>
  name?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
  linkedIn?: Maybe<SortOrder>
}

export type PillarBlock = {
  __typename?: 'PillarBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<MainImage>
  imagePath?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type PillarBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  image?: Maybe<MainImageFilter>
  imagePath?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
}

export type PillarBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  image?: Maybe<MainImageSorting>
  imagePath?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
}

export type Post = Document & {
  __typename?: 'Post'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  /** Titles should be catchy, descriptive, and not too long */
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['DateTime']>
  mainImage?: Maybe<MainImage>
  excerptRaw?: Maybe<Scalars['JSON']>
  authors?: Maybe<Array<Maybe<AuthorReference>>>
  categories?: Maybe<Array<Maybe<Category>>>
  bodyRaw?: Maybe<Scalars['JSON']>
}

export type PostFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  publishedAt?: Maybe<DatetimeFilter>
  mainImage?: Maybe<MainImageFilter>
}

export type PostSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  slug?: Maybe<SlugSorting>
  publishedAt?: Maybe<SortOrder>
  mainImage?: Maybe<MainImageSorting>
}

export type QuestionBlock = {
  __typename?: 'QuestionBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  question?: Maybe<Scalars['String']>
  answerRaw?: Maybe<Scalars['JSON']>
}

export type QuestionBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  question?: Maybe<StringFilter>
}

export type QuestionBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  question?: Maybe<SortOrder>
}

export type RootQuery = {
  __typename?: 'RootQuery'
  SiteSettings?: Maybe<SiteSettings>
  Post?: Maybe<Post>
  Category?: Maybe<Category>
  Author?: Maybe<Author>
  Home?: Maybe<Home>
  Faq?: Maybe<Faq>
  About?: Maybe<About>
  Careers?: Maybe<Careers>
  JobPosting?: Maybe<JobPosting>
  SanityImageAsset?: Maybe<SanityImageAsset>
  SanityFileAsset?: Maybe<SanityFileAsset>
  Document?: Maybe<Document>
  allSiteSettings: Array<SiteSettings>
  allPost: Array<Post>
  allCategory: Array<Category>
  allAuthor: Array<Author>
  allHome: Array<Home>
  allFaq: Array<Faq>
  allAbout: Array<About>
  allCareers: Array<Careers>
  allJobPosting: Array<JobPosting>
  allSanityImageAsset: Array<SanityImageAsset>
  allSanityFileAsset: Array<SanityFileAsset>
  allDocument: Array<Document>
}

export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID']
}

export type RootQueryPostArgs = {
  id: Scalars['ID']
}

export type RootQueryCategoryArgs = {
  id: Scalars['ID']
}

export type RootQueryAuthorArgs = {
  id: Scalars['ID']
}

export type RootQueryHomeArgs = {
  id: Scalars['ID']
}

export type RootQueryFaqArgs = {
  id: Scalars['ID']
}

export type RootQueryAboutArgs = {
  id: Scalars['ID']
}

export type RootQueryCareersArgs = {
  id: Scalars['ID']
}

export type RootQueryJobPostingArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']
}

export type RootQueryDocumentArgs = {
  id: Scalars['ID']
}

export type RootQueryAllSiteSettingsArgs = {
  where?: Maybe<SiteSettingsFilter>
  sort?: Maybe<Array<SiteSettingsSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllPostArgs = {
  where?: Maybe<PostFilter>
  sort?: Maybe<Array<PostSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllCategoryArgs = {
  where?: Maybe<CategoryFilter>
  sort?: Maybe<Array<CategorySorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllAuthorArgs = {
  where?: Maybe<AuthorFilter>
  sort?: Maybe<Array<AuthorSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllHomeArgs = {
  where?: Maybe<HomeFilter>
  sort?: Maybe<Array<HomeSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllFaqArgs = {
  where?: Maybe<FaqFilter>
  sort?: Maybe<Array<FaqSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllAboutArgs = {
  where?: Maybe<AboutFilter>
  sort?: Maybe<Array<AboutSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllCareersArgs = {
  where?: Maybe<CareersFilter>
  sort?: Maybe<Array<CareersSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllJobPostingArgs = {
  where?: Maybe<JobPostingFilter>
  sort?: Maybe<Array<JobPostingSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>
  sort?: Maybe<Array<SanityImageAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>
  sort?: Maybe<Array<SanityFileAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllDocumentArgs = {
  where?: Maybe<DocumentFilter>
  sort?: Maybe<Array<DocumentSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>
}

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
}

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
}

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  source?: Maybe<SanityAssetSourceData>
}

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  originalFilename?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  sha1hash?: Maybe<StringFilter>
  extension?: Maybe<StringFilter>
  mimeType?: Maybe<StringFilter>
  size?: Maybe<FloatFilter>
  assetId?: Maybe<StringFilter>
  path?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  source?: Maybe<SanityAssetSourceDataFilter>
}

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  originalFilename?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  sha1hash?: Maybe<SortOrder>
  extension?: Maybe<SortOrder>
  mimeType?: Maybe<SortOrder>
  size?: Maybe<SortOrder>
  assetId?: Maybe<SortOrder>
  path?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  source?: Maybe<SanityAssetSourceDataSorting>
}

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  metadata?: Maybe<SanityImageMetadata>
  source?: Maybe<SanityAssetSourceData>
}

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  originalFilename?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  sha1hash?: Maybe<StringFilter>
  extension?: Maybe<StringFilter>
  mimeType?: Maybe<StringFilter>
  size?: Maybe<FloatFilter>
  assetId?: Maybe<StringFilter>
  path?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  metadata?: Maybe<SanityImageMetadataFilter>
  source?: Maybe<SanityAssetSourceDataFilter>
}

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  originalFilename?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  sha1hash?: Maybe<SortOrder>
  extension?: Maybe<SortOrder>
  mimeType?: Maybe<SortOrder>
  size?: Maybe<SortOrder>
  assetId?: Maybe<SortOrder>
  path?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  metadata?: Maybe<SanityImageMetadataSorting>
  source?: Maybe<SanityAssetSourceDataSorting>
}

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  top?: Maybe<Scalars['Float']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
}

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  top?: Maybe<FloatFilter>
  bottom?: Maybe<FloatFilter>
  left?: Maybe<FloatFilter>
  right?: Maybe<FloatFilter>
}

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  top?: Maybe<SortOrder>
  bottom?: Maybe<SortOrder>
  left?: Maybe<SortOrder>
  right?: Maybe<SortOrder>
}

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  height?: Maybe<FloatFilter>
  width?: Maybe<FloatFilter>
  aspectRatio?: Maybe<FloatFilter>
}

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  width?: Maybe<SortOrder>
  aspectRatio?: Maybe<SortOrder>
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  x?: Maybe<FloatFilter>
  y?: Maybe<FloatFilter>
  height?: Maybe<FloatFilter>
  width?: Maybe<FloatFilter>
}

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  x?: Maybe<SortOrder>
  y?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  width?: Maybe<SortOrder>
}

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  location?: Maybe<Geopoint>
  dimensions?: Maybe<SanityImageDimensions>
  palette?: Maybe<SanityImagePalette>
  lqip?: Maybe<Scalars['String']>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
}

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  location?: Maybe<GeopointFilter>
  dimensions?: Maybe<SanityImageDimensionsFilter>
  palette?: Maybe<SanityImagePaletteFilter>
  lqip?: Maybe<StringFilter>
  hasAlpha?: Maybe<BooleanFilter>
  isOpaque?: Maybe<BooleanFilter>
}

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  location?: Maybe<GeopointSorting>
  dimensions?: Maybe<SanityImageDimensionsSorting>
  palette?: Maybe<SanityImagePaletteSorting>
  lqip?: Maybe<SortOrder>
  hasAlpha?: Maybe<SortOrder>
  isOpaque?: Maybe<SortOrder>
}

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<SanityImagePaletteSwatch>
  lightVibrant?: Maybe<SanityImagePaletteSwatch>
  darkVibrant?: Maybe<SanityImagePaletteSwatch>
  vibrant?: Maybe<SanityImagePaletteSwatch>
  dominant?: Maybe<SanityImagePaletteSwatch>
  lightMuted?: Maybe<SanityImagePaletteSwatch>
  muted?: Maybe<SanityImagePaletteSwatch>
}

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>
  dominant?: Maybe<SanityImagePaletteSwatchFilter>
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>
  muted?: Maybe<SanityImagePaletteSwatchFilter>
}

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>
  dominant?: Maybe<SanityImagePaletteSwatchSorting>
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>
  muted?: Maybe<SanityImagePaletteSwatchSorting>
}

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
  foreground?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
}

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  background?: Maybe<StringFilter>
  foreground?: Maybe<StringFilter>
  population?: Maybe<FloatFilter>
  title?: Maybe<StringFilter>
}

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  background?: Maybe<SortOrder>
  foreground?: Maybe<SortOrder>
  population?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type Sanity_DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>
}

export type SectionBlock = {
  __typename?: 'SectionBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<MainImage>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
}

export type SectionBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  image?: Maybe<MainImageFilter>
  title?: Maybe<StringFilter>
}

export type SectionBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  image?: Maybe<MainImageSorting>
  title?: Maybe<SortOrder>
}

export type SiteSettings = Document & {
  __typename?: 'SiteSettings'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  /** Describe your blog for search engines and social media. */
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Publish an author and set a reference to them here. */
  author?: Maybe<Author>
}

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  author?: Maybe<AuthorFilter>
}

export type SiteSettingsSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
}

export type Slug = {
  __typename?: 'Slug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export type SlugFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  current?: Maybe<StringFilter>
}

export type SlugSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  current?: Maybe<SortOrder>
}

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  nin?: Maybe<Array<Scalars['String']>>
}

export type TestimonialBlock = {
  __typename?: 'TestimonialBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  authorAvatar?: Maybe<MainImage>
  authorName?: Maybe<Scalars['String']>
  authorPosition?: Maybe<Scalars['String']>
  quoteRaw?: Maybe<Scalars['JSON']>
}

export type TestimonialBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  authorAvatar?: Maybe<MainImageFilter>
  authorName?: Maybe<StringFilter>
  authorPosition?: Maybe<StringFilter>
}

export type TestimonialBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  authorAvatar?: Maybe<MainImageSorting>
  authorName?: Maybe<SortOrder>
  authorPosition?: Maybe<SortOrder>
}

export type TextBlock = {
  __typename?: 'TextBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type TextBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  text?: Maybe<StringFilter>
}

export type TextBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  text?: Maybe<SortOrder>
}

export type FeatureItemFragment = { __typename?: 'FeatureItem' } & Pick<
  FeatureItem,
  'title'
> & { icon?: Maybe<{ __typename?: 'MainImage' } & ImageFragment> }

export type ImageFragment = { __typename?: 'MainImage' } & Pick<
  MainImage,
  'alt'
> & {
    crop?: Maybe<
      { __typename?: 'SanityImageCrop' } & Pick<
        SanityImageCrop,
        '_key' | '_type' | 'top' | 'bottom' | 'left' | 'right'
      >
    >
    hotspot?: Maybe<
      { __typename?: 'SanityImageHotspot' } & Pick<
        SanityImageHotspot,
        '_key' | '_type' | 'x' | 'y' | 'height' | 'width'
      >
    >
    asset?: Maybe<
      { __typename?: 'SanityImageAsset' } & Pick<
        SanityImageAsset,
        '_id' | 'url' | 'title' | 'assetId' | 'path'
      > & {
          metadata?: Maybe<
            { __typename?: 'SanityImageMetadata' } & {
              dimensions?: Maybe<
                { __typename?: 'SanityImageDimensions' } & Pick<
                  SanityImageDimensions,
                  'width' | 'height'
                >
              >
            }
          >
        }
    >
  }

export type PostMetaFragment = { __typename?: 'Post' } & Pick<
  Post,
  '_id' | 'publishedAt' | 'title' | 'excerptRaw'
> & {
    mainImage?: Maybe<{ __typename?: 'MainImage' } & ImageFragment>
    slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>
    authors?: Maybe<
      Array<
        Maybe<
          { __typename?: 'AuthorReference' } & {
            author?: Maybe<
              { __typename?: 'Author' } & Pick<
                Author,
                'name' | 'bioRaw' | 'position'
              > & {
                  slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>
                  image?: Maybe<{ __typename?: 'MainImage' } & ImageFragment>
                }
            >
          }
        >
      >
    >
    categories?: Maybe<
      Array<
        Maybe<
          { __typename?: 'Category' } & Pick<Category, 'title' | 'description'>
        >
      >
    >
  }

export type PostFragment = { __typename?: 'Post' } & Pick<Post, 'bodyRaw'> &
  PostMetaFragment

export type SectionBlockFragment = { __typename?: 'SectionBlock' } & Pick<
  SectionBlock,
  'title' | 'subtitleRaw'
> & { image?: Maybe<{ __typename?: 'MainImage' } & ImageFragment> }

export type FounderFragment = { __typename?: 'FounderBlock' } & Pick<
  FounderBlock,
  'name' | 'position' | 'linkedIn'
> & { avatar?: Maybe<{ __typename?: 'MainImage' } & ImageFragment> }

export type MemberFragment = { __typename?: 'MemberBlock' } & Pick<
  MemberBlock,
  'name' | 'position' | 'bioRaw' | 'linkedIn'
> & { avatar?: Maybe<{ __typename?: 'MainImage' } & ImageFragment> }

export type InvestorFragment = { __typename?: 'InvestorBlock' } & Pick<
  InvestorBlock,
  'name' | 'href'
> & { image?: Maybe<{ __typename?: 'MainImage' } & ImageFragment> }

export type AboutPageFragment = { __typename?: 'About' } & Pick<
  About,
  | 'title'
  | 'subtitleRaw'
  | 'foundersSectionTitle'
  | 'foundersSectionSubtitle'
  | 'teamSectionEnabled'
  | 'teamSectionTitle'
  | 'teamSectionSubtitle'
  | 'investorsSectionTitle'
  | 'investorsSectionSubtitle'
  | 'angelsSectionTitle'
  | 'angelsSectionSubtitle'
  | 'angelsWithImage'
  | 'hiringSectionTitle'
  | 'hiringSectionLinkLabel'
  | 'hiringSectionLinkHref'
> & {
    founders?: Maybe<
      Array<Maybe<{ __typename?: 'FounderBlock' } & FounderFragment>>
    >
    team?: Maybe<Array<Maybe<{ __typename?: 'MemberBlock' } & MemberFragment>>>
    investors?: Maybe<
      Array<Maybe<{ __typename?: 'InvestorBlock' } & InvestorFragment>>
    >
    angels?: Maybe<
      Array<Maybe<{ __typename?: 'FounderBlock' } & FounderFragment>>
    >
  }

export type AboutPageQueryVariables = Exact<{ [key: string]: never }>

export type AboutPageQuery = { __typename?: 'RootQuery' } & {
  allAbout: Array<{ __typename?: 'About' } & AboutPageFragment>
}

export type BlogIndexQueryVariables = Exact<{ [key: string]: never }>

export type BlogIndexQuery = { __typename?: 'RootQuery' } & {
  allPost: Array<{ __typename?: 'Post' } & PostMetaFragment>
}

export type BlogPostPathsQueryVariables = Exact<{ [key: string]: never }>

export type BlogPostPathsQuery = { __typename?: 'RootQuery' } & {
  allPost: Array<
    { __typename?: 'Post' } & {
      slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>
    }
  >
}

export type BlogPostQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type BlogPostQuery = { __typename?: 'RootQuery' } & {
  allPost: Array<{ __typename?: 'Post' } & PostFragment>
}

export type JobPostingMetaFragment = { __typename?: 'JobPosting' } & Pick<
  JobPosting,
  'title' | 'team' | 'leverHref' | 'publishedAt' | 'descriptionRaw'
> & {
    slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>
    icon?: Maybe<{ __typename?: 'MainImage' } & ImageFragment>
  }

export type JobPostingFragment = { __typename?: 'JobPosting' } & Pick<
  JobPosting,
  'bodyRaw'
> &
  JobPostingMetaFragment

export type CareersPageFragment = { __typename?: 'Careers' } & Pick<
  Careers,
  | 'title'
  | 'firstSubtitle'
  | 'subtitleRaw'
  | 'cultureSectionTitle'
  | 'cultureSectionSubtitleRaw'
  | 'cultureSectionTaglineRaw'
  | 'diversitySectionTitle'
  | 'diversitySectionSubtitleRaw'
  | 'valuesSectionTitle'
  | 'valuesSectionSubtitleRaw'
  | 'perksSectionTitle'
  | 'perksSectionSubtitleRaw'
  | 'openPositionsSectionTitle'
  | 'openPositionsSectionSubtitleRaw'
> & {
    facts?: Maybe<
      Array<
        Maybe<
          { __typename?: 'FeatureItem' } & Pick<FeatureItem, 'title'> & {
              icon?: Maybe<{ __typename?: 'MainImage' } & ImageFragment>
            }
        >
      >
    >
    culture?: Maybe<
      Array<Maybe<{ __typename?: 'SectionBlock' } & SectionBlockFragment>>
    >
    values?: Maybe<
      Array<Maybe<{ __typename?: 'SectionBlock' } & SectionBlockFragment>>
    >
    perks?: Maybe<
      Array<Maybe<{ __typename?: 'FeatureItem' } & FeatureItemFragment>>
    >
  }

export type CareersPageQueryVariables = Exact<{ [key: string]: never }>

export type CareersPageQuery = { __typename?: 'RootQuery' } & {
  allCareers: Array<{ __typename?: 'Careers' } & CareersPageFragment>
  allJobPosting: Array<{ __typename?: 'JobPosting' } & JobPostingMetaFragment>
}

export type JobPostingPathsQueryVariables = Exact<{ [key: string]: never }>

export type JobPostingPathsQuery = { __typename?: 'RootQuery' } & {
  allJobPosting: Array<
    { __typename?: 'JobPosting' } & {
      slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>
    }
  >
}

export type JobPostingQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type JobPostingQuery = { __typename?: 'RootQuery' } & {
  allJobPosting: Array<{ __typename?: 'JobPosting' } & JobPostingFragment>
}

export type FaqItemFragment = { __typename?: 'FaqBlock' } & Pick<
  FaqBlock,
  'title'
> & {
    questions?: Maybe<
      Array<
        Maybe<
          { __typename?: 'QuestionBlock' } & Pick<
            QuestionBlock,
            'question' | 'answerRaw'
          >
        >
      >
    >
  }

export type FaqPageQueryVariables = Exact<{ [key: string]: never }>

export type FaqPageQuery = { __typename?: 'RootQuery' } & {
  allFaq: Array<
    { __typename?: 'Faq' } & Pick<Faq, 'title' | 'subtitle'> & {
        faqs?: Maybe<
          Array<Maybe<{ __typename?: 'FaqBlock' } & FaqItemFragment>>
        >
      }
  >
}

export type HomePageFragment = { __typename?: 'Home' } & Pick<
  Home,
  | 'title'
  | 'subtitle'
  | 'ctaLabel'
  | 'theProblemSectionLabel'
  | 'theProblemSectionTitle'
  | 'theProblemSectionSubtitle'
  | 'theSolutionSectionLabel'
  | 'theSolutionSectionTitle'
  | 'featuresSectionTitle'
  | 'testimonialsSectionTitle'
> & {
    slogan?: Maybe<
      Array<Maybe<{ __typename?: 'TextBlock' } & Pick<TextBlock, 'text'>>>
    >
    theProblemSectionCards?: Maybe<
      Array<Maybe<{ __typename?: 'SectionBlock' } & SectionBlockFragment>>
    >
    theSolutionSectionCards?: Maybe<
      Array<Maybe<{ __typename?: 'SectionBlock' } & SectionBlockFragment>>
    >
    features?: Maybe<
      Array<
        Maybe<
          { __typename?: 'FeatureBlock' } & Pick<FeatureBlock, 'titleRaw'> & {
              blocks?: Maybe<
                Array<
                  Maybe<{ __typename?: 'FeatureItem' } & FeatureItemFragment>
                >
              >
            }
        >
      >
    >
    testimonials?: Maybe<
      Array<
        Maybe<
          { __typename?: 'TestimonialBlock' } & Pick<
            TestimonialBlock,
            'authorName' | 'authorPosition' | 'quoteRaw'
          > & {
              authorAvatar?: Maybe<{ __typename?: 'MainImage' } & ImageFragment>
            }
        >
      >
    >
  }

export type HomePageQueryVariables = Exact<{ [key: string]: never }>

export type HomePageQuery = { __typename?: 'RootQuery' } & {
  allHome: Array<{ __typename?: 'Home' } & HomePageFragment>
}

export const ImageFragmentDoc = gql`
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
    alt
  }
`
export const PostMetaFragmentDoc = gql`
  fragment PostMeta on Post {
    _id
    publishedAt
    mainImage {
      ...Image
    }
    title
    excerptRaw
    slug {
      current
    }
    authors {
      author {
        name
        slug {
          current
        }
        bioRaw
        position
        image {
          ...Image
        }
      }
    }
    categories {
      title
      description
    }
  }
  ${ImageFragmentDoc}
`
export const PostFragmentDoc = gql`
  fragment Post on Post {
    ...PostMeta
    bodyRaw
  }
  ${PostMetaFragmentDoc}
`
export const FounderFragmentDoc = gql`
  fragment Founder on FounderBlock {
    avatar {
      ...Image
    }
    name
    position
    linkedIn
  }
  ${ImageFragmentDoc}
`
export const MemberFragmentDoc = gql`
  fragment Member on MemberBlock {
    avatar {
      ...Image
    }
    name
    position
    bioRaw
    linkedIn
  }
  ${ImageFragmentDoc}
`
export const InvestorFragmentDoc = gql`
  fragment Investor on InvestorBlock {
    name
    href
    image {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`
export const AboutPageFragmentDoc = gql`
  fragment AboutPage on About {
    title
    subtitleRaw
    foundersSectionTitle
    foundersSectionSubtitle
    founders {
      ...Founder
    }
    teamSectionEnabled
    teamSectionTitle
    teamSectionSubtitle
    team {
      ...Member
    }
    investorsSectionTitle
    investorsSectionSubtitle
    investors {
      ...Investor
    }
    angelsSectionTitle
    angelsSectionSubtitle
    angelsWithImage
    angels {
      ...Founder
    }
    hiringSectionTitle
    hiringSectionLinkLabel
    hiringSectionLinkHref
  }
  ${FounderFragmentDoc}
  ${MemberFragmentDoc}
  ${InvestorFragmentDoc}
`
export const JobPostingMetaFragmentDoc = gql`
  fragment JobPostingMeta on JobPosting {
    title
    team
    leverHref
    slug {
      current
    }
    publishedAt
    icon {
      ...Image
    }
    descriptionRaw
  }
  ${ImageFragmentDoc}
`
export const JobPostingFragmentDoc = gql`
  fragment JobPosting on JobPosting {
    ...JobPostingMeta
    bodyRaw
  }
  ${JobPostingMetaFragmentDoc}
`
export const SectionBlockFragmentDoc = gql`
  fragment SectionBlock on SectionBlock {
    image {
      ...Image
    }
    title
    subtitleRaw
  }
  ${ImageFragmentDoc}
`
export const FeatureItemFragmentDoc = gql`
  fragment FeatureItem on FeatureItem {
    icon {
      ...Image
    }
    title
  }
  ${ImageFragmentDoc}
`
export const CareersPageFragmentDoc = gql`
  fragment CareersPage on Careers {
    title
    firstSubtitle
    facts {
      icon {
        ...Image
      }
      title
    }
    subtitleRaw
    cultureSectionTitle
    cultureSectionSubtitleRaw
    culture {
      ...SectionBlock
    }
    cultureSectionTaglineRaw
    diversitySectionTitle
    diversitySectionSubtitleRaw
    valuesSectionTitle
    valuesSectionSubtitleRaw
    values {
      ...SectionBlock
    }
    perksSectionTitle
    perksSectionSubtitleRaw
    perks {
      ...FeatureItem
    }
    openPositionsSectionTitle
    openPositionsSectionSubtitleRaw
  }
  ${ImageFragmentDoc}
  ${SectionBlockFragmentDoc}
  ${FeatureItemFragmentDoc}
`
export const FaqItemFragmentDoc = gql`
  fragment FaqItem on FaqBlock {
    title
    questions {
      question
      answerRaw
    }
  }
`
export const HomePageFragmentDoc = gql`
  fragment HomePage on Home {
    title
    subtitle
    slogan {
      text
    }
    ctaLabel
    theProblemSectionLabel
    theProblemSectionTitle
    theProblemSectionSubtitle
    theProblemSectionCards {
      ...SectionBlock
    }
    theSolutionSectionLabel
    theSolutionSectionTitle
    theSolutionSectionCards {
      ...SectionBlock
    }
    featuresSectionTitle
    features {
      titleRaw
      blocks {
        ...FeatureItem
      }
    }
    testimonialsSectionTitle
    testimonials {
      authorAvatar {
        ...Image
      }
      authorName
      authorPosition
      quoteRaw
    }
  }
  ${SectionBlockFragmentDoc}
  ${FeatureItemFragmentDoc}
  ${ImageFragmentDoc}
`
export const AboutPageDocument = gql`
  query AboutPage {
    allAbout(sort: { _createdAt: DESC }, limit: 1) {
      ...AboutPage
    }
  }
  ${AboutPageFragmentDoc}
`
export const BlogIndexDocument = gql`
  query BlogIndex {
    allPost(sort: { publishedAt: DESC }) {
      ...PostMeta
    }
  }
  ${PostMetaFragmentDoc}
`
export const BlogPostPathsDocument = gql`
  query BlogPostPaths {
    allPost {
      slug {
        current
      }
    }
  }
`
export const BlogPostDocument = gql`
  query BlogPost($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {
      ...Post
    }
  }
  ${PostFragmentDoc}
`
export const CareersPageDocument = gql`
  query CareersPage {
    allCareers(sort: { _createdAt: DESC }, limit: 1) {
      ...CareersPage
    }
    allJobPosting(sort: { publishedAt: DESC }) {
      ...JobPostingMeta
    }
  }
  ${CareersPageFragmentDoc}
  ${JobPostingMetaFragmentDoc}
`
export const JobPostingPathsDocument = gql`
  query JobPostingPaths {
    allJobPosting {
      slug {
        current
      }
    }
  }
`
export const JobPostingDocument = gql`
  query JobPosting($slug: String!) {
    allJobPosting(where: { slug: { current: { eq: $slug } } }, limit: 1) {
      ...JobPosting
    }
  }
  ${JobPostingFragmentDoc}
`
export const FaqPageDocument = gql`
  query FaqPage {
    allFaq(sort: { _createdAt: DESC }, limit: 1) {
      title
      subtitle
      faqs {
        ...FaqItem
      }
    }
  }
  ${FaqItemFragmentDoc}
`
export const HomePageDocument = gql`
  query HomePage {
    allHome(sort: { _createdAt: DESC }, limit: 1) {
      ...HomePage
    }
  }
  ${HomePageFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    AboutPage(
      variables?: AboutPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AboutPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AboutPageQuery>(AboutPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'AboutPage'
      )
    },
    BlogIndex(
      variables?: BlogIndexQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<BlogIndexQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BlogIndexQuery>(BlogIndexDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'BlogIndex'
      )
    },
    BlogPostPaths(
      variables?: BlogPostPathsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<BlogPostPathsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BlogPostPathsQuery>(BlogPostPathsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'BlogPostPaths'
      )
    },
    BlogPost(
      variables: BlogPostQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<BlogPostQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BlogPostQuery>(BlogPostDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'BlogPost'
      )
    },
    CareersPage(
      variables?: CareersPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CareersPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CareersPageQuery>(CareersPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'CareersPage'
      )
    },
    JobPostingPaths(
      variables?: JobPostingPathsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<JobPostingPathsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<JobPostingPathsQuery>(
            JobPostingPathsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'JobPostingPaths'
      )
    },
    JobPosting(
      variables: JobPostingQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<JobPostingQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<JobPostingQuery>(JobPostingDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'JobPosting'
      )
    },
    FaqPage(
      variables?: FaqPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<FaqPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FaqPageQuery>(FaqPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'FaqPage'
      )
    },
    HomePage(
      variables?: HomePageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<HomePageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<HomePageQuery>(HomePageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'HomePage'
      )
    }
  }
}
export type Sdk = ReturnType<typeof getSdk>
