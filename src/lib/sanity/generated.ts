import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};



export type About = Document & {
  __typename?: 'About';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  foundersSectionTitle?: Maybe<Scalars['String']>;
  foundersSectionSubtitle?: Maybe<Scalars['String']>;
  founders?: Maybe<Array<Maybe<FounderBlock>>>;
  investorsSectionTitle?: Maybe<Scalars['String']>;
  investorsSectionSubtitle?: Maybe<Scalars['String']>;
  investors?: Maybe<Array<Maybe<InvestorBlock>>>;
  angelsSectionTitle?: Maybe<Scalars['String']>;
  angelsSectionSubtitle?: Maybe<Scalars['String']>;
  angelsWithImage?: Maybe<Scalars['Boolean']>;
  angels?: Maybe<Array<Maybe<FounderBlock>>>;
  teamSectionEnabled?: Maybe<Scalars['Boolean']>;
  teamSectionTitle?: Maybe<Scalars['String']>;
  teamSectionSubtitle?: Maybe<Scalars['String']>;
  membersWithImage?: Maybe<Scalars['Boolean']>;
  team?: Maybe<Array<Maybe<MemberBlock>>>;
  hiringSectionTitle?: Maybe<Scalars['String']>;
  hiringSectionLinkLabel?: Maybe<Scalars['String']>;
  hiringSectionLinkHref?: Maybe<Scalars['String']>;
};

export type AboutFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  foundersSectionTitle?: Maybe<StringFilter>;
  foundersSectionSubtitle?: Maybe<StringFilter>;
  investorsSectionTitle?: Maybe<StringFilter>;
  investorsSectionSubtitle?: Maybe<StringFilter>;
  angelsSectionTitle?: Maybe<StringFilter>;
  angelsSectionSubtitle?: Maybe<StringFilter>;
  angelsWithImage?: Maybe<BooleanFilter>;
  teamSectionEnabled?: Maybe<BooleanFilter>;
  teamSectionTitle?: Maybe<StringFilter>;
  teamSectionSubtitle?: Maybe<StringFilter>;
  membersWithImage?: Maybe<BooleanFilter>;
  hiringSectionTitle?: Maybe<StringFilter>;
  hiringSectionLinkLabel?: Maybe<StringFilter>;
  hiringSectionLinkHref?: Maybe<StringFilter>;
};

export type AboutSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  foundersSectionTitle?: Maybe<SortOrder>;
  foundersSectionSubtitle?: Maybe<SortOrder>;
  investorsSectionTitle?: Maybe<SortOrder>;
  investorsSectionSubtitle?: Maybe<SortOrder>;
  angelsSectionTitle?: Maybe<SortOrder>;
  angelsSectionSubtitle?: Maybe<SortOrder>;
  angelsWithImage?: Maybe<SortOrder>;
  teamSectionEnabled?: Maybe<SortOrder>;
  teamSectionTitle?: Maybe<SortOrder>;
  teamSectionSubtitle?: Maybe<SortOrder>;
  membersWithImage?: Maybe<SortOrder>;
  hiringSectionTitle?: Maybe<SortOrder>;
  hiringSectionLinkLabel?: Maybe<SortOrder>;
  hiringSectionLinkHref?: Maybe<SortOrder>;
};

export type Author = Document & {
  __typename?: 'Author';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  image?: Maybe<MainImage>;
  bioRaw?: Maybe<Scalars['JSON']>;
};

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  name?: Maybe<StringFilter>;
  position?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  image?: Maybe<MainImageFilter>;
};

export type AuthorReference = {
  __typename?: 'AuthorReference';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
};

export type AuthorReferenceFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  author?: Maybe<AuthorFilter>;
};

export type AuthorReferenceSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type AuthorSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  name?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  image?: Maybe<MainImageSorting>;
};

export type Benefits = Document & {
  __typename?: 'Benefits';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
  benefit?: Maybe<Array<Maybe<SectionBlock>>>;
  callToAction?: Maybe<CtaBlock>;
};

export type BenefitsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  youtubeUrl?: Maybe<StringFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type BenefitsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  youtubeUrl?: Maybe<SortOrder>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
};

export type BlockOrBlogBodyImageOrYoutube = Block | BlogBodyImage | Youtube;

export type BlogBodyImage = {
  __typename?: 'BlogBodyImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  captionRaw?: Maybe<Scalars['JSON']>;
  /** Important for SEO and accessiblity. */
  alt?: Maybe<Scalars['String']>;
};

export type BlogBodyImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
  alt?: Maybe<StringFilter>;
};

export type BlogBodyImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
  alt?: Maybe<SortOrder>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>;
};

export type Careers = Document & {
  __typename?: 'Careers';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  firstSubtitle?: Maybe<Scalars['String']>;
  facts?: Maybe<Array<Maybe<FeatureItem>>>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  cultureSectionTitle?: Maybe<Scalars['String']>;
  cultureSectionSubtitleRaw?: Maybe<Scalars['JSON']>;
  culture?: Maybe<Array<Maybe<SectionBlock>>>;
  cultureSectionTaglineRaw?: Maybe<Scalars['JSON']>;
  diversitySectionTitle?: Maybe<Scalars['String']>;
  diversitySectionSubtitleRaw?: Maybe<Scalars['JSON']>;
  valuesSectionTitle?: Maybe<Scalars['String']>;
  valuesSectionSubtitleRaw?: Maybe<Scalars['JSON']>;
  values?: Maybe<Array<Maybe<SectionBlock>>>;
  perksSectionTitle?: Maybe<Scalars['String']>;
  perksSectionSubtitleRaw?: Maybe<Scalars['JSON']>;
  perks?: Maybe<Array<Maybe<FeatureItem>>>;
  openPositionsSectionTitle?: Maybe<Scalars['String']>;
  openPositionsSectionSubtitleRaw?: Maybe<Scalars['JSON']>;
};

export type CareersFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  firstSubtitle?: Maybe<StringFilter>;
  cultureSectionTitle?: Maybe<StringFilter>;
  diversitySectionTitle?: Maybe<StringFilter>;
  valuesSectionTitle?: Maybe<StringFilter>;
  perksSectionTitle?: Maybe<StringFilter>;
  openPositionsSectionTitle?: Maybe<StringFilter>;
};

export type CareersSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  firstSubtitle?: Maybe<SortOrder>;
  cultureSectionTitle?: Maybe<SortOrder>;
  diversitySectionTitle?: Maybe<SortOrder>;
  valuesSectionTitle?: Maybe<SortOrder>;
  perksSectionTitle?: Maybe<SortOrder>;
  openPositionsSectionTitle?: Maybe<SortOrder>;
};

export type CaseStudiesPage = Document & {
  __typename?: 'CaseStudiesPage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type CaseStudiesPageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
};

export type CaseStudiesPageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
};

export type CaseStudy = Document & {
  __typename?: 'CaseStudy';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  company?: Maybe<Scalars['String']>;
  titleRaw?: Maybe<Scalars['JSON']>;
  logo?: Maybe<MainImage>;
  slug?: Maybe<Slug>;
  overviewRaw?: Maybe<Scalars['JSON']>;
  challengeRaw?: Maybe<Scalars['JSON']>;
  solutionRaw?: Maybe<Scalars['JSON']>;
  resultsRaw?: Maybe<Scalars['JSON']>;
  impact?: Maybe<Array<Maybe<FeatureItem>>>;
  quote?: Maybe<TestimonialBlock>;
};

export type CaseStudyFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  company?: Maybe<StringFilter>;
  logo?: Maybe<MainImageFilter>;
  slug?: Maybe<SlugFilter>;
  quote?: Maybe<TestimonialBlockFilter>;
};

export type CaseStudySorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  company?: Maybe<SortOrder>;
  logo?: Maybe<MainImageSorting>;
  slug?: Maybe<SlugSorting>;
  quote?: Maybe<TestimonialBlockSorting>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
};

export type CategorySorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
};

export type Code = {
  __typename?: 'Code';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  highlightedLines?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type CodeFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  language?: Maybe<StringFilter>;
  filename?: Maybe<StringFilter>;
  code?: Maybe<StringFilter>;
};

export type CodeOrSpan = Code | Span;

export type CodeSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
};

export type CtaBlock = {
  __typename?: 'CtaBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['Boolean']>;
  contactEngineer?: Maybe<Scalars['Boolean']>;
  contactEngineerDark?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<Scalars['Boolean']>;
};

export type CtaBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  caption?: Maybe<StringFilter>;
  contact?: Maybe<BooleanFilter>;
  contactEngineer?: Maybe<BooleanFilter>;
  contactEngineerDark?: Maybe<BooleanFilter>;
  signup?: Maybe<BooleanFilter>;
};

export type CtaBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  caption?: Maybe<SortOrder>;
  contact?: Maybe<SortOrder>;
  contactEngineer?: Maybe<SortOrder>;
  contactEngineerDark?: Maybe<SortOrder>;
  signup?: Maybe<SortOrder>;
};


export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>;
};


export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>;
};

export type Demo = Document & {
  __typename?: 'Demo';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  /** Demo Page/ Youtube Demo title */
  title?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
  hubSpotTitle?: Maybe<Scalars['String']>;
  hubSpotSubtitle?: Maybe<Scalars['String']>;
  /** To schedule a 1:1 demo with an engineer. */
  hubSpotDataSrc?: Maybe<Scalars['String']>;
};

export type DemoFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  youtubeUrl?: Maybe<StringFilter>;
  hubSpotTitle?: Maybe<StringFilter>;
  hubSpotSubtitle?: Maybe<StringFilter>;
  hubSpotDataSrc?: Maybe<StringFilter>;
};

export type DemoSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  youtubeUrl?: Maybe<SortOrder>;
  hubSpotTitle?: Maybe<SortOrder>;
  hubSpotSubtitle?: Maybe<SortOrder>;
  hubSpotDataSrc?: Maybe<SortOrder>;
};

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
};

export type DocumentSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
};

export type Edition = Document & {
  __typename?: 'Edition';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  index?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  timeUnit?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EditionFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  index?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  buttonText?: Maybe<StringFilter>;
  buttonUrl?: Maybe<StringFilter>;
  price?: Maybe<StringFilter>;
  timeUnit?: Maybe<StringFilter>;
};

export type EditionSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  index?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  buttonText?: Maybe<SortOrder>;
  buttonUrl?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  timeUnit?: Maybe<SortOrder>;
};

export type Event = Document & {
  __typename?: 'Event';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  mainEventsPageImage?: Maybe<MainImage>;
  heading?: Maybe<Scalars['String']>;
  subheading?: Maybe<Scalars['String']>;
  /** Example: `bg-gradient-to-t from-aserto-black to-aserto-indigo-100` */
  backgroundColor?: Maybe<Scalars['String']>;
  locationHeading?: Maybe<Scalars['String']>;
  locationSubheadingRaw?: Maybe<Scalars['JSON']>;
  locationImage?: Maybe<MainImage>;
  eventBannerImage?: Maybe<MainImage>;
  /** Where to navigate when banner is clicked */
  eventBannerImageHref?: Maybe<Scalars['String']>;
  /** 0-100 */
  eventBannerOpacity?: Maybe<Scalars['Float']>;
  /** The value of the `data-src` field in the hubspot embed snippet. Example: `https://meetings.hubspot.com/omri-gazitt/conference-event-meeting?embed=true`. */
  hubspotMeetingDataSource?: Maybe<Scalars['String']>;
  feature?: Maybe<Scalars['Boolean']>;
};

