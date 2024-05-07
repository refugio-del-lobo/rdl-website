"use client"
import Image from "next/image"
import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import ImgGalleryModal from "./ImgGalleryModal"

const GalleryImgGroup = ({
  imgGroupLinks,
}: {
  imgGroupLinks: string[] | undefined
}) => {
  const [modalIsShown, setModalIsShown] = useState(false)
  const [selectedImg, setSelectedImg] = useState<string>("")

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsShown(false)
  }

  const openNewModal = (url:string) => {
    setSelectedImg(url)
    document.body.style.overflow = 'hidden';
    setModalIsShown(true)
  }

  return (
    <>

      {/* *******************   GalleryImgGroup Inicial ***************** */}
      <div className="flex gap-6 flex-wrap justify-around my-6">
        {imgGroupLinks?.slice(0, 3).map((url) => (
          <div
            key={url}
            className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
            onClick={() => openNewModal(url)}
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

      {modalIsShown && (
        <ImgGalleryModal
          toggleModalProp={closeModal}
          imgGroupLinksProp={imgGroupLinks}
          selectedImgProp={selectedImg}
        />
      )}
    </>
  )
}

export default GalleryImgGroup
