"use client"
import React, { useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImgCarousel from "@/components/shared/ImgCarousel"
import ButtonViewPdf from "@/components/shared/ButtonViewPdf"

const veranoFlyers: string[] = [
  "/assets/images/flyers-rdl/gira-nbg_imagen&info.jpg",
  "/assets/images/flyers-rdl/gira-nbg_imagen&info.jpg",
  "/assets/images/flyers-rdl/gira-nbg_imagen&info.jpg",
]
const otonoPrimaveraFlyers: string[] = [
  "/assets/images/flyers-rdl/yoga-golf-meditacion_casa.jpg",
  "/assets/images/flyers-rdl/yoga-golf-meditacion_golf.jpg",
  "/assets/images/flyers-rdl/yoga-golf-meditacion_yoga.jpg",
  "/assets/images/flyers-rdl/gira-nbg_imagen&info.jpg",
  "/assets/images/flyers-rdl/workshop_patagonia&content.jpg",
  "/assets/images/flyers-rdl/spring-week_imagen&info.jpg",
  "/assets/images/flyers-rdl/spring-week_solo-imagen.jpg",
]
const inviernoFlyers: string[] = [
  "/assets/images/flyers-rdl/ski-week_ultimos-lugares.jpg",
  "/assets/images/flyers-rdl/after-lobo_rdl.jpg",
  "/assets/images/flyers-rdl/carfitrip_patagonia&content.jpg",
]

const Propuestas = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }

  return (
    <div className="w-full h-full bg-nosotros-bg bg-cover bg-center">
      <div className="w-full h-full min-h-screen hf-paddings opacity-layer-70">
        <div className="wrapper-propuestas">
          <div className="flex justify-center">
            <div className="mt-4 mb-2 mx-2 p-4 rounded-md drop-shadow-md md:w-fit">
              <p className="max-w-xl text-center drop-shadow-md font-semibold lg:text-lg">
                A lo largo del año, las cuatro estaciones se apoderan de la
                patagonia y con ellas nos adaptamos para ofrecerte las
                experiencias que más se adecúen a cada momento.
              </p>
            </div>
          </div>
          <div className="rounded-md p-2">
            <Tabs
              defaultValue="invierno"
              className="opacity-layer-90 rounded-md p-1"
            >
              <TabsList className="bg-transparent flex justify-around">
                <TabsTrigger
                  value="verano"
                  className="flex-grow text-green-600 md:text-2xl md:w-1/3"
                >
                  Verano
                </TabsTrigger>
                <TabsTrigger
                  value="otono_primavera"
                  className="flex-grow text-green-600 md:text-2xl md:w-1/3"
                >
                  Otoño / Primavera
                </TabsTrigger>
                <TabsTrigger
                  value="invierno"
                  className="flex-grow text-green-600 md:text-2xl md:w-1/3"
                >
                  Invierno
                </TabsTrigger>
              </TabsList>

              <TabsContent value="verano">
                <div className="flex flex-col">
                  <p className="text-2xl md:text-4xl py-2 md:py-4 text-center">
                    Verano
                  </p>
                  <div className="wrapper">
                    <p className="text-center text-pretty font-medium text-lg md:text-xl">
                      Vamos en búsqueda de los lagos, ríos, miradores, cascadas,
                      trekkings y te invitamos a vivir unos días de conexión con
                      la naturaleza y los paisajes que nos rodean.
                    </p>
                  </div>
                </div>
                {/* <div className="flex justify-center p-2">
                  <Image
                    src="https://picsum.photos/600"
                    width={600}
                    height={600}
                    alt="Img"
                  />
                </div> */}

                <div className="wrapper flex justify-center">
                  <ImgCarousel imgPathArray={veranoFlyers} />
                </div>

                {/* <div className="w-full flex object-contain object-fit-contain ratio-16x9 p-2">
                  <video
                    src="/assets/videos/institucional.mp4"
                    controls
                  ></video>
                </div> */}
                <div className="wrapper w-full p-2 flex flex-col items-center justify-center gap-4 drop-shadow-md">
                  
                <ButtonViewPdf
                    title="M4DPASTA Experience"
                    src="/assets/images/pdfs-rdl/M4dpasta_Refugio-del-lobo.pdf"
                  />
                </div>
              </TabsContent>

              <TabsContent value="otono_primavera">
                <div className="flex flex-col">
                  <p className="text-2xl md:text-4xl py-2 md:py-4 text-center">
                    {" "}
                    Otoño / Primavera
                  </p>

                  <div className="wrapper">
                    <p className="text-center text-pretty font-medium text-lg md:text-xl">
                      Entre soles y nubes, fríos y calores, vivimos los colores
                      del otoño acompañado siempre de una gastronomía ideal
                      para cada momento.
                    </p>
                    <p className="text-center text-pretty font-medium text-lg md:text-xl">
                      Llegan las flores! hermosos y largos días, atardeceres
                      mágicos y noches llenas de estrellas y fuegos.
                    </p>
                  </div>
                </div>
                {/* <div className="flex justify-center p-2">
                  <Image
                    src="https://picsum.photos/600"
                    width={600}
                    height={600}
                    alt="Img"
                  />
                </div> */}

                <div className="wrapper flex justify-center">
                  <ImgCarousel imgPathArray={otonoPrimaveraFlyers} />
                </div>

                {/* <div className="w-full flex object-contain object-fit-contain ratio-16x9 p-2">
                  <video
                    src="/assets/videos/institucional.mp4"
                    controls
                    className="rounded-xl"
                  ></video>
                </div> */}
                <div className="wrapper w-full p-2 flex flex-col items-center justify-center gap-4 drop-shadow-md">
                  <ButtonViewPdf
                    title="Yoga, Golf & meditación"
                    src="/assets/images/pdfs-rdl/yoga-golf-meditacion_Refugio-del-lobo.pdf"
                  />
                  <ButtonViewPdf
                    title="RenaSer - Retiro espiritual"
                    src="/assets/images/pdfs-rdl/RenaSer-retiro-espiritual_Refugio-del-lobo.pdf"
                  />
                  <ButtonViewPdf
                    title="Golf & Wine Experience - Lagarde"
                    src="/assets/images/pdfs-rdl/Golf&Wine-experience-Lagarde_Refugio-del-lobo.pdf"
                  />
                  <ButtonViewPdf
                    title="Golf & Wine Experience - Putruele"
                    src="/assets/images/pdfs-rdl/Golf&Wine-experience-Putruele_Refugio-del-lobo.pdf"
                  />
                </div>
              </TabsContent>

              <TabsContent
                value="invierno"
                className=" bg-contain bg-repeat-y lg:bg-cover rounded-md"
              >
                <div>
                  <div className="flex flex-col">
                    <p className="text-2xl md:text-4xl py-2 md:py-4 text-center">
                      Invierno
                    </p>
                    <div className="wrapper">
                      <p className="text-center text-pretty font-medium text-lg md:text-xl">
                        Nos vestimos de blanco y te ofrecemos una semana de
                        esquí sin preocupaciones.
                      </p>
                    </div>
                  </div>

                  <div className="wrapper flex justify-center">
                    <ImgCarousel imgPathArray={inviernoFlyers} />
                  </div>

                  {/* <div className="wrapper flex justify-center items-center">
                    <video
                      src="/assets/videos/rdl_reel_camino_a_chapelco.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="true"
                      className="video"
                      id="miVideo"
                      ref={videoRef}
                      onLoadedMetadata={handleLoadedMetadata}
                    ></video>
                  </div> */}

                  <div className="wrapper w-full p-2 flex flex-col items-center justify-center gap-4 drop-shadow-md">
                    <ButtonViewPdf
                      title="Ski Week"
                      src="/assets/images/pdfs-rdl/ski-week_Refugio-del-lobo.pdf"
                    />
                    <ButtonViewPdf
                      title="After Ski Experience"
                      src="/assets/images/pdfs-rdl/After-Ski_Refugio-del-lobo.pdf"
                    />
                    <ButtonViewPdf
                      title="Patagonia & Content Experience"
                      src="/assets/images/pdfs-rdl/Patagonia&content-experience_Refugio-del-lobo.pdf"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Propuestas