export type EventFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  mainEventsPageImage?: Maybe<MainImageFilter>;
  heading?: Maybe<StringFilter>;
  subheading?: Maybe<StringFilter>;
  backgroundColor?: Maybe<StringFilter>;
  locationHeading?: Maybe<StringFilter>;
  locationImage?: Maybe<MainImageFilter>;
  eventBannerImage?: Maybe<MainImageFilter>;
  eventBannerImageHref?: Maybe<StringFilter>;
  eventBannerOpacity?: Maybe<FloatFilter>;
  hubspotMeetingDataSource?: Maybe<StringFilter>;
  feature?: Maybe<BooleanFilter>;
};

export type EventSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  mainEventsPageImage?: Maybe<MainImageSorting>;
  heading?: Maybe<SortOrder>;
  subheading?: Maybe<SortOrder>;
  backgroundColor?: Maybe<SortOrder>;
  locationHeading?: Maybe<SortOrder>;
  locationImage?: Maybe<MainImageSorting>;
  eventBannerImage?: Maybe<MainImageSorting>;
  eventBannerImageHref?: Maybe<SortOrder>;
  eventBannerOpacity?: Maybe<SortOrder>;
  hubspotMeetingDataSource?: Maybe<SortOrder>;
  feature?: Maybe<SortOrder>;
};

export type EventsPage = Document & {
  __typename?: 'EventsPage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type EventsPageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
};

export type EventsPageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
};

export type Faq = Document & {
  __typename?: 'Faq';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  faqs?: Maybe<Array<Maybe<FaqBlock>>>;
};

export type FaqBlock = {
  __typename?: 'FaqBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Maybe<QuestionBlock>>>;
};

export type FaqBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type FaqBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type FaqFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
};

export type FaqSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
};

export type FeatureBlock = {
  __typename?: 'FeatureBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  titleRaw?: Maybe<Scalars['JSON']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  element?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  carouselImages?: Maybe<Array<Maybe<MainImage>>>;
};

export type FeatureBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  element?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
};

export type FeatureBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  element?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
};

export type FeatureItem = {
  __typename?: 'FeatureItem';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  icon?: Maybe<MainImage>;
  title?: Maybe<Scalars['String']>;
};

export type FeatureItemFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  icon?: Maybe<MainImageFilter>;
  title?: Maybe<StringFilter>;
};

export type FeatureItemSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  icon?: Maybe<MainImageSorting>;
  title?: Maybe<SortOrder>;
};

export type Features = Document & {
  __typename?: 'Features';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  heroFeatureBlocks?: Maybe<Array<Maybe<FeatureBlock>>>;
  featureBlocks?: Maybe<Array<Maybe<FeatureBlock>>>;
  iconBlockTitleRaw?: Maybe<Scalars['JSON']>;
  featureItems?: Maybe<Array<Maybe<FeatureItem>>>;
  callToAction?: Maybe<CtaBlock>;
};

export type FeaturesFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type FeaturesSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>;
};

export type FounderBlock = {
  __typename?: 'FounderBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  avatar?: Maybe<MainImage>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
};

export type FounderBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  avatar?: Maybe<MainImageFilter>;
  name?: Maybe<StringFilter>;
  position?: Maybe<StringFilter>;
  linkedIn?: Maybe<StringFilter>;
};

export type FounderBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  avatar?: Maybe<MainImageSorting>;
  name?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  linkedIn?: Maybe<SortOrder>;
};

export type Framework = Document & {
  __typename?: 'Framework';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  codename?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FrameworkFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  codename?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type FrameworkPage = Document & {
  __typename?: 'FrameworkPage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  framework?: Maybe<FrameworkReference>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  bodyRaw?: Maybe<Scalars['JSON']>;
  callToAction?: Maybe<CtaBlock>;
};

export type FrameworkPageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  framework?: Maybe<FrameworkReferenceFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type FrameworkPageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  framework?: Maybe<FrameworkReferenceSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type FrameworkReference = {
  __typename?: 'FrameworkReference';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  framework?: Maybe<Framework>;
};

export type FrameworkReferenceFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  framework?: Maybe<FrameworkFilter>;
};

export type FrameworkReferenceSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type FrameworkSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  codename?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
  alt?: Maybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
};

export type Home = Document & {
  __typename?: 'Home';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  tagline?: Maybe<Scalars['String']>;
  positioningStatementRaw?: Maybe<Scalars['JSON']>;
  valueProps?: Maybe<Array<Maybe<ValueProp>>>;
  theProblemSectionTitle?: Maybe<Scalars['String']>;
  theProblemSectionCards?: Maybe<Array<Maybe<SectionBlock>>>;
  testimonialsSectionTitle?: Maybe<Scalars['String']>;
  callToAction?: Maybe<CtaBlock>;
};

export type HomeFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  tagline?: Maybe<StringFilter>;
  theProblemSectionTitle?: Maybe<StringFilter>;
  testimonialsSectionTitle?: Maybe<StringFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type HomeSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  tagline?: Maybe<SortOrder>;
  theProblemSectionTitle?: Maybe<SortOrder>;
  testimonialsSectionTitle?: Maybe<SortOrder>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  nin?: Maybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
};

export type InfoBlock = {
  __typename?: 'InfoBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  imagePath?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<InfoItemBlock>>>;
};

export type InfoBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
  imagePath?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
};

export type InfoBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
  imagePath?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
};

export type InfoItemBlock = {
  __typename?: 'InfoItemBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  title?: Maybe<Scalars['String']>;
};

export type InfoItemBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
  title?: Maybe<StringFilter>;
};

export type InfoItemBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
  title?: Maybe<SortOrder>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>;
};

export type Integration = Document & {
  __typename?: 'Integration';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  technology?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  logo?: Maybe<MainImage>;
  slug?: Maybe<Slug>;
  bodyRaw?: Maybe<Scalars['JSON']>;
  callToAction?: Maybe<CtaBlock>;
};

export type IntegrationFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  technology?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  logo?: Maybe<MainImageFilter>;
  slug?: Maybe<SlugFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type IntegrationSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  technology?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  logo?: Maybe<MainImageSorting>;
  slug?: Maybe<SlugSorting>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type InvestorBlock = {
  __typename?: 'InvestorBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type InvestorBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
  name?: Maybe<StringFilter>;
  href?: Maybe<StringFilter>;
};

export type InvestorBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
  name?: Maybe<SortOrder>;
  href?: Maybe<SortOrder>;
};


export type JobPosting = Document & {
  __typename?: 'JobPosting';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  /** Titles should be catchy, descriptive, and not too long */
  title?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  leverHref?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<MainImage>;
  descriptionRaw?: Maybe<Scalars['JSON']>;
  bodyRaw?: Maybe<Scalars['JSON']>;
};

export type JobPostingFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  team?: Maybe<StringFilter>;
  leverHref?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  publishedAt?: Maybe<DatetimeFilter>;
  icon?: Maybe<MainImageFilter>;
};

export type JobPostingSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  team?: Maybe<SortOrder>;
  leverHref?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  publishedAt?: Maybe<SortOrder>;
  icon?: Maybe<MainImageSorting>;
};

export type LandingPage = Document & {
  __typename?: 'LandingPage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  logo?: Maybe<MainImage>;
  slug?: Maybe<Slug>;
  bodyRaw?: Maybe<Scalars['JSON']>;
  callToAction?: Maybe<CtaBlock>;
};

export type LandingPageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  name?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  logo?: Maybe<MainImageFilter>;
  slug?: Maybe<SlugFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type LandingPageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  name?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  logo?: Maybe<MainImageSorting>;
  slug?: Maybe<SlugSorting>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type MainImage = {
  __typename?: 'MainImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  captionRaw?: Maybe<Scalars['JSON']>;
  /** Important for SEO and accessiblity. */
  alt?: Maybe<Scalars['String']>;
};

export type MainImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
  alt?: Maybe<StringFilter>;
};

export type MainImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
  alt?: Maybe<SortOrder>;
};

export type MemberBlock = {
  __typename?: 'MemberBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  avatar?: Maybe<MainImage>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  bioRaw?: Maybe<Scalars['JSON']>;
  linkedIn?: Maybe<Scalars['String']>;
};

export type MemberBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  avatar?: Maybe<MainImageFilter>;
  name?: Maybe<StringFilter>;
  position?: Maybe<StringFilter>;
  linkedIn?: Maybe<StringFilter>;
};

export type MemberBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  avatar?: Maybe<MainImageSorting>;
  name?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  linkedIn?: Maybe<SortOrder>;
};

export type News = Document & {
  __typename?: 'News';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  newsEntries?: Maybe<Array<Maybe<NewsBlock>>>;
};

export type NewsBlock = {
  __typename?: 'NewsBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  titleRaw?: Maybe<Scalars['JSON']>;
  publication?: Maybe<Scalars['String']>;
  logo?: Maybe<MainImage>;
  publishedOn?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type NewsBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  publication?: Maybe<StringFilter>;
  logo?: Maybe<MainImageFilter>;
  publishedOn?: Maybe<DatetimeFilter>;
  url?: Maybe<StringFilter>;
};

export type NewsBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  publication?: Maybe<SortOrder>;
  logo?: Maybe<MainImageSorting>;
  publishedOn?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type NewsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
};

export type NewsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
};

export type PageMetadata = {
  __typename?: 'PageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** <head><title>{title}</title></head> */
  title?: Maybe<Scalars['String']>;
  /** <head><meta name="description" content="{description}" /></head> */
  description?: Maybe<Scalars['String']>;
};

export type PageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
};

export type PageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
};

export type PillarBlock = {
  __typename?: 'PillarBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  imagePath?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type PillarBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
  imagePath?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  color?: Maybe<StringFilter>;
};

export type PillarBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
  imagePath?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  color?: Maybe<SortOrder>;
};

export type Post = Document & {
  __typename?: 'Post';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  /** Titles should be catchy, descriptive, and not too long */
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['DateTime']>;
  mainImage?: Maybe<MainImage>;
  excerptRaw?: Maybe<Scalars['JSON']>;
  authors?: Maybe<Array<Maybe<AuthorReference>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  bodyRaw?: Maybe<Scalars['JSON']>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  publishedAt?: Maybe<DatetimeFilter>;
  mainImage?: Maybe<MainImageFilter>;
};

export type PostSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  publishedAt?: Maybe<SortOrder>;
  mainImage?: Maybe<MainImageSorting>;
};

export type Pricing = Document & {
  __typename?: 'Pricing';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  pricingTable?: Maybe<Array<Maybe<PricingFeatureCategory>>>;
  editionNameToHighlight?: Maybe<Scalars['String']>;
};

export type PricingFeatureCategory = {
  __typename?: 'PricingFeatureCategory';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  features?: Maybe<Table>;
};

export type PricingFeatureCategoryFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  features?: Maybe<TableFilter>;
};

export type PricingFeatureCategorySorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  features?: Maybe<TableSorting>;
};

export type PricingFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  editionNameToHighlight?: Maybe<StringFilter>;
};

