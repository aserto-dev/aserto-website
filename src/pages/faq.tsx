// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

const Faq = () => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto Faq',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <section className="py-20">
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          FAQ
        </h1>
        <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl font-roboto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          est eu odio rutrum condimentum. Duis pulvinar diam nibh, quis aliquet
          nisl rhoncus ut. Donec justo orci, tempor non dui eget, ullamcorper
          rhoncus quam. Cras lobortis sagittis mi a rhoncus. In ac rhoncus
          nulla. Sed porttitor varius neque et sodales. Duis sem lorem,
          consequat quis mattis eu, mollis sit amet tortor. Aliquam neque dui,
          rhoncus eget elit ut, luctus luctus nibh. Proin egestas viverra
          lobortis. Duis at sem commodo, vestibulum ipsum et, mollis mauris.
          Mauris ultrices venenatis dui at ultricies. Quisque consectetur sed
          elit et condimentum. Cras finibus molestie elit in consectetur.
          Curabitur imperdiet ullamcorper arcu, eget ultricies dui dictum id.
        </p>
        <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl font-roboto">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed aliquet erat id ante vestibulum
          ultricies. Morbi luctus, velit nec vehicula posuere, nisl tortor
          finibus ligula, nec faucibus risus tellus ac velit. Vestibulum commodo
          dolor velit, a consequat nisi efficitur ut. Aliquam sed mi aliquet,
          pharetra orci a, tempor nibh. Fusce ipsum magna, condimentum vitae
          enim et, laoreet faucibus eros. Sed in felis nec nibh malesuada semper
          et a dui. Nulla rutrum nisl nec justo luctus, quis sagittis diam
          posuere.
        </p>
        <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl font-roboto">
          Vivamus sed pretium ligula. Aenean vitae sapien at tortor accumsan
          blandit et sed massa. Suspendisse potenti. Fusce in urna nisl. Nunc
          pretium elit ipsum, vel consectetur metus tempus id. Cras lorem erat,
          fermentum vitae rhoncus ut, tincidunt non quam. Curabitur ac ultricies
          massa, vel ultricies tortor. Donec scelerisque nunc diam, ut pharetra
          est sagittis vel. Suspendisse posuere mattis tortor, in viverra ipsum
          accumsan dignissim. Cras vel neque volutpat ex ultrices commodo in et
          ipsum.
        </p>
        <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl font-roboto">
          Etiam dui risus, cursus id finibus vel, volutpat sed lectus. Vivamus
          vestibulum nisi vitae facilisis faucibus. Morbi imperdiet elit ut ante
          fermentum tristique. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Etiam accumsan lacus quis
          consectetur interdum. Pellentesque iaculis ullamcorper ultrices.
          Maecenas vehicula porttitor pellentesque. Donec consectetur
          condimentum neque, sit amet viverra neque sagittis sit amet. Sed
          sollicitudin ultricies auctor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Proin lacus elit, elementum vel venenatis
          tincidunt, elementum vitae metus. Phasellus vel eros et risus
          scelerisque vulputate. Nunc volutpat et metus nec feugiat. Fusce eu
          enim pharetra, tincidunt neque ut, pretium mauris. Aliquam tempus
          purus nibh, non porta ligula vestibulum non. Nulla sed tempor eros, a
          tincidunt est.
        </p>
      </section>
    </PageLayout>
  )
}

export default Faq
