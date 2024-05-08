"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import ImgGalleryModal from "./ImgGalleryModal"
import Polaroid from "./Polaroid"

const GalleryImgGroup = ({
  imgGroupLinks,
  single = false,
  imgGroupLinks2 = [],
}: {
  imgGroupLinks: string[] | undefined
  imgGroupLinks2?: string[] | undefined
  single?: boolean
}) => {
  const [modalIsShown, setModalIsShown] = useState(false)
  const [selectedImg, setSelectedImg] = useState<string>("")
  const [firstlLinks, setFirstlLinks] = useState<string[] | undefined>([""])
  const [concatLinks, setConcatLinks] = useState<string[]>([""])

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

  useEffect(() => {
    if (imgGroupLinks && imgGroupLinks2) {
      setConcatLinks([...imgGroupLinks, ...imgGroupLinks2])
    }
  }, [])

  return (
    <>
      {/* *******************   GalleryImgGroup Inicial ***************** */}

      {imgGroupLinks && imgGroupLinks2 && single == false && (
        <div className="flex gap-6 flex-wrap justify-around my-6">
          <div onClick={() => openNewModal(concatLinks[0])}>
            <Polaroid src={concatLinks[0]} />
          </div>
          <div onClick={() => openNewModal(concatLinks[1])}>
            <Polaroid src={concatLinks[1]} />
          </div>
          <div onClick={() => openNewModal(concatLinks[2])}>
            <Polaroid src={concatLinks[2]} />
          </div>
        </div>
      )}
      {imgGroupLinks && imgGroupLinks2 && single == true && (
        <div className="flex gap-6 flex-wrap justify-around my-6">
          <div onClick={() => openNewModal(concatLinks[0])}>
            <Polaroid src={concatLinks[0]} />
          </div>
        </div>
      )}

      {!imgGroupLinks && firstlLinks && single == false && (
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
      {!imgGroupLinks2 && firstlLinks && single == true && (
        <div className="flex gap-6 flex-wrap justify-around my-6">
          <div onClick={() => openNewModal(firstlLinks[0])}>
            <Polaroid src={firstlLinks[0]} />
          </div>
        </div>
      )}

      {modalIsShown && !imgGroupLinks2 && (
        <ImgGalleryModal
          toggleModalProp={closeModal}
          imgGroupLinksProp={imgGroupLinks}
          selectedImgProp={selectedImg}
        />
      )}
      {modalIsShown && imgGroupLinks2 && (
        <ImgGalleryModal
          toggleModalProp={closeModal}
          imgGroupLinksProp={concatLinks}
          selectedImgProp={selectedImg}
        />
      )}
    </>
  )
}

export default GalleryImgGroup