export type PricingSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  editionNameToHighlight?: Maybe<SortOrder>;
};

export type QuestionBlock = {
  __typename?: 'QuestionBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
  answerRaw?: Maybe<Scalars['JSON']>;
};

export type QuestionBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  question?: Maybe<StringFilter>;
};

export type QuestionBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  question?: Maybe<SortOrder>;
};

export type ResourcePage = Document & {
  __typename?: 'ResourcePage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  index?: Maybe<Scalars['Float']>;
  slug?: Maybe<Slug>;
  shortTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  formId?: Maybe<Scalars['String']>;
  formTitle?: Maybe<Scalars['String']>;
  introTitleRaw?: Maybe<Scalars['JSON']>;
  introSubtitleRaw?: Maybe<Scalars['JSON']>;
  introImage?: Maybe<MainImage>;
  introCaptionRaw?: Maybe<Scalars['JSON']>;
  sectionBlock?: Maybe<Array<Maybe<SectionBlock>>>;
  callToAction?: Maybe<CtaBlock>;
};

export type ResourcePageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  index?: Maybe<FloatFilter>;
  slug?: Maybe<SlugFilter>;
  shortTitle?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  formId?: Maybe<StringFilter>;
  formTitle?: Maybe<StringFilter>;
  introImage?: Maybe<MainImageFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type ResourcePageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  index?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  shortTitle?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  formId?: Maybe<SortOrder>;
  formTitle?: Maybe<SortOrder>;
  introImage?: Maybe<MainImageSorting>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  About?: Maybe<About>;
  Author?: Maybe<Author>;
  Benefits?: Maybe<Benefits>;
  Careers?: Maybe<Careers>;
  CaseStudiesPage?: Maybe<CaseStudiesPage>;
  CaseStudy?: Maybe<CaseStudy>;
  Category?: Maybe<Category>;
  Demo?: Maybe<Demo>;
  Edition?: Maybe<Edition>;
  Event?: Maybe<Event>;
  EventsPage?: Maybe<EventsPage>;
  Faq?: Maybe<Faq>;
  Features?: Maybe<Features>;
  Framework?: Maybe<Framework>;
  FrameworkPage?: Maybe<FrameworkPage>;
  Home?: Maybe<Home>;
  Integration?: Maybe<Integration>;
  JobPosting?: Maybe<JobPosting>;
  LandingPage?: Maybe<LandingPage>;
  News?: Maybe<News>;
  Post?: Maybe<Post>;
  Pricing?: Maybe<Pricing>;
  ResourcePage?: Maybe<ResourcePage>;
  SolutionPage?: Maybe<SolutionPage>;
  SiteSettings?: Maybe<SiteSettings>;
  Testimonial?: Maybe<Testimonial>;
  UseCasePage?: Maybe<UseCasePage>;
  Videos?: Maybe<Videos>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  Document?: Maybe<Document>;
  allAbout: Array<About>;
  allAuthor: Array<Author>;
  allBenefits: Array<Benefits>;
  allCareers: Array<Careers>;
  allCaseStudiesPage: Array<CaseStudiesPage>;
  allCaseStudy: Array<CaseStudy>;
  allCategory: Array<Category>;
  allDemo: Array<Demo>;
  allEdition: Array<Edition>;
  allEvent: Array<Event>;
  allEventsPage: Array<EventsPage>;
  allFaq: Array<Faq>;
  allFeatures: Array<Features>;
  allFramework: Array<Framework>;
  allFrameworkPage: Array<FrameworkPage>;
  allHome: Array<Home>;
  allIntegration: Array<Integration>;
  allJobPosting: Array<JobPosting>;
  allLandingPage: Array<LandingPage>;
  allNews: Array<News>;
  allPost: Array<Post>;
  allPricing: Array<Pricing>;
  allResourcePage: Array<ResourcePage>;
  allSolutionPage: Array<SolutionPage>;
  allSiteSettings: Array<SiteSettings>;
  allTestimonial: Array<Testimonial>;
  allUseCasePage: Array<UseCasePage>;
  allVideos: Array<Videos>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allDocument: Array<Document>;
};


export type RootQueryAboutArgs = {
  id: Scalars['ID'];
};


export type RootQueryAuthorArgs = {
  id: Scalars['ID'];
};


export type RootQueryBenefitsArgs = {
  id: Scalars['ID'];
};


export type RootQueryCareersArgs = {
  id: Scalars['ID'];
};


export type RootQueryCaseStudiesPageArgs = {
  id: Scalars['ID'];
};


export type RootQueryCaseStudyArgs = {
  id: Scalars['ID'];
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryDemoArgs = {
  id: Scalars['ID'];
};


export type RootQueryEditionArgs = {
  id: Scalars['ID'];
};


export type RootQueryEventArgs = {
  id: Scalars['ID'];
};


export type RootQueryEventsPageArgs = {
  id: Scalars['ID'];
};


export type RootQueryFaqArgs = {
  id: Scalars['ID'];
};


export type RootQueryFeaturesArgs = {
  id: Scalars['ID'];
};


export type RootQueryFrameworkArgs = {
  id: Scalars['ID'];
};


export type RootQueryFrameworkPageArgs = {
  id: Scalars['ID'];
};


export type RootQueryHomeArgs = {
  id: Scalars['ID'];
};


export type RootQueryIntegrationArgs = {
  id: Scalars['ID'];
};


export type RootQueryJobPostingArgs = {
  id: Scalars['ID'];
};


export type RootQueryLandingPageArgs = {
  id: Scalars['ID'];
};


export type RootQueryNewsArgs = {
  id: Scalars['ID'];
};


export type RootQueryPostArgs = {
  id: Scalars['ID'];
};


export type RootQueryPricingArgs = {
  id: Scalars['ID'];
};


export type RootQueryResourcePageArgs = {
  id: Scalars['ID'];
};


export type RootQuerySolutionPageArgs = {
  id: Scalars['ID'];
};


export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID'];
};


export type RootQueryTestimonialArgs = {
  id: Scalars['ID'];
};


export type RootQueryUseCasePageArgs = {
  id: Scalars['ID'];
};


