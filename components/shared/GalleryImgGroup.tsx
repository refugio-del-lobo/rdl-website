"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import ImgGalleryModal from "./ImgGalleryModal"
import Polaroid from "./Polaroid"

const GalleryImgGroup = ({
  imgGroupLinks,
  single
}: {
  imgGroupLinks: string[] | undefined
  single?: boolean
}) => {
  const [modalIsShown, setModalIsShown] = useState(false)
  const [selectedImg, setSelectedImg] = useState<string>("")
  const [firstlLinks, setFirstlLinks] = useState<string[] | undefined>([""])

  const closeModal = () => {
    document.body.style.overflow = "auto"
    setModalIsShown(false)
  }

  const openNewModal = (url: string) => {
    setSelectedImg(url)
    document.body.style.overflow = "hidden"
    setModalIsShown(true)
  }

  //Obetenmos solo las primeras 3 imagenes del array
  useEffect(() => {
    setFirstlLinks(imgGroupLinks?.slice(0, 3))
  }, [imgGroupLinks])

  return (
    <>
      {/* *******************   GalleryImgGroup Inicial ***************** */}
      {(firstlLinks && !single) && (
        <div className="flex gap-6 flex-wrap justify-around my-6">
          <div onClick={() => openNewModal(firstlLinks[0])}>
            <Polaroid src={firstlLinks[0]} />
          </div>
          <div onClick={() => openNewModal(firstlLinks[1])}>
            <Polaroid src={firstlLinks[1]} />
          </div>
          <div onClick={() => openNewModal(firstlLinks[2])}>
            <Polaroid src={firstlLinks[2]} />
          </div>
        </div>
      )}
      {(firstlLinks && single) && (
        <div className="flex gap-6 flex-wrap justify-around my-6">
          <div onClick={() => openNewModal(firstlLinks[0])}>
            <Polaroid src={firstlLinks[0]} />
          </div>
        </div>
      )}

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
