const Tab = ({
  active,
  imgUrl,
  language,
  onClick
}: {
  active: boolean
  imgUrl: string
  language: string
  onClick: () => void
}) => {
  return (
    <div
      className={`cursor-pointer w-[127px] h-[52px] inline-flex items-center rounded-[6px] ${
        active
          ? 'bg-aserto-grey-20 text-white'
          : 'bg-aserto-grey-10 text-aserto-grey-90'
      }`}
      onClick={onClick}
    >
      <img
        className="w-[30px] h-[30px] object-contain sm:m-[10px] mx-auto inline-block"
        src={imgUrl}
        alt={language}
      />
      <p className="sm:inline-block text-[16px] hidden">{language}</p>
    </div>
  )
}

export default Tab
