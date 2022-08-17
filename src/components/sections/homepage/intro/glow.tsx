const Glow = ({ direction }: { direction: string }) => {
  return (
    <div className="flex items-stretch items-center">
      <div
        className={`-z-10 hidden xl:block absolute ${direction}-40 self-center w-[500px] h-[500px] bg-homepageGlow`}
      ></div>
    </div>
  )
}

export default Glow