export type RootQueryVideosArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllAboutArgs = {
  where?: Maybe<AboutFilter>;
  sort?: Maybe<Array<AboutSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllAuthorArgs = {
  where?: Maybe<AuthorFilter>;
  sort?: Maybe<Array<AuthorSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllBenefitsArgs = {
  where?: Maybe<BenefitsFilter>;
  sort?: Maybe<Array<BenefitsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllCareersArgs = {
  where?: Maybe<CareersFilter>;
  sort?: Maybe<Array<CareersSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllCaseStudiesPageArgs = {
  where?: Maybe<CaseStudiesPageFilter>;
  sort?: Maybe<Array<CaseStudiesPageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllCaseStudyArgs = {
  where?: Maybe<CaseStudyFilter>;
  sort?: Maybe<Array<CaseStudySorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllCategoryArgs = {
  where?: Maybe<CategoryFilter>;
  sort?: Maybe<Array<CategorySorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllDemoArgs = {
  where?: Maybe<DemoFilter>;
  sort?: Maybe<Array<DemoSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllEditionArgs = {
  where?: Maybe<EditionFilter>;
  sort?: Maybe<Array<EditionSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllEventArgs = {
  where?: Maybe<EventFilter>;
  sort?: Maybe<Array<EventSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllEventsPageArgs = {
  where?: Maybe<EventsPageFilter>;
  sort?: Maybe<Array<EventsPageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllFaqArgs = {
  where?: Maybe<FaqFilter>;
  sort?: Maybe<Array<FaqSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllFeaturesArgs = {
  where?: Maybe<FeaturesFilter>;
  sort?: Maybe<Array<FeaturesSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllFrameworkArgs = {
  where?: Maybe<FrameworkFilter>;
  sort?: Maybe<Array<FrameworkSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllFrameworkPageArgs = {
  where?: Maybe<FrameworkPageFilter>;
  sort?: Maybe<Array<FrameworkPageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllHomeArgs = {
  where?: Maybe<HomeFilter>;
  sort?: Maybe<Array<HomeSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllIntegrationArgs = {
  where?: Maybe<IntegrationFilter>;
  sort?: Maybe<Array<IntegrationSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllJobPostingArgs = {
  where?: Maybe<JobPostingFilter>;
  sort?: Maybe<Array<JobPostingSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllLandingPageArgs = {
  where?: Maybe<LandingPageFilter>;
  sort?: Maybe<Array<LandingPageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllNewsArgs = {
  where?: Maybe<NewsFilter>;
  sort?: Maybe<Array<NewsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllPostArgs = {
  where?: Maybe<PostFilter>;
  sort?: Maybe<Array<PostSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllPricingArgs = {
  where?: Maybe<PricingFilter>;
  sort?: Maybe<Array<PricingSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllResourcePageArgs = {
  where?: Maybe<ResourcePageFilter>;
  sort?: Maybe<Array<ResourcePageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSolutionPageArgs = {
  where?: Maybe<SolutionPageFilter>;
  sort?: Maybe<Array<SolutionPageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSiteSettingsArgs = {
  where?: Maybe<SiteSettingsFilter>;
  sort?: Maybe<Array<SiteSettingsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllTestimonialArgs = {
  where?: Maybe<TestimonialFilter>;
  sort?: Maybe<Array<TestimonialSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllUseCasePageArgs = {
  where?: Maybe<UseCasePageFilter>;
  sort?: Maybe<Array<UseCasePageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllVideosArgs = {
  where?: Maybe<VideosFilter>;
  sort?: Maybe<Array<VideosSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllDocumentArgs = {
  where?: Maybe<DocumentFilter>;
  sort?: Maybe<Array<DocumentSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  uploadId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  uploadId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  top?: Maybe<FloatFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  aspectRatio?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<Geopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  location?: Maybe<GeopointFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
  lqip?: Maybe<StringFilter>;
  blurHash?: Maybe<StringFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  palette?: Maybe<SanityImagePaletteSorting>;
  lqip?: Maybe<SortOrder>;
  blurHash?: Maybe<SortOrder>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>;
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>;
};

export type SectionBlock = {
  __typename?: 'SectionBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  element?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  glow?: Maybe<Scalars['Boolean']>;
};

export type SectionBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  element?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
  glow?: Maybe<BooleanFilter>;
};

export type SectionBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  element?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
  glow?: Maybe<SortOrder>;
};

export type SiteSettings = Document & {
  __typename?: 'SiteSettings';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** Describe your blog for search engines and social media. */
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Publish an author and set a reference to them here. */
  author?: Maybe<Author>;
};

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  author?: Maybe<AuthorFilter>;
};

export type SiteSettingsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export type SolutionPage = Document & {
  __typename?: 'SolutionPage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  index?: Maybe<Scalars['Float']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  shortHeaderTitle?: Maybe<Scalars['String']>;
  shortFooterTitle?: Maybe<Scalars['String']>;
  heroImage?: Maybe<MainImage>;
  benefit?: Maybe<Array<Maybe<SectionBlock>>>;
  iconBlockTitleRaw?: Maybe<Scalars['JSON']>;
  featureItems?: Maybe<Array<Maybe<FeatureItem>>>;
  callToAction?: Maybe<CtaBlock>;
};

export type SolutionPageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  index?: Maybe<FloatFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
  shortHeaderTitle?: Maybe<StringFilter>;
  shortFooterTitle?: Maybe<StringFilter>;
  heroImage?: Maybe<MainImageFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type SolutionPageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  index?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
  shortHeaderTitle?: Maybe<SortOrder>;
  shortFooterTitle?: Maybe<SortOrder>;
  heroImage?: Maybe<MainImageSorting>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  nin?: Maybe<Array<Scalars['String']>>;
};

export type Table = {
  __typename?: 'Table';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  rows?: Maybe<Array<Maybe<TableRow>>>;
};

export type TableFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type TableRow = {
  __typename?: 'TableRow';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  cells?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TableRowFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type TableRowSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type TableSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type Testimonial = Document & {
  __typename?: 'Testimonial';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  picture?: Maybe<MainImage>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  quoteRaw?: Maybe<Scalars['JSON']>;
  logo?: Maybe<MainImage>;
};

export type TestimonialBlock = {
  __typename?: 'TestimonialBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<MainImage>;
  authorName?: Maybe<Scalars['String']>;
  authorPosition?: Maybe<Scalars['String']>;
  quoteRaw?: Maybe<Scalars['JSON']>;
};

export type TestimonialBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  authorAvatar?: Maybe<MainImageFilter>;
  authorName?: Maybe<StringFilter>;
  authorPosition?: Maybe<StringFilter>;
};

export type TestimonialBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  authorAvatar?: Maybe<MainImageSorting>;
  authorName?: Maybe<SortOrder>;
  authorPosition?: Maybe<SortOrder>;
};

export type TestimonialFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  index?: Maybe<FloatFilter>;
  picture?: Maybe<MainImageFilter>;
  name?: Maybe<StringFilter>;
  position?: Maybe<StringFilter>;
  logo?: Maybe<MainImageFilter>;
};

export type TestimonialSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  picture?: Maybe<MainImageSorting>;
  name?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  logo?: Maybe<MainImageSorting>;
};

export type TextBlock = {
  __typename?: 'TextBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type TextBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
};

export type TextBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type UseCaseFeature = {
  __typename?: 'UseCaseFeature';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  icon?: Maybe<MainImage>;
  titleRaw?: Maybe<Scalars['JSON']>;
  subTitleRaw?: Maybe<Scalars['JSON']>;
};

export type UseCaseFeatureFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  icon?: Maybe<MainImageFilter>;
};

export type UseCaseFeatureSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  icon?: Maybe<MainImageSorting>;
};

export type UseCasePage = Document & {
  __typename?: 'UseCasePage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  index?: Maybe<Scalars['Float']>;
  slug?: Maybe<Slug>;
  shortHeaderTitle?: Maybe<Scalars['String']>;
  shortFooterTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  heroImage?: Maybe<MainImage>;
  introTitleRaw?: Maybe<Scalars['JSON']>;
  introLeftTextRaw?: Maybe<Scalars['JSON']>;
  introRightTextRaw?: Maybe<Scalars['JSON']>;
  useCaseFeatureBlock?: Maybe<Array<Maybe<UseCaseFeature>>>;
  additionalImage?: Maybe<MainImage>;
  callToAction?: Maybe<CtaBlock>;
};

export type UseCasePageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  index?: Maybe<FloatFilter>;
  slug?: Maybe<SlugFilter>;
  shortHeaderTitle?: Maybe<StringFilter>;
  shortFooterTitle?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  heroImage?: Maybe<MainImageFilter>;
  additionalImage?: Maybe<MainImageFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type UseCasePageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  index?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  shortHeaderTitle?: Maybe<SortOrder>;
  shortFooterTitle?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  heroImage?: Maybe<MainImageSorting>;
  additionalImage?: Maybe<MainImageSorting>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type ValueProp = {
  __typename?: 'ValueProp';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  element?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  glow?: Maybe<Scalars['Boolean']>;
};

export type ValuePropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  element?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
  glow?: Maybe<BooleanFilter>;
};

export type ValuePropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  element?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
  glow?: Maybe<SortOrder>;
};

export type VideoBlock = {
  __typename?: 'VideoBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  defaultPreview?: Maybe<MainImage>;
};

export type VideoBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  defaultPreview?: Maybe<MainImageFilter>;
};

export type VideoBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  defaultPreview?: Maybe<MainImageSorting>;
};

export type Videos = Document & {
  __typename?: 'Videos';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  metadata?: Maybe<PageMetadata>;
  title?: Maybe<Scalars['String']>;
  subtitleRaw?: Maybe<Scalars['JSON']>;
  mainYoutubeUrl?: Maybe<Scalars['String']>;
  videoContentBlocks?: Maybe<Array<Maybe<VideoBlock>>>;
  callToAction?: Maybe<CtaBlock>;
};

export type VideosFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  metadata?: Maybe<PageMetadataFilter>;
  title?: Maybe<StringFilter>;
  mainYoutubeUrl?: Maybe<StringFilter>;
  callToAction?: Maybe<CtaBlockFilter>;
};

export type VideosSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  metadata?: Maybe<PageMetadataSorting>;
  title?: Maybe<SortOrder>;
  mainYoutubeUrl?: Maybe<SortOrder>;
  callToAction?: Maybe<CtaBlockSorting>;
};

export type Youtube = {
  __typename?: 'Youtube';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type YoutubeFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type YoutubeSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type CaseStudyMetaFragment = (
  { __typename?: 'CaseStudy' }
  & Pick<CaseStudy, '_id' | '_createdAt' | 'company' | 'titleRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, logo?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )> }
);

export type CaseStudyFragment = (
  { __typename?: 'CaseStudy' }
  & Pick<CaseStudy, 'overviewRaw' | 'challengeRaw' | 'solutionRaw' | 'resultsRaw'>
  & { impact?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureItem' }
    & Pick<FeatureItem, 'title'>
    & { icon?: Maybe<(
      { __typename?: 'MainImage' }
      & ImageFragment
    )> }
  )>>>, quote?: Maybe<(
    { __typename?: 'TestimonialBlock' }
    & Pick<TestimonialBlock, 'authorName' | 'authorPosition' | 'quoteRaw'>
    & { authorAvatar?: Maybe<(
      { __typename?: 'MainImage' }
      & ImageFragment
    )> }
  )> }
  & CaseStudyMetaFragment
);

export type EditionFragment = (
  { __typename?: 'Edition' }
  & Pick<Edition, '_id' | '_createdAt' | 'index' | 'title' | 'description' | 'buttonText' | 'buttonUrl' | 'price' | 'timeUnit' | 'features'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )> }
);

export type EventFragment = (
  { __typename?: 'Event' }
  & Pick<Event, '_id' | '_createdAt' | 'title' | 'heading' | 'subheading' | 'backgroundColor' | 'hubspotMeetingDataSource' | 'locationHeading' | 'locationSubheadingRaw' | 'eventBannerImageHref' | 'eventBannerOpacity' | 'feature'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, locationImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, eventBannerImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, mainEventsPageImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type FeatureBlockFragment = (
  { __typename?: 'FeatureBlock' }
  & Pick<FeatureBlock, 'titleRaw' | 'subtitleRaw' | 'element'>
  & { image?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, carouselImages?: Maybe<Array<Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>>> }
);

export type FeatureItemFragment = (
  { __typename?: 'FeatureItem' }
  & Pick<FeatureItem, 'title'>
  & { icon?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type FrameworkPageMetaFragment = (
  { __typename?: 'FrameworkPage' }
  & Pick<FrameworkPage, '_id' | '_createdAt' | 'title' | 'subtitle'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, framework?: Maybe<(
    { __typename?: 'FrameworkReference' }
    & { framework?: Maybe<(
      { __typename?: 'Framework' }
      & Pick<Framework, 'codename' | 'title'>
    )> }
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )> }
);

export type FrameworkPageFragment = (
  { __typename?: 'FrameworkPage' }
  & Pick<FrameworkPage, 'bodyRaw'>
  & { callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
  & FrameworkPageMetaFragment
);

export type ImageFragment = (
  { __typename?: 'MainImage' }
  & Pick<MainImage, 'captionRaw' | 'alt'>
  & { crop?: Maybe<(
    { __typename?: 'SanityImageCrop' }
    & Pick<SanityImageCrop, '_key' | '_type' | 'top' | 'bottom' | 'left' | 'right'>
  )>, hotspot?: Maybe<(
    { __typename?: 'SanityImageHotspot' }
    & Pick<SanityImageHotspot, '_key' | '_type' | 'x' | 'y' | 'height' | 'width'>
  )>, asset?: Maybe<(
    { __typename?: 'SanityImageAsset' }
    & Pick<SanityImageAsset, '_id' | 'url' | 'title' | 'assetId' | 'path'>
    & { metadata?: Maybe<(
      { __typename?: 'SanityImageMetadata' }
      & { dimensions?: Maybe<(
        { __typename?: 'SanityImageDimensions' }
        & Pick<SanityImageDimensions, 'width' | 'height'>
      )> }
    )> }
  )> }
);

export type IntegrationMetaFragment = (
  { __typename?: 'Integration' }
  & Pick<Integration, '_id' | '_createdAt' | 'technology' | 'title' | 'subtitle'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, logo?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )> }
);

export type IntegrationFragment = (
  { __typename?: 'Integration' }
  & Pick<Integration, 'bodyRaw'>
  & { callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
  & IntegrationMetaFragment
);

export type LandingPageFragment = (
  { __typename?: 'LandingPage' }
  & Pick<LandingPage, '_id' | '_createdAt' | 'name' | 'title' | 'subtitle' | 'bodyRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, logo?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
);

export type PostMetaFragment = (
  { __typename?: 'Post' }
  & Pick<Post, '_id' | 'publishedAt' | 'title' | 'excerptRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, mainImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, authors?: Maybe<Array<Maybe<(
    { __typename?: 'AuthorReference' }
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'name' | 'bioRaw' | 'position'>
      & { slug?: Maybe<(
        { __typename?: 'Slug' }
        & Pick<Slug, 'current'>
      )>, image?: Maybe<(
        { __typename?: 'MainImage' }
        & ImageFragment
      )> }
    )> }
  )>>>, categories?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'title' | 'description'>
  )>>> }
);

export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'bodyRaw'>
  & PostMetaFragment
);

export type ResourceFragment = (
  { __typename?: 'ResourcePage' }
  & Pick<ResourcePage, '_id' | '_createdAt' | 'index' | 'shortTitle' | 'title' | 'subtitleRaw' | 'formId' | 'formTitle' | 'introTitleRaw' | 'introSubtitleRaw' | 'introCaptionRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, introImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, sectionBlock?: Maybe<Array<Maybe<(
    { __typename?: 'SectionBlock' }
    & SectionBlockFragment
  )>>>, callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
);

export type SectionBlockFragment = (
  { __typename?: 'SectionBlock' }
  & Pick<SectionBlock, 'title' | 'subtitleRaw' | 'element' | 'glow'>
  & { image?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type SolutionFragment = (
  { __typename?: 'SolutionPage' }
  & Pick<SolutionPage, '_id' | '_createdAt' | 'index' | 'title' | 'subtitleRaw' | 'shortHeaderTitle' | 'shortFooterTitle' | 'iconBlockTitleRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, heroImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, benefit?: Maybe<Array<Maybe<(
    { __typename?: 'SectionBlock' }
    & SectionBlockFragment
  )>>>, featureItems?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureItem' }
    & FeatureItemFragment
  )>>>, callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
);

export type TestimonialFragment = (
  { __typename?: 'Testimonial' }
  & Pick<Testimonial, '_id' | '_createdAt' | 'index' | 'name' | 'position' | 'quoteRaw'>
  & { picture?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, logo?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type UseCaseFeatureFragment = (
  { __typename?: 'UseCaseFeature' }
  & Pick<UseCaseFeature, 'titleRaw' | 'subTitleRaw'>
  & { icon?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type UseCaseFragment = (
  { __typename?: 'UseCasePage' }
  & Pick<UseCasePage, '_id' | '_createdAt' | 'index' | 'shortHeaderTitle' | 'shortFooterTitle' | 'title' | 'subtitleRaw' | 'introTitleRaw' | 'introLeftTextRaw' | 'introRightTextRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, heroImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, useCaseFeatureBlock?: Maybe<Array<Maybe<(
    { __typename?: 'UseCaseFeature' }
    & UseCaseFeatureFragment
  )>>>, additionalImage?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )>, callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
);

export type ValuePropFragment = (
  { __typename?: 'ValueProp' }
  & Pick<ValueProp, 'title' | 'element' | 'subtitleRaw' | 'glow'>
  & { image?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type FounderFragment = (
  { __typename?: 'FounderBlock' }
  & Pick<FounderBlock, 'name' | 'position' | 'linkedIn'>
  & { avatar?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type MemberFragment = (
  { __typename?: 'MemberBlock' }
  & Pick<MemberBlock, 'name' | 'position' | 'bioRaw' | 'linkedIn'>
  & { avatar?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type InvestorFragment = (
  { __typename?: 'InvestorBlock' }
  & Pick<InvestorBlock, 'name' | 'href'>
  & { image?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type AboutPageFragment = (
  { __typename?: 'About' }
  & Pick<About, 'title' | 'subtitleRaw' | 'foundersSectionTitle' | 'foundersSectionSubtitle' | 'teamSectionEnabled' | 'teamSectionTitle' | 'teamSectionSubtitle' | 'membersWithImage' | 'investorsSectionTitle' | 'investorsSectionSubtitle' | 'angelsSectionTitle' | 'angelsSectionSubtitle' | 'angelsWithImage' | 'hiringSectionTitle' | 'hiringSectionLinkLabel' | 'hiringSectionLinkHref'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, founders?: Maybe<Array<Maybe<(
    { __typename?: 'FounderBlock' }
    & FounderFragment
  )>>>, team?: Maybe<Array<Maybe<(
    { __typename?: 'MemberBlock' }
    & MemberFragment
  )>>>, investors?: Maybe<Array<Maybe<(
    { __typename?: 'InvestorBlock' }
    & InvestorFragment
  )>>>, angels?: Maybe<Array<Maybe<(
    { __typename?: 'FounderBlock' }
    & FounderFragment
  )>>> }
);

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = (
  { __typename?: 'RootQuery' }
  & { allAbout: Array<(
    { __typename?: 'About' }
    & AboutPageFragment
  )> }
);

export type BenefitsPageFragment = (
  { __typename?: 'Benefits' }
  & Pick<Benefits, 'title' | 'youtubeUrl'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, benefit?: Maybe<Array<Maybe<(
    { __typename?: 'SectionBlock' }
    & SectionBlockFragment
  )>>> }
);

export type BenefitsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BenefitsPageQuery = (
  { __typename?: 'RootQuery' }
  & { allBenefits: Array<(
    { __typename?: 'Benefits' }
    & BenefitsPageFragment
  )> }
);

export type BlogIndexQueryVariables = Exact<{
  now?: Maybe<Scalars['DateTime']>;
}>;


export type BlogIndexQuery = (
  { __typename?: 'RootQuery' }
  & { allPost: Array<(
    { __typename?: 'Post' }
    & PostMetaFragment
  )> }
);

export type BlogPostPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostPathsQuery = (
  { __typename?: 'RootQuery' }
  & { allPost: Array<(
    { __typename?: 'Post' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type BlogPostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogPostQuery = (
  { __typename?: 'RootQuery' }
  & { allPost: Array<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

export type JobPostingMetaFragment = (
  { __typename?: 'JobPosting' }
  & Pick<JobPosting, 'title' | 'team' | 'leverHref' | 'publishedAt' | 'descriptionRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, icon?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type JobPostingFragment = (
  { __typename?: 'JobPosting' }
  & Pick<JobPosting, 'bodyRaw'>
  & JobPostingMetaFragment
);

export type CareersPageFragment = (
  { __typename?: 'Careers' }
  & Pick<Careers, 'title' | 'firstSubtitle' | 'subtitleRaw' | 'cultureSectionTitle' | 'cultureSectionSubtitleRaw' | 'cultureSectionTaglineRaw' | 'diversitySectionTitle' | 'diversitySectionSubtitleRaw' | 'valuesSectionTitle' | 'valuesSectionSubtitleRaw' | 'perksSectionTitle' | 'perksSectionSubtitleRaw' | 'openPositionsSectionTitle' | 'openPositionsSectionSubtitleRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, facts?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureItem' }
    & Pick<FeatureItem, 'title'>
    & { icon?: Maybe<(
      { __typename?: 'MainImage' }
      & ImageFragment
    )> }
  )>>>, culture?: Maybe<Array<Maybe<(
    { __typename?: 'SectionBlock' }
    & SectionBlockFragment
  )>>>, values?: Maybe<Array<Maybe<(
    { __typename?: 'SectionBlock' }
    & SectionBlockFragment
  )>>>, perks?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureItem' }
    & FeatureItemFragment
  )>>> }
);

export type CareersPageQueryVariables = Exact<{ [key: string]: never; }>;


export type CareersPageQuery = (
  { __typename?: 'RootQuery' }
  & { allCareers: Array<(
    { __typename?: 'Careers' }
    & CareersPageFragment
  )>, allJobPosting: Array<(
    { __typename?: 'JobPosting' }
    & JobPostingMetaFragment
  )> }
);

export type JobPostingPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobPostingPathsQuery = (
  { __typename?: 'RootQuery' }
  & { allJobPosting: Array<(
    { __typename?: 'JobPosting' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type JobPostingQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type JobPostingQuery = (
  { __typename?: 'RootQuery' }
  & { allJobPosting: Array<(
    { __typename?: 'JobPosting' }
    & JobPostingFragment
  )> }
);

export type CaseStudiesPageFragment = (
  { __typename?: 'CaseStudiesPage' }
  & Pick<CaseStudiesPage, 'title' | 'subtitle'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )> }
);

export type CaseStudiesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type CaseStudiesPageQuery = (
  { __typename?: 'RootQuery' }
  & { allCaseStudiesPage: Array<(
    { __typename?: 'CaseStudiesPage' }
    & CaseStudiesPageFragment
  )>, allCaseStudy: Array<(
    { __typename?: 'CaseStudy' }
    & CaseStudyMetaFragment
  )> }
);

export type CaseStudyIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type CaseStudyIndexQuery = (
  { __typename?: 'RootQuery' }
  & { allCaseStudy: Array<(
    { __typename?: 'CaseStudy' }
    & CaseStudyMetaFragment
  )> }
);

export type CaseStudyPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type CaseStudyPathsQuery = (
  { __typename?: 'RootQuery' }
  & { allCaseStudy: Array<(
    { __typename?: 'CaseStudy' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type CaseStudyQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CaseStudyQuery = (
  { __typename?: 'RootQuery' }
  & { allCaseStudy: Array<(
    { __typename?: 'CaseStudy' }
    & CaseStudyFragment
  )> }
);

export type DemoPageQueryVariables = Exact<{ [key: string]: never; }>;


export type DemoPageQuery = (
  { __typename?: 'RootQuery' }
  & { allDemo: Array<(
    { __typename?: 'Demo' }
    & Pick<Demo, 'title' | 'youtubeUrl' | 'hubSpotTitle' | 'hubSpotSubtitle' | 'hubSpotDataSrc'>
    & { metadata?: Maybe<(
      { __typename?: 'PageMetadata' }
      & Pick<PageMetadata, 'title' | 'description'>
    )> }
  )> }
);

export type EventsPageFragment = (
  { __typename?: 'EventsPage' }
  & Pick<EventsPage, 'title' | 'subtitle'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )> }
);

export type EventsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsPageQuery = (
  { __typename?: 'RootQuery' }
  & { allEventsPage: Array<(
    { __typename?: 'EventsPage' }
    & EventsPageFragment
  )>, allEvent: Array<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export type EventIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type EventIndexQuery = (
  { __typename?: 'RootQuery' }
  & { allEvent: Array<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export type EventPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventPathsQuery = (
  { __typename?: 'RootQuery' }
  & { allEvent: Array<(
    { __typename?: 'Event' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type EventQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type EventQuery = (
  { __typename?: 'RootQuery' }
  & { allEvent: Array<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export type FaqItemFragment = (
  { __typename?: 'FaqBlock' }
  & Pick<FaqBlock, 'title'>
  & { questions?: Maybe<Array<Maybe<(
    { __typename?: 'QuestionBlock' }
    & Pick<QuestionBlock, 'question' | 'answerRaw'>
  )>>> }
);

export type FaqPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FaqPageQuery = (
  { __typename?: 'RootQuery' }
  & { allFaq: Array<(
    { __typename?: 'Faq' }
    & Pick<Faq, 'title' | 'subtitle'>
    & { metadata?: Maybe<(
      { __typename?: 'PageMetadata' }
      & Pick<PageMetadata, 'title' | 'description'>
    )>, slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )>, faqs?: Maybe<Array<Maybe<(
      { __typename?: 'FaqBlock' }
      & FaqItemFragment
    )>>> }
  )> }
);

export type FaqPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqPagePathsQuery = (
  { __typename?: 'RootQuery' }
  & { allFaq: Array<(
    { __typename?: 'Faq' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type FeaturesPageFragment = (
  { __typename?: 'Features' }
  & Pick<Features, 'title' | 'subtitleRaw' | 'iconBlockTitleRaw'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, heroFeatureBlocks?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureBlock' }
    & FeatureBlockFragment
  )>>>, featureBlocks?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureBlock' }
    & FeatureBlockFragment
  )>>>, featureItems?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureItem' }
    & FeatureItemFragment
  )>>>, callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
);

export type FeaturesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturesPageQuery = (
  { __typename?: 'RootQuery' }
  & { allFeatures: Array<(
    { __typename?: 'Features' }
    & FeaturesPageFragment
  )> }
);

export type FrameworkPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type FrameworkPagesQuery = (
  { __typename?: 'RootQuery' }
  & { allFrameworkPage: Array<(
    { __typename?: 'FrameworkPage' }
    & FrameworkPageMetaFragment
  )> }
);

export type FrameworkPageIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type FrameworkPageIndexQuery = (
  { __typename?: 'RootQuery' }
  & { allFrameworkPage: Array<(
    { __typename?: 'FrameworkPage' }
    & FrameworkPageMetaFragment
  )> }
);

export type FrameworkPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type FrameworkPathsQuery = (
  { __typename?: 'RootQuery' }
  & { allFrameworkPage: Array<(
    { __typename?: 'FrameworkPage' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type FrameworkPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FrameworkPageQuery = (
  { __typename?: 'RootQuery' }
  & { allFrameworkPage: Array<(
    { __typename?: 'FrameworkPage' }
    & FrameworkPageFragment
  )>, allTestimonial: Array<(
    { __typename?: 'Testimonial' }
    & TestimonialFragment
  )> }
);

export type HomePageFragment = (
  { __typename?: 'Home' }
  & Pick<Home, 'tagline' | 'positioningStatementRaw' | 'theProblemSectionTitle' | 'testimonialsSectionTitle'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, valueProps?: Maybe<Array<Maybe<(
    { __typename?: 'ValueProp' }
    & ValuePropFragment
  )>>>, theProblemSectionCards?: Maybe<Array<Maybe<(
    { __typename?: 'SectionBlock' }
    & SectionBlockFragment
  )>>>, callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
);

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = (
  { __typename?: 'RootQuery' }
  & { allHome: Array<(
    { __typename?: 'Home' }
    & HomePageFragment
  )>, allCaseStudy: Array<(
    { __typename?: 'CaseStudy' }
    & CaseStudyMetaFragment
  )>, allEvent: Array<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export type IntegrationsQueryVariables = Exact<{ [key: string]: never; }>;


export type IntegrationsQuery = (
  { __typename?: 'RootQuery' }
  & { allIntegration: Array<(
    { __typename?: 'Integration' }
    & IntegrationMetaFragment
  )> }
);

export type IntegrationIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type IntegrationIndexQuery = (
  { __typename?: 'RootQuery' }
  & { allIntegration: Array<(
    { __typename?: 'Integration' }
    & IntegrationMetaFragment
  )> }
);

export type IntegrationPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type IntegrationPathsQuery = (
  { __typename?: 'RootQuery' }
  & { allIntegration: Array<(
    { __typename?: 'Integration' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type IntegrationQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IntegrationQuery = (
  { __typename?: 'RootQuery' }
  & { allIntegration: Array<(
    { __typename?: 'Integration' }
    & IntegrationFragment
  )>, allTestimonial: Array<(
    { __typename?: 'Testimonial' }
    & TestimonialFragment
  )> }
);

export type LandingPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPagesQuery = (
  { __typename?: 'RootQuery' }
  & { allLandingPage: Array<(
    { __typename?: 'LandingPage' }
    & LandingPageFragment
  )> }
);

export type LandingPageIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPageIndexQuery = (
  { __typename?: 'RootQuery' }
  & { allLandingPage: Array<(
    { __typename?: 'LandingPage' }
    & LandingPageFragment
  )> }
);

export type LandingPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPagePathsQuery = (
  { __typename?: 'RootQuery' }
  & { allLandingPage: Array<(
    { __typename?: 'LandingPage' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type LandingPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type LandingPageQuery = (
  { __typename?: 'RootQuery' }
  & { allLandingPage: Array<(
    { __typename?: 'LandingPage' }
    & LandingPageFragment
  )>, allTestimonial: Array<(
    { __typename?: 'Testimonial' }
    & TestimonialFragment
  )> }
);

export type NewsItemFragment = (
  { __typename?: 'NewsBlock' }
  & Pick<NewsBlock, 'titleRaw' | 'publication' | 'publishedOn' | 'url'>
  & { logo?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type NewsPageFragment = (
  { __typename?: 'News' }
  & Pick<News, 'title' | 'subtitle'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, newsEntries?: Maybe<Array<Maybe<(
    { __typename?: 'NewsBlock' }
    & NewsItemFragment
  )>>> }
);

export type NewsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsPageQuery = (
  { __typename?: 'RootQuery' }
  & { allNews: Array<(
    { __typename?: 'News' }
    & NewsPageFragment
  )> }
);

export type PricingFragment = (
  { __typename?: 'Pricing' }
  & Pick<Pricing, 'title' | 'subtitle' | 'editionNameToHighlight'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, pricingTable?: Maybe<Array<Maybe<(
    { __typename?: 'PricingFeatureCategory' }
    & Pick<PricingFeatureCategory, 'title'>
    & { features?: Maybe<(
      { __typename?: 'Table' }
      & { rows?: Maybe<Array<Maybe<(
        { __typename?: 'TableRow' }
        & Pick<TableRow, 'cells'>
      )>>> }
    )> }
  )>>> }
);

export type PricingQueryVariables = Exact<{ [key: string]: never; }>;


export type PricingQuery = (
  { __typename?: 'RootQuery' }
  & { allPricing: Array<(
    { __typename?: 'Pricing' }
    & PricingFragment
  )>, allEdition: Array<(
    { __typename?: 'Edition' }
    & EditionFragment
  )> }
);

export type ResourcesPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ResourcesPagesQuery = (
  { __typename?: 'RootQuery' }
  & { allResourcePage: Array<(
    { __typename?: 'ResourcePage' }
    & ResourceFragment
  )> }
);

export type ResourcesPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type ResourcesPagePathsQuery = (
  { __typename?: 'RootQuery' }
  & { allResourcePage: Array<(
    { __typename?: 'ResourcePage' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type ResourcesPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ResourcesPageQuery = (
  { __typename?: 'RootQuery' }
  & { allResourcePage: Array<(
    { __typename?: 'ResourcePage' }
    & ResourceFragment
  )> }
);

export type SolutionsPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type SolutionsPagesQuery = (
  { __typename?: 'RootQuery' }
  & { allSolutionPage: Array<(
    { __typename?: 'SolutionPage' }
    & SolutionFragment
  )> }
);

export type SolutionsPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type SolutionsPagePathsQuery = (
  { __typename?: 'RootQuery' }
  & { allSolutionPage: Array<(
    { __typename?: 'SolutionPage' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type SolutionsPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SolutionsPageQuery = (
  { __typename?: 'RootQuery' }
  & { allSolutionPage: Array<(
    { __typename?: 'SolutionPage' }
    & SolutionFragment
  )> }
);

export type TestimonialsQueryVariables = Exact<{ [key: string]: never; }>;


export type TestimonialsQuery = (
  { __typename?: 'RootQuery' }
  & { allTestimonial: Array<(
    { __typename?: 'Testimonial' }
    & TestimonialFragment
  )> }
);

export type UseCasesPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type UseCasesPagesQuery = (
  { __typename?: 'RootQuery' }
  & { allUseCasePage: Array<(
    { __typename?: 'UseCasePage' }
    & UseCaseFragment
  )> }
);

export type UseCasesPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type UseCasesPagePathsQuery = (
  { __typename?: 'RootQuery' }
  & { allUseCasePage: Array<(
    { __typename?: 'UseCasePage' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type UseCasesPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type UseCasesPageQuery = (
  { __typename?: 'RootQuery' }
  & { allUseCasePage: Array<(
    { __typename?: 'UseCasePage' }
    & UseCaseFragment
  )> }
);

export type VideoItemFragment = (
  { __typename?: 'VideoBlock' }
  & Pick<VideoBlock, 'url' | 'description'>
  & { defaultPreview?: Maybe<(
    { __typename?: 'MainImage' }
    & ImageFragment
  )> }
);

export type VideosPageFragment = (
  { __typename?: 'Videos' }
  & Pick<Videos, 'title' | 'subtitleRaw' | 'mainYoutubeUrl'>
  & { metadata?: Maybe<(
    { __typename?: 'PageMetadata' }
    & Pick<PageMetadata, 'title' | 'description'>
  )>, videoContentBlocks?: Maybe<Array<Maybe<(
    { __typename?: 'VideoBlock' }
    & VideoItemFragment
  )>>>, callToAction?: Maybe<(
    { __typename?: 'CtaBlock' }
    & Pick<CtaBlock, 'caption' | 'signup' | 'contact' | 'contactEngineer' | 'contactEngineerDark'>
  )> }
);

export type VideosPageQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosPageQuery = (
  { __typename?: 'RootQuery' }
  & { allVideos: Array<(
    { __typename?: 'Videos' }
    & VideosPageFragment
  )> }
);

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
  captionRaw
  alt
}
    `;
export const CaseStudyMetaFragmentDoc = gql`
    fragment CaseStudyMeta on CaseStudy {
  _id
  _createdAt
  metadata {
    title
    description
  }
  company
  logo {
    ...Image
  }
  titleRaw
  slug {
    current
  }
}
    ${ImageFragmentDoc}`;
export const CaseStudyFragmentDoc = gql`
    fragment CaseStudy on CaseStudy {
  ...CaseStudyMeta
  overviewRaw
  challengeRaw
  solutionRaw
  resultsRaw
  impact {
    icon {
      ...Image
    }
    title
  }
  quote {
    authorAvatar {
      ...Image
    }
    authorName
    authorPosition
    quoteRaw
  }
}
    ${CaseStudyMetaFragmentDoc}
${ImageFragmentDoc}`;
export const EditionFragmentDoc = gql`
    fragment Edition on Edition {
  _id
  _createdAt
  metadata {
    title
    description
  }
  index
  title
  description
  buttonText
  buttonUrl
  price
  timeUnit
  features
}
    `;
export const EventFragmentDoc = gql`
    fragment Event on Event {
  _id
  _createdAt
  metadata {
    title
    description
  }
  title
  slug {
    current
  }
  heading
  subheading
  backgroundColor
  hubspotMeetingDataSource
  locationHeading
  locationSubheadingRaw
  locationImage {
    ...Image
  }
  eventBannerImage {
    ...Image
  }
  eventBannerImageHref
  eventBannerOpacity
  mainEventsPageImage {
    ...Image
  }
  feature
}
    ${ImageFragmentDoc}`;
export const FrameworkPageMetaFragmentDoc = gql`
    fragment FrameworkPageMeta on FrameworkPage {
  _id
  _createdAt
  metadata {
    title
    description
  }
  framework {
    framework {
      codename
      title
    }
  }
  title
  subtitle
  slug {
    current
  }
}
    `;
export const FrameworkPageFragmentDoc = gql`
    fragment FrameworkPage on FrameworkPage {
  ...FrameworkPageMeta
  bodyRaw
  callToAction {
    caption
    signup
    contact
    contactEngineer
    contactEngineerDark
  }
}
    ${FrameworkPageMetaFragmentDoc}`;
export const IntegrationMetaFragmentDoc = gql`
    fragment IntegrationMeta on Integration {
  _id
  _createdAt
  metadata {
    title
    description
  }
  technology
  logo {
    ...Image
  }
  title
  subtitle
  slug {
    current
  }
}
    ${ImageFragmentDoc}`;
export const IntegrationFragmentDoc = gql`
    fragment Integration on Integration {
  ...IntegrationMeta
  bodyRaw
  callToAction {
    caption
    signup
    contact
    contactEngineer
    contactEngineerDark
  }
}
    ${IntegrationMetaFragmentDoc}`;
export const LandingPageFragmentDoc = gql`
    fragment LandingPage on LandingPage {
  _id
  _createdAt
  metadata {
    title
    description
  }
  name
  logo {
    ...Image
  }
  title
  subtitle
  slug {
    current
  }
  bodyRaw
  callToAction {
    caption
    signup
    contact
    contactEngineer
    contactEngineerDark
  }
}
    ${ImageFragmentDoc}`;
export const PostMetaFragmentDoc = gql`
    fragment PostMeta on Post {
  _id
  metadata {
    title
    description
  }
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
    ${ImageFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  ...PostMeta
  bodyRaw
}
    ${PostMetaFragmentDoc}`;
export const SectionBlockFragmentDoc = gql`
    fragment SectionBlock on SectionBlock {
  image {
    ...Image
  }
  title
  subtitleRaw
  element
  glow
}
    ${ImageFragmentDoc}`;
export const ResourceFragmentDoc = gql`
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
${SectionBlockFragmentDoc}`;
export const FeatureItemFragmentDoc = gql`
    fragment FeatureItem on FeatureItem {
  icon {
    ...Image
  }
  title
}
    ${ImageFragmentDoc}`;
export const SolutionFragmentDoc = gql`
    fragment Solution on SolutionPage {
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
  title
  subtitleRaw
  shortHeaderTitle
  shortFooterTitle
  heroImage {
    ...Image
  }
  benefit {
    ...SectionBlock
  }
  iconBlockTitleRaw
  featureItems {
    ...FeatureItem
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
${FeatureItemFragmentDoc}`;
export const TestimonialFragmentDoc = gql`
    fragment Testimonial on Testimonial {
  _id
  _createdAt
  index
  picture {
    ...Image
  }
  name
  position
  logo {
    ...Image
  }
  quoteRaw
}
    ${ImageFragmentDoc}`;
export const UseCaseFeatureFragmentDoc = gql`
    fragment UseCaseFeature on UseCaseFeature {
  icon {
    ...Image
  }
  titleRaw
  subTitleRaw
}
    ${ImageFragmentDoc}`;
export const UseCaseFragmentDoc = gql`
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
${UseCaseFeatureFragmentDoc}`;
export const FounderFragmentDoc = gql`
    fragment Founder on FounderBlock {
  avatar {
    ...Image
  }
  name
  position
  linkedIn
}
    ${ImageFragmentDoc}`;
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
    ${ImageFragmentDoc}`;
export const InvestorFragmentDoc = gql`
    fragment Investor on InvestorBlock {
  name
  href
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const AboutPageFragmentDoc = gql`
    fragment AboutPage on About {
  metadata {
    title
    description
  }
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
  membersWithImage
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
${InvestorFragmentDoc}`;
export const BenefitsPageFragmentDoc = gql`
    fragment BenefitsPage on Benefits {
  metadata {
    title
    description
  }
  title
  youtubeUrl
  benefit {
    ...SectionBlock
  }
}
    ${SectionBlockFragmentDoc}`;
export const JobPostingMetaFragmentDoc = gql`
    fragment JobPostingMeta on JobPosting {
  metadata {
    title
    description
  }
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
    ${ImageFragmentDoc}`;
export const JobPostingFragmentDoc = gql`
    fragment JobPosting on JobPosting {
  ...JobPostingMeta
  bodyRaw
}
    ${JobPostingMetaFragmentDoc}`;
export const CareersPageFragmentDoc = gql`
    fragment CareersPage on Careers {
  metadata {
    title
    description
  }
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
${FeatureItemFragmentDoc}`;
export const CaseStudiesPageFragmentDoc = gql`
    fragment CaseStudiesPage on CaseStudiesPage {
  metadata {
    title
    description
  }
  title
  subtitle
}
    `;
export const EventsPageFragmentDoc = gql`
    fragment EventsPage on EventsPage {
  metadata {
    title
    description
  }
  title
  subtitle
}
    `;
export const FaqItemFragmentDoc = gql`
    fragment FaqItem on FaqBlock {
  title
  questions {
    question
    answerRaw
  }
}
    `;
export const FeatureBlockFragmentDoc = gql`
    fragment FeatureBlock on FeatureBlock {
  titleRaw
  subtitleRaw
  element
  image {
    ...Image
  }
  carouselImages {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const FeaturesPageFragmentDoc = gql`
    fragment FeaturesPage on Features {
  metadata {
    title
    description
  }
  title
  subtitleRaw
  heroFeatureBlocks {
    ...FeatureBlock
  }
  featureBlocks {
    ...FeatureBlock
  }
  iconBlockTitleRaw
  featureItems {
    ...FeatureItem
  }
  callToAction {
    caption
    signup
    contact
    contactEngineer
    contactEngineerDark
  }
}
    ${FeatureBlockFragmentDoc}
${FeatureItemFragmentDoc}`;
export const ValuePropFragmentDoc = gql`
    fragment ValueProp on ValueProp {
  image {
    ...Image
  }
  title
  element
  subtitleRaw
  glow
}
    ${ImageFragmentDoc}`;
export const HomePageFragmentDoc = gql`
    fragment HomePage on Home {
  metadata {
    title
    description
  }
  tagline
  positioningStatementRaw
  valueProps {
    ...ValueProp
  }
  theProblemSectionTitle
  theProblemSectionCards {
    ...SectionBlock
  }
  testimonialsSectionTitle
  callToAction {
    caption
    signup
    contact
    contactEngineer
    contactEngineerDark
  }
}
    ${ValuePropFragmentDoc}
${SectionBlockFragmentDoc}`;
export const NewsItemFragmentDoc = gql`
    fragment NewsItem on NewsBlock {
  titleRaw
  publication
  publishedOn
  logo {
    ...Image
  }
  url
}
    ${ImageFragmentDoc}`;
export const NewsPageFragmentDoc = gql`
    fragment NewsPage on News {
  metadata {
    title
    description
  }
  title
  subtitle
  newsEntries {
    ...NewsItem
  }
}
    ${NewsItemFragmentDoc}`;
export const PricingFragmentDoc = gql`
    fragment Pricing on Pricing {
  metadata {
    title
    description
  }
  title
  subtitle
  editionNameToHighlight
  pricingTable {
    title
    features {
      rows {
        cells
      }
    }
  }
}
    `;
export const VideoItemFragmentDoc = gql`
    fragment VideoItem on VideoBlock {
  url
  description
  defaultPreview {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const VideosPageFragmentDoc = gql`
    fragment VideosPage on Videos {
  metadata {
    title
    description
  }
  title
  subtitleRaw
  mainYoutubeUrl
  videoContentBlocks {
    ...VideoItem
  }
  callToAction {
    caption
    signup
    contact
    contactEngineer
    contactEngineerDark
  }
}
    ${VideoItemFragmentDoc}`;
export const AboutPageDocument = gql`
    query AboutPage {
  allAbout(sort: {_createdAt: DESC}, limit: 1) {
    ...AboutPage
  }
}
    ${AboutPageFragmentDoc}`;
export const BenefitsPageDocument = gql`
    query BenefitsPage {
  allBenefits(sort: {_createdAt: DESC}, limit: 1) {
    ...BenefitsPage
  }
}
    ${BenefitsPageFragmentDoc}`;
export const BlogIndexDocument = gql`
    query BlogIndex($now: DateTime) {
  allPost(
    sort: {publishedAt: DESC}
    where: {_: {is_draft: false}, publishedAt: {lt: $now}}
  ) {
    ...PostMeta
  }
}
    ${PostMetaFragmentDoc}`;
export const BlogPostPathsDocument = gql`
    query BlogPostPaths {
  allPost {
    slug {
      current
    }
  }
}
    `;
export const BlogPostDocument = gql`
    query BlogPost($slug: String!) {
  allPost(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export const CareersPageDocument = gql`
    query CareersPage {
  allCareers(sort: {_createdAt: DESC}, limit: 1) {
    ...CareersPage
  }
  allJobPosting(sort: {publishedAt: DESC}) {
    ...JobPostingMeta
  }
}
    ${CareersPageFragmentDoc}
${JobPostingMetaFragmentDoc}`;
export const JobPostingPathsDocument = gql`
    query JobPostingPaths {
  allJobPosting {
    slug {
      current
    }
  }
}
    `;
export const JobPostingDocument = gql`
    query JobPosting($slug: String!) {
  allJobPosting(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...JobPosting
  }
}
    ${JobPostingFragmentDoc}`;
export const CaseStudiesPageDocument = gql`
    query CaseStudiesPage {
  allCaseStudiesPage(sort: {_createdAt: DESC}, limit: 1) {
    ...CaseStudiesPage
  }
  allCaseStudy(sort: {_createdAt: DESC}) {
    ...CaseStudyMeta
  }
}
    ${CaseStudiesPageFragmentDoc}
${CaseStudyMetaFragmentDoc}`;
export const CaseStudyIndexDocument = gql`
    query CaseStudyIndex {
  allCaseStudy(sort: {_createdAt: DESC}) {
    ...CaseStudyMeta
  }
}
    ${CaseStudyMetaFragmentDoc}`;
export const CaseStudyPathsDocument = gql`
    query CaseStudyPaths {
  allCaseStudy {
    slug {
      current
    }
  }
}
    `;
export const CaseStudyDocument = gql`
    query CaseStudy($slug: String!) {
  allCaseStudy(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...CaseStudy
  }
}
    ${CaseStudyFragmentDoc}`;
export const DemoPageDocument = gql`
    query DemoPage {
  allDemo(sort: {_createdAt: DESC}, limit: 1) {
    metadata {
      title
      description
    }
    title
    youtubeUrl
    hubSpotTitle
    hubSpotSubtitle
    hubSpotDataSrc
  }
}
    `;
export const EventsPageDocument = gql`
    query EventsPage {
  allEventsPage(sort: {_createdAt: DESC}, limit: 1) {
    ...EventsPage
  }
  allEvent(sort: {_createdAt: DESC}) {
    ...Event
  }
}
    ${EventsPageFragmentDoc}
${EventFragmentDoc}`;
export const EventIndexDocument = gql`
    query EventIndex {
  allEvent(sort: {_createdAt: DESC}) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export const EventPathsDocument = gql`
    query EventPaths {
  allEvent {
    slug {
      current
    }
  }
}
    `;
export const EventDocument = gql`
    query Event($slug: String!) {
  allEvent(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export const FaqPageDocument = gql`
    query FaqPage($slug: String!) {
  allFaq(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    metadata {
      title
      description
    }
    title
    subtitle
    slug {
      current
    }
    faqs {
      ...FaqItem
    }
  }
}
    ${FaqItemFragmentDoc}`;
export const FaqPagePathsDocument = gql`
    query FaqPagePaths {
  allFaq(sort: {_createdAt: DESC}) {
    slug {
      current
    }
  }
}
    `;
export const FeaturesPageDocument = gql`
    query FeaturesPage {
  allFeatures(sort: {_createdAt: DESC}, limit: 1) {
    ...FeaturesPage
  }
}
    ${FeaturesPageFragmentDoc}`;
export const FrameworkPagesDocument = gql`
    query FrameworkPages {
  allFrameworkPage(sort: {_createdAt: DESC}) {
    ...FrameworkPageMeta
  }
}
    ${FrameworkPageMetaFragmentDoc}`;
export const FrameworkPageIndexDocument = gql`
    query FrameworkPageIndex {
  allFrameworkPage(sort: {_createdAt: DESC}) {
    ...FrameworkPageMeta
  }
}
    ${FrameworkPageMetaFragmentDoc}`;
export const FrameworkPathsDocument = gql`
    query FrameworkPaths {
  allFrameworkPage {
    slug {
      current
    }
  }
}
    `;
export const FrameworkPageDocument = gql`
    query FrameworkPage($slug: String!) {
  allFrameworkPage(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...FrameworkPage
  }
  allTestimonial(sort: {index: ASC}) {
    ...Testimonial
  }
}
    ${FrameworkPageFragmentDoc}
${TestimonialFragmentDoc}`;
export const HomePageDocument = gql`
    query HomePage {
  allHome(sort: {_createdAt: DESC}, limit: 1) {
    ...HomePage
  }
  allCaseStudy(sort: {_createdAt: DESC}) {
    ...CaseStudyMeta
  }
  allEvent(sort: {_createdAt: DESC}, where: {feature: {eq: true}}, limit: 1) {
    ...Event
  }
}
    ${HomePageFragmentDoc}
${CaseStudyMetaFragmentDoc}
${EventFragmentDoc}`;
export const IntegrationsDocument = gql`
    query Integrations {
  allIntegration(sort: {_createdAt: DESC}) {
    ...IntegrationMeta
  }
}
    ${IntegrationMetaFragmentDoc}`;
export const IntegrationIndexDocument = gql`
    query IntegrationIndex {
  allIntegration(sort: {_createdAt: DESC}) {
    ...IntegrationMeta
  }
}
    ${IntegrationMetaFragmentDoc}`;
export const IntegrationPathsDocument = gql`
    query IntegrationPaths {
  allIntegration {
    slug {
      current
    }
  }
}
    `;
export const IntegrationDocument = gql`
    query Integration($slug: String!) {
  allIntegration(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...Integration
  }
  allTestimonial(sort: {index: ASC}) {
    ...Testimonial
  }
}
    ${IntegrationFragmentDoc}
${TestimonialFragmentDoc}`;
export const LandingPagesDocument = gql`
    query LandingPages {
  allLandingPage(sort: {_createdAt: DESC}) {
    ...LandingPage
  }
}
    ${LandingPageFragmentDoc}`;
export const LandingPageIndexDocument = gql`
    query LandingPageIndex {
  allLandingPage(sort: {_createdAt: DESC}) {
    ...LandingPage
  }
}
    ${LandingPageFragmentDoc}`;
export const LandingPagePathsDocument = gql`
    query LandingPagePaths {
  allLandingPage {
    slug {
      current
    }
  }
}
    `;
export const LandingPageDocument = gql`
    query LandingPage($slug: String!) {
  allLandingPage(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...LandingPage
  }
  allTestimonial(sort: {index: ASC}) {
    ...Testimonial
  }
}
    ${LandingPageFragmentDoc}
${TestimonialFragmentDoc}`;
export const NewsPageDocument = gql`
    query NewsPage {
  allNews(sort: {_createdAt: DESC}, limit: 1) {
    ...NewsPage
  }
}
    ${NewsPageFragmentDoc}`;
export const PricingDocument = gql`
    query Pricing {
  allPricing(sort: {_createdAt: DESC}, limit: 1) {
    ...Pricing
  }
  allEdition(sort: {index: ASC}) {
    ...Edition
  }
}
    ${PricingFragmentDoc}
${EditionFragmentDoc}`;
export const ResourcesPagesDocument = gql`
    query ResourcesPages {
  allResourcePage(sort: {index: ASC}) {
    ...Resource
  }
}
    ${ResourceFragmentDoc}`;
export const ResourcesPagePathsDocument = gql`
    query ResourcesPagePaths {
  allResourcePage {
    slug {
      current
    }
  }
}
    `;
export const ResourcesPageDocument = gql`
    query ResourcesPage($slug: String!) {
  allResourcePage(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...Resource
  }
}
    ${ResourceFragmentDoc}`;
export const SolutionsPagesDocument = gql`
    query SolutionsPages {
  allSolutionPage(sort: {index: ASC}) {
    ...Solution
  }
}
    ${SolutionFragmentDoc}`;
export const SolutionsPagePathsDocument = gql`
    query SolutionsPagePaths {
  allSolutionPage {
    slug {
      current
    }
  }
}
    `;
export const SolutionsPageDocument = gql`
    query SolutionsPage($slug: String!) {
  allSolutionPage(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...Solution
  }
}
    ${SolutionFragmentDoc}`;
export const TestimonialsDocument = gql`
    query Testimonials {
  allTestimonial(sort: {index: ASC}) {
    ...Testimonial
  }
}
    ${TestimonialFragmentDoc}`;
export const UseCasesPagesDocument = gql`
    query UseCasesPages {
  allUseCasePage(sort: {index: ASC}) {
    ...UseCase
  }
}
    ${UseCaseFragmentDoc}`;
export const UseCasesPagePathsDocument = gql`
    query UseCasesPagePaths {
  allUseCasePage {
    slug {
      current
    }
  }
}
    `;
export const UseCasesPageDocument = gql`
    query UseCasesPage($slug: String!) {
  allUseCasePage(where: {slug: {current: {eq: $slug}}}, limit: 1) {
    ...UseCase
  }
}
    ${UseCaseFragmentDoc}`;
export const VideosPageDocument = gql`
    query VideosPage {
  allVideos(sort: {_createdAt: DESC}, limit: 1) {
    ...VideosPage
  }
}
    ${VideosPageFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AboutPage(variables?: AboutPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AboutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutPageQuery>(AboutPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AboutPage');
    },
    BenefitsPage(variables?: BenefitsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BenefitsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BenefitsPageQuery>(BenefitsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BenefitsPage');
    },
    BlogIndex(variables?: BlogIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BlogIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogIndexQuery>(BlogIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogIndex');
    },
    BlogPostPaths(variables?: BlogPostPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BlogPostPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostPathsQuery>(BlogPostPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogPostPaths');
    },
    BlogPost(variables: BlogPostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BlogPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostQuery>(BlogPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogPost');
    },
    CareersPage(variables?: CareersPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CareersPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CareersPageQuery>(CareersPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CareersPage');
    },
    JobPostingPaths(variables?: JobPostingPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<JobPostingPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<JobPostingPathsQuery>(JobPostingPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'JobPostingPaths');
    },
    JobPosting(variables: JobPostingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<JobPostingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<JobPostingQuery>(JobPostingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'JobPosting');
    },
    CaseStudiesPage(variables?: CaseStudiesPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CaseStudiesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CaseStudiesPageQuery>(CaseStudiesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CaseStudiesPage');
    },
    CaseStudyIndex(variables?: CaseStudyIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CaseStudyIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CaseStudyIndexQuery>(CaseStudyIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CaseStudyIndex');
    },
    CaseStudyPaths(variables?: CaseStudyPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CaseStudyPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CaseStudyPathsQuery>(CaseStudyPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CaseStudyPaths');
    },
    CaseStudy(variables: CaseStudyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CaseStudyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CaseStudyQuery>(CaseStudyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CaseStudy');
    },
    DemoPage(variables?: DemoPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DemoPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DemoPageQuery>(DemoPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DemoPage');
    },
    EventsPage(variables?: EventsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsPageQuery>(EventsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'EventsPage');
    },
    EventIndex(variables?: EventIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventIndexQuery>(EventIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'EventIndex');
    },
    EventPaths(variables?: EventPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventPathsQuery>(EventPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'EventPaths');
    },
    Event(variables: EventQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventQuery>(EventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Event');
    },
    FaqPage(variables: FaqPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FaqPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FaqPageQuery>(FaqPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FaqPage');
    },
    FaqPagePaths(variables?: FaqPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FaqPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FaqPagePathsQuery>(FaqPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FaqPagePaths');
    },
    FeaturesPage(variables?: FeaturesPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FeaturesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FeaturesPageQuery>(FeaturesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FeaturesPage');
    },
    FrameworkPages(variables?: FrameworkPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FrameworkPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FrameworkPagesQuery>(FrameworkPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FrameworkPages');
    },
    FrameworkPageIndex(variables?: FrameworkPageIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FrameworkPageIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FrameworkPageIndexQuery>(FrameworkPageIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FrameworkPageIndex');
    },
    FrameworkPaths(variables?: FrameworkPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FrameworkPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FrameworkPathsQuery>(FrameworkPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FrameworkPaths');
    },
    FrameworkPage(variables: FrameworkPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FrameworkPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FrameworkPageQuery>(FrameworkPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FrameworkPage');
    },
    HomePage(variables?: HomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePage');
    },
    Integrations(variables?: IntegrationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IntegrationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IntegrationsQuery>(IntegrationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Integrations');
    },
    IntegrationIndex(variables?: IntegrationIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IntegrationIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IntegrationIndexQuery>(IntegrationIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'IntegrationIndex');
    },
    IntegrationPaths(variables?: IntegrationPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IntegrationPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IntegrationPathsQuery>(IntegrationPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'IntegrationPaths');
    },
    Integration(variables: IntegrationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IntegrationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IntegrationQuery>(IntegrationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Integration');
    },
    LandingPages(variables?: LandingPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPagesQuery>(LandingPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LandingPages');
    },
    LandingPageIndex(variables?: LandingPageIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPageIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageIndexQuery>(LandingPageIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LandingPageIndex');
    },
    LandingPagePaths(variables?: LandingPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPagePathsQuery>(LandingPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LandingPagePaths');
    },
    LandingPage(variables: LandingPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageQuery>(LandingPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LandingPage');
    },
    NewsPage(variables?: NewsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NewsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewsPageQuery>(NewsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NewsPage');
    },
    Pricing(variables?: PricingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PricingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PricingQuery>(PricingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Pricing');
    },
    ResourcesPages(variables?: ResourcesPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResourcesPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResourcesPagesQuery>(ResourcesPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ResourcesPages');
    },
    ResourcesPagePaths(variables?: ResourcesPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResourcesPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResourcesPagePathsQuery>(ResourcesPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ResourcesPagePaths');
    },
    ResourcesPage(variables: ResourcesPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResourcesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResourcesPageQuery>(ResourcesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ResourcesPage');
    },
    SolutionsPages(variables?: SolutionsPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SolutionsPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SolutionsPagesQuery>(SolutionsPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SolutionsPages');
    },
    SolutionsPagePaths(variables?: SolutionsPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SolutionsPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SolutionsPagePathsQuery>(SolutionsPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SolutionsPagePaths');
    },
    SolutionsPage(variables: SolutionsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SolutionsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SolutionsPageQuery>(SolutionsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SolutionsPage');
    },
    Testimonials(variables?: TestimonialsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TestimonialsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TestimonialsQuery>(TestimonialsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Testimonials');
    },
    UseCasesPages(variables?: UseCasesPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UseCasesPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UseCasesPagesQuery>(UseCasesPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UseCasesPages');
    },
    UseCasesPagePaths(variables?: UseCasesPagePathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UseCasesPagePathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UseCasesPagePathsQuery>(UseCasesPagePathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UseCasesPagePaths');
    },
    UseCasesPage(variables: UseCasesPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UseCasesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UseCasesPageQuery>(UseCasesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UseCasesPage');
    },
    VideosPage(variables?: VideosPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VideosPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VideosPageQuery>(VideosPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'VideosPage');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;