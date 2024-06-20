import StickyWhatsappLink from "@/components/shared/StickyWhatsappLink"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"



export default function Home() {
  return (
    <div className="bg-casa-lejos-bg bg-cover bg-center">
      <div className="w-full h-full opacity-layer-70 hf-paddings">
        <div className="wrapper h-[100svh] flex flex-col justify-between md:gap-0">
          <h1 className="tracking-wide drop-shadow-md hero-title pt-4 md:pt-12">
            {/* Disfrutá La Patagonia */}
            <span className="block md:text-[7rem] drop-shadow-md">Disfrutá</span>
            <span className="block md:text-[7rem] drop-shadow-md">La Patagonia</span>
            {/* <span className="block md:text-[7rem] drop-shadow-md ">San Martín de los Andes</span> */}
          </h1>
          <div className="flex flex-col text-right w-full px-2 tracking-wide drop-shadow-md hero-text">
            <p className="w-full md:w-9/12 self-end">
              Te invitamos a vivir experiencias inolvidables, paisajes
              impresionantes y una gastronomía con un toque hogareño
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center p-4">
          <div className="video-frame">
            <video
              src="assets/videos/institucional.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="true"
              className="video"
            ></video>
          </div>
        </div>

        <div className="wrapper flex flex-col gap-6 text-3xl text-center">
          <div className="flex flex-wrap justify-around opacity-layer-90 rounded-md">
            <div className="flex-col justify-between text-2xl flex w-full md:w-6/12 p-6">
              <div>
                <div className="flex flex-col">
                  <h3 className="text-4xl mb-4">Servicios</h3>
                  <ul className="flex flex-col gap-2 text-start">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>
                        Wifi{" "}
                        <span className="text-lg text-gray-500">
                          {"("}500 megas c/ fibra óptica{")"}
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>
                        4 comidas con opción take away{" "}
                        <span className="text-lg text-gray-500">
                          {"("}podes consultar por opciones vegetarianas / sin
                          TACC, otras{")"}
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Open-bar</p>
                      <span className="text-lg text-gray-500">
                        {"("}Self service{")"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Room & House Keeping</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>
                        Gestión de transfer privado{" "}
                        <span className="text-lg text-gray-500">
                          {"("}in-out Aeropuerto o terminal de ómnibus / Cerro
                          Chapelco / Otros{")"}
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap w-full mt-4 home-thumb-section opacity-layer-70">
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/servicios/home_office.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                </div>
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/servicios/transfer.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                </div>
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/servicios/4_comidas.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                </div>
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/servicios/house_keeping.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                  <Link href={"/instalaciones"}>
                    <div className="thumb-img bg-[#ffffffc2] scale-75 flex justify-center items-center text-gray-500">
                      Ver mas...
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-col justify-between text-2xl flex w-full md:w-6/12 p-6">
              <div>
                <div className="flex flex-col">
                  <h3 className="text-4xl mb-4">Actividades</h3>
                  <ul className="flex flex-col gap-2 text-start">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Tenis / Fútbol</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Trekking
                    </li>

                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Masajes</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Cabalgatas</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Golf</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Rafting</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Excursiones en lancha</p>
                    </li>

                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 min-w-6 self-start mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p>Muchas otras...</p>
                    </li>
                  </ul>
                  <p className="mt-2 text-base text-gray-500">
                    Es esencial organizar las excursiones con tiempo
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap w-full mt-4 home-thumb-section opacity-layer-70">
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/actividades/trekking.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                </div>
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/actividades/caballo.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                </div>
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/actividades/tenis.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                </div>
                <div className="home-thumb-img">
                  <Image
                    src="/assets/images/inicio/actividades/kayak.jpg"
                    width={300}
                    height={300}
                    alt="logo de Refugio del Lobo"
                    className="thumb-img"
                  />
                  <Link href={"/propuestas"}>
                    <div className="thumb-img bg-[#ffffffc2] scale-75 flex justify-center items-center text-gray-500">
                      Ver mas...
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StickyWhatsappLink />
      </div>
    </div>
  )
}
