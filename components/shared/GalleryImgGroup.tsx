import Image from "next/image"
import React from "react"

const GalleryImgGroup = ({
  imgGroupLinks,
}: {
  imgGroupLinks: string[] | undefined
}) => {
  return (
    <>
      <div className="flex gap-6 flex-wrap justify-around my-6">
        {imgGroupLinks?.map((url) => (
          <div
            key={url}
            className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
          >
            <Image
              src={url}
              width={500}
              height={500}
              alt="imagen de galeria"
              className="h-[300px] w-[300px] object-cover rounded-xl overflow-hidden drop-shadow-xl border"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default GalleryImgGroup
