// Layout
import PageLayout from 'components/layout/page'
import SignupButton from 'components/sections/common/cta-buttons/signup-button'
import Lottie, { ctaOptions } from 'components/sections/common/lottie/Lottie'
import Hero from 'components/sections/videos/hero'
import VideoItem from 'components/sections/videos/video-item'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const Videos = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title: page.metadata?.title ?? 'Videos - Aserto',
        description: page.metadata?.description ?? 'Videos about Aserto',
        image: 'images/og.png'
      }}
    >
      <Hero page={page} />
      <section className="pb-28">
        {page.videoContentBlocks && page.videoContentBlocks.length > 0 && (
          <>
            <h3
              className="text-center text-aserto-grey-90 text-[30px] leading-[40px]
              sm:text-[50px] sm:leading-[60px] mt-28"
            >
              Videos
            </h3>
            <div>
              <iframe
                className="w-full h-full m-auto overflow-hidden md:w-[810px] md:h-[412px] my-12"
                width="810"
                height="412"
                src={page.mainYoutubeUrl ?? ''}
                title={page.mainYoutubeTitle ?? ''}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="grid gap-16 mx-auto mt-24 lg:grid-cols-3">
              {page.videoContentBlocks.map((v, i) => {
                return <VideoItem data={v || {}} key={i} />
              })}
            </div>
          </>
        )}
      </section>
      {page.videoSectionBlocks &&
        page.videoSectionBlocks.length > 0 &&
        page.videoSectionBlocks.map((s, i) => (
          <div key={i}>
            <div className="text-center">
              <SignupButton />
            </div>
            <section className="pb-28">
              {s?.videoContentBlocks && s.videoContentBlocks.length > 0 && (
                <>
                  <h3
                    className="text-center text-aserto-grey-90 text-[30px] leading-[40px]
              sm:text-[50px] sm:leading-[60px] mt-28"
                  >
                    {s.sectionHeading}
                  </h3>
                  <div className="grid gap-16 mx-auto mt-24 lg:grid-cols-3">
                    {s.videoContentBlocks.map((v, i) => {
                      return (
                        <VideoItem
                          data={v || {}}
                          linkText={s.linkText || ''}
                          key={i}
                        />
                      )
                    })}
                  </div>
                </>
              )}
            </section>
          </div>
        ))}
      <Lottie {...ctaOptions({ ...page.callToAction })} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allVideos } = await cms().VideosPage()
  const page = allVideos[0]

  return {
    props: {
      page
    }
  }
}

export default Videos
