const Glow = ({ direction }: { direction: string }) => (
  <div
    className={`-z-10 hidden xl:block absolute ${direction}-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow`}
  ></div>
)

export default Glow
