import Image from "next/image"
import React from "react"

interface PolaroidProps {
  title?: string;
  text?: string;
  src?: string;
}

const Polaroid: React.FC<PolaroidProps> = ({ title="", text="", src="https://picsum.photos/600" }) => {
  return (
    <div className="drop-shadow-2xl">
      <figure className="w-[300px] h-[360px] relative bg-[#d6d1d1] pt-[19px] pr-[19px] pl-[19px] pb-[85px] rounded-sm drop-shadow-xl">
        <Image
          src={src}
          width={500}
          height={500}
          alt="image"
          className="w-full h-full object-cover rounded-sm"
        />
        <figcaption className="m-1 text-end text-[#2c2c2c]">
          <p className="text-md font-sans font-medium">{title}</p>
          <p className="text-sm text-start font-sans">{text}</p>
          <p className="absolute bottom-2 right-0 z-40 pr-4 font-semibold text-gray-700">
          ver todas ➡
        </p>
        </figcaption>
      </figure>
    </div>
  )
}

export default Polaroid
