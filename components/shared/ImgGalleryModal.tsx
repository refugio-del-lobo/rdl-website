import Image from "next/image"
import React, { useRef, useState } from "react"

interface ComponentProps {
  toggleModalProp: () => void
  imgGroupLinksProp: string[] | undefined
  selectedImgProp: string
}

const ImgGalleryModal: React.FC<ComponentProps> = ({
  toggleModalProp,
  imgGroupLinksProp,
  selectedImgProp,
}) => {
  const bigImage = useRef<HTMLImageElement | null>(null)
  const [selectedImgUrl, setSelectedImgUrl] = useState(selectedImgProp)
  const bigImageContainer = useRef<HTMLDivElement | null>(null)
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)

  const selectImg = (url: string) => {
    setSelectedImgUrl(url)
  }

  function onZoom(e: any) {
    if (bigImage.current) {
      setX(e.clientX - e.target.offsetLeft)
      setY(e.clientY - e.target.offsetTop)
      bigImage.current.style.transformOrigin = `${x}px ${y}px`
      bigImage.current.style.transform = "scale(2)"
    }
  }

  function offZoom() {
    if (bigImage.current) {
      bigImage.current.style.transformOrigin = `center center`
      bigImage.current.style.transform = "scale(1)"
    }
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#000000f6] flex justify-center items-center z-50">
      <div className="w-full h-full">
        <div className="relative wrapper flex flex-col w-full h-full items-center">
          <Image
            src={"/assets/icons/exit-icon.svg"}
            width={28}
            height={28}
            alt="exit icon"
            className="absolute top-0 right-0 m-5 md:m-8 z-50 w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            onClick={toggleModalProp}
          />

          {/* ***********   IMAGEN SELECCIONADA GRANDE ***************** */}
          <div className="w-full grow">
            <div
              key={`${selectedImgUrl}-2`}
              className={`flex h-full w-full justify-center items-center drop-shadow-xl rounded-xl snap-start overflow-hidden`}
              ref={bigImageContainer}
            >
              <Image
                src={selectedImgUrl}
                onMouseOver={onZoom}
                onMouseMove={onZoom}
                onMouseLeave={offZoom}
                ref={bigImage}
                width={800}
                height={800}
                alt="imagen de galeria"
                className="w-full max-w-[800px] max-h-[500px] h-auto object-contain drop-shadow-xl big-gallery-img"
              />
            </div>
          </div>
          {/* ******************   Carrusel de imágenes para seleccionar ************ */}
          <div
            className="w-auto max-w-full grid grid-flow-col auto-cols-max gap-2 overflow-x-auto overscroll-x-contain p-2
            snap-x 
             hover:cursor-pointer

            imgGallerySlider
            "
          >
            {imgGroupLinksProp?.map((url) => (
              <div
                key={`${url}-2`}
                className={`drop-shadow-xl rounded-xl snap-start`}
              >
                <Image
                  src={url}
                  width={150}
                  height={150}
                  alt="imagen de galeria"
                  className="w-[150px] h-[150px] object-cover rounded-xl overflow-hidden drop-shadow-xl p-1"
                  onClick={() => selectImg(url)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgGalleryModal
