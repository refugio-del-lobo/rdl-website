import Image from "next/image"
import React, { useEffect, useState } from "react"

type CarouselProps = {
  imgPathArray: string[]
}

const ImgCarousel = ({ imgPathArray }: CarouselProps) => {
  const [current, setcurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrent((current) =>
        current === imgPathArray.length - 1 ? 0 : current + 1
      )
    }, 15000)
    return () => clearInterval(interval)
  }, [imgPathArray.length])

  const prev = () =>
    setcurrent((current) =>
      current === 0 ? imgPathArray.length - 1 : current - 1
    )
  const next = () =>
    setcurrent((current) =>
      current === imgPathArray.length - 1 ? 0 : current + 1
    )

  return (
    <div className="relative h-full w-full flex justify-center overflow-hidden max-w-[500px]">
      <div
        className="flex flex-nowrap transition-transform ease-out duration-500 h-full max-w-[500px]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imgPathArray.map((path) => (
          <Image
            src={path}
            width={640}
            height={1138}
            alt="Img"
            className="min-w-full"
            key={path}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4 ">
        <button
          onClick={prev}
          className="p-1 pr-2 bg-white/60 rounded-full shadow drop-shadow-md text-gray-800 hover:bg-white/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 md:w-10 h-6 md:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="p-1 pl-2 bg-white/60 rounded-full shadow drop-shadow-md text-gray-800 hover:bg-white/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 md:w-10 h-6 md:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center gap-2 bg-white/30 p-2 rounded-[30px] border-2 border-gray-800">
            {imgPathArray.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-gray-800 rounded-full ${
                  current == i ? "p-3" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgCarousel
