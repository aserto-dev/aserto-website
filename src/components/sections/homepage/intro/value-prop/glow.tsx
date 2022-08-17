const Glow = ({ direction }: { direction: string }) => {
  const offset = `${direction}-40`
  return (
    <div className="flex items-stretch items-center">
      <div
        className={`-z-10 hidden xl:block absolute ${offset} self-center w-[500px] h-[500px] bg-homepageGlow`}
      ></div>
    </div>
  )
}

export default Glow
