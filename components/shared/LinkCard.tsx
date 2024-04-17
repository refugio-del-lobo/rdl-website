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
    <div className={`max-w-[700px] h-[183px] lg:h-[200px] flex items-center justify-center rounded-xl opacity-layer-70 overflow-hidden drop-shadow-lg border-orange-100 border-2 ${className}`}>
      <Link href={href}>
        <div>
          <Image
            src={imgSrc}
            width={500}
            height={500}
            alt="habitaciones"
            className='object-cover'
          />
          <p className="absolute top-[45%] right-0 z-40 pr-4 font-semibold">
            {text}
          </p>
          <p className="absolute bottom-2 right-0 z-40 pr-4 font-semibold text-gray-700">
            ver mas ➡
          </p>
        </div>
        <div className="absolute right-[-150px] top-[-55px]  md:top-[-60px] w-[300px] h-[300px] opacity-layer-90 rounded-[50%] z-30"></div>
        <div className="absolute right-[-150px] top-[-55px]  md:top-[-60px] w-[300px] h-[300px] opacity-layer-70 rounded-[50%] z-30"></div>
      </Link>
    </div>
  )
}

export default LinkCard
