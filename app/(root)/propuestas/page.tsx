"use client"
import React, { useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
              defaultValue="verano"
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
                <div className="flex flex-col px-4 pb-4">
                  <p className="text-2xl md:text-3xl py-2 md:py-4 text-center">
                    Verano
                  </p>
                  <p>
                    Vamos en búsqueda de los lagos, ríos, miradores, cascadas,
                    trekkings y te invitamos a vivir unos días de conexión con
                    la naturaleza y los paisajes que nos rodean.
                  </p>
                </div>
                <div className="flex justify-center p-2">
                  <Image
                    src="https://picsum.photos/600"
                    width={600}
                    height={600}
                    alt="Img"
                  />
                </div>
                <div className="w-full flex object-contain object-fit-contain ratio-16x9 p-2">
                  <video
                    src="/assets/videos/institucional.mp4"
                    controls
                  ></video>
                </div>
                <div className="w-full p-2 flex justify-center my-4 drop-shadow-md">
                  <div className="bg-[#acecb0ae] text-green-600 w-fit rounded-md hover:bg-[#71e979b5] border-green-600 border drop-shadow-md">
                    <Button
                      variant={"default"}
                      className="p-6 text-lg font-medium flex gap-2 items-center"
                    >
                      <p>

                      DESCARGAR .PDF
                      </p>
                      <span>
                        <Image
                          src={"/assets/icons/icon-pdf.svg"}
                          width={28}
                          height={28}
                          alt="Image"
                          className=""
                        />
                      </span>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="otono_primavera">
              <div className="flex flex-col px-4 pb-4">
                <p className="text-2xl md:text-3xl py-2 md:py-4 text-center">
                  {" "}
                  Otoño / Primavera
                </p>

                <p>
                  Entre soles y nubes, fríos y calores, vivimos los colores del
                  otoño acompañado siempre de una gastronomía ideal
                  para cada momento.
                </p>
                <p>
                  Llegan las flores! hermosos y largos días, atardeceres mágicos
                  y noches llenas de estrellas y fuegos.
                </p>

              </div>
              <div className="flex justify-center p-2">
                  <Image
                    src="https://picsum.photos/600"
                    width={600}
                    height={600}
                    alt="Img"
                  />
                </div>
                <div className="w-full flex object-contain object-fit-contain ratio-16x9 p-2">
                  <video
                    src="/assets/videos/institucional.mp4"
                    controls
                  ></video>
                </div>
                <div className="w-full p-2 flex justify-center my-4 drop-shadow-md">
                  <div className="bg-[#acecb0ae] text-green-600 w-fit rounded-md hover:bg-[#71e979b5] border-green-600 border drop-shadow-md">
                    <Button
                      variant={"default"}
                      className="p-6 text-lg font-medium flex gap-2 items-center"
                    >
                      <p>

                      DESCARGAR .PDF
                      </p>
                      <span>
                        <Image
                          src={"/assets/icons/icon-pdf.svg"}
                          width={28}
                          height={28}
                          alt="Image"
                          className=""
                        />
                      </span>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="invierno"
                className=" bg-contain bg-repeat-y lg:bg-cover rounded-md"
              >
                

                <div>
                <div className="flex flex-col px-4 pb-4">
                  <p className="text-2xl md:text-3xl py-2 md:py-4 text-center">
                    Invierno
                  </p>
                  <p>
                  Nos vestimos de blanco y te ofrecemos una semana de
                          esquí sin preocupaciones.
                  </p>
                  </div>

                <div className="flex justify-center p-2">
                  <Image
                    src="https://picsum.photos/600"
                    width={600}
                    height={600}
                    alt="Img"
                  />
                </div>
                <div className="w-full flex object-contain object-fit-contain ratio-16x9 p-2 justify-center">
                <video
                            src="assets/videos/rdl_reel_camino_a_chapelco.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            // controls
                            preload="true"
                            className="video"
                            id="miVideo"
                            ref={videoRef}
                            onLoadedMetadata={handleLoadedMetadata}
                          ></video>
                </div>
                <div className="w-full p-2 flex justify-center my-4 drop-shadow-md">
                  <div className="bg-[#acecb0ae] text-green-600 w-fit rounded-md hover:bg-[#71e979b5] border-green-600 border drop-shadow-md">
                    <Button
                      variant={"default"}
                      className="p-6 text-lg font-medium flex gap-2 items-center"
                    >
                      <p>

                      DESCARGAR .PDF
                      </p>
                      <span>
                        <Image
                          src={"/assets/icons/icon-pdf.svg"}
                          width={28}
                          height={28}
                          alt="Image"
                          className=""
                        />
                      </span>
                    </Button>
                  </div>
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
