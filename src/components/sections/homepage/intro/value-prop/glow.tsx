const Glow = ({ direction }: { direction: string }) => {
  const offset = direction === 'left' ? 'left-32' : 'right-4'
  return (
    <div className="flex items-stretch items-center">
      <div
        className={`-z-10 hidden xl:block absolute ${offset} self-center w-[650px] h-[500px] bg-glow`}
      ></div>
    </div>
  )
}

export default Glow
