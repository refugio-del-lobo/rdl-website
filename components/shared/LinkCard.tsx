import Image from "next/image"
import Link from "next/link"
import React from "react"

const LinkCard = ({
  text = "Insert text here",
  imgSrc = "https://picsum.photos/500",
  href = "#",
  className = "",
}: {
  text?: string
  imgSrc?: string
  href?: string
  className?: string
}) => {
  return (
    <Link
      className={`w-full max-w-[500px] h-[183px] lg:h-[200px] flex items-center justify-center rounded-xl opacity-layer-70 drop-shadow-lg border-orange-100 border-2 ${className} relative overflow-hidden`}
      href={href}
    >
      <div className={`w-full flex justify-end p-4`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <Image src={imgSrc} width={800} height={800} alt="Imagen"/>
        </div>
        <p className="z-50 font-semibold max-w-[120px] text-end">{text}</p>
        <p className="absolute bottom-2 right-0 z-40 pr-4 font-semibold text-gray-700">
          ver mas ➡
        </p>
        <div className="absolute right-[-150px] top-[-55px]  md:top-[-55px] w-[300px] h-[300px] opacity-layer-90 rounded-[50%] z-30"></div>
        <div className="absolute right-[-150px] top-[-55px]  md:top-[-55px] w-[300px] h-[300px] opacity-layer-70 rounded-[50%] z-30"></div>
      </div>
    </Link>
  )
}

export default LinkCard
