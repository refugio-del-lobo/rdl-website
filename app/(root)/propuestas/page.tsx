"use client"
import React, { useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

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
    <div className="w-full h-full bg-nosotros-bg bg-center">
      <div className="w-full h-full min-h-screen hf-paddings opacity-layer-70">
        <div className="wrapper-propuestas">
          <div className="rounded-md p-2">
            <Tabs defaultValue="verano">
              <TabsList className="bg-transparent flex justify-around">
                <TabsTrigger
                  value="verano"
                  className="flex-grow text-green-600 md:text-2xl md:w-1/3"
                >
                  Verano
                </TabsTrigger>
                <TabsTrigger
                  value="invierno"
                  className="flex-grow text-green-600 md:text-2xl md:w-1/3"
                >
                  Invierno
                </TabsTrigger>
                <TabsTrigger
                  value="primavera_otono"
                  className="flex-grow text-green-600 md:text-2xl md:w-1/3"
                >
                  Primavera / Otoño
                </TabsTrigger>
              </TabsList>
              <TabsContent value="verano">
                <p className="text-2xl md:text-3xl py-2 md:py-4 text-center">
                  Verano
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum vel provident ab aliquam, autem voluptate unde, est
                  iusto, ut perspiciatis corrupti sit. Rem, tempora eveniet
                  quaerat ex perferendis ducimus ipsa.
                </p>
              </TabsContent>
              <TabsContent
                value="invierno"
                className="bg-winter-bg bg-contain bg-repeat-y lg:bg-cover p-2 rounded-md"
              >
                <div>
                  <h2 className="text-2xl lg:text-4xl text-center font-semibold p-4">
                    Winter Experience
                  </h2>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-4 lg:flex-row-reverse">   <div className="h-4/6 flex justify-center items-center p-4 lg:w-2/6">
                        <div className="video-frame">
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
                      </div>
                      <div className=" flex flex-col gap-4 text-xl text-justify lg:text-2xl lg:w-4/6 lg:px-20">
                        <p>
                          Sumérgete en la emoción de esquiar en San Martín de
                          los Andes desde nuestro exclusivo hotel. Con nieve
                          polvo y vistas espectaculares, cada descenso será una
                          aventura inolvidable. ¡Reserva ahora y vive la emoción
                          del esquí al máximo!
                        </p>
                        <p>
                          Despierta cada mañana con la promesa de pistas
                          impecables y la comodidad de nuestro hotel. Con acceso
                          directo a las mejores rutas de esquí, tu escapada
                          invernal será inigualable. ¡Reserva ahora y haz
                          realidad tus sueños en la nieve!
                        </p>
                      </div>
                   
                    </div>

                    <div className="flex justify-center max-w-[500px] max-h-[500px] drop-shadow-2xl">
                      <div className="rounded-sm img-container">
                        <Image
                          src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/fogon_grupo_4.jpg"}
                          width={500}
                          height={500}
                          alt="2 personas en el fogon"
                          className="rounded-lg responsive-img"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center max-w-[500px] max-h-[500px] drop-shadow-2xl">
                      <div className="rounded-sm img-container">
                        <Image
                          src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/fogon_grupo_4.jpg"}
                          width={500}
                          height={500}
                          alt="2 personas en el fogon"
                          className="rounded-lg responsive-img"
                        />
                      </div>
                    </div>
                    <p className="text-xl text-justify">
                      Sumérgete en la atmósfera acogedora de nuestro hotel
                      después de un día de esquí. Disfruta de una deliciosa cena
                      junto a la chimenea y comparte tus aventuras en la montaña
                      con otros entusiastas. ¡Tu experiencia de esquí en San
                      Martín de los Andes comienza aquí!
                    </p>
                    <div className="flex justify-center max-w-[500px] max-h-[500px] drop-shadow-2xl">
                      <div className="rounded-sm img-container">
                        <Image
                          src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/fogon_grupo_4.jpg"}
                          width={500}
                          height={500}
                          alt="2 personas en el fogon"
                          className="rounded-lg responsive-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="primavera_otono">
                <p className="text-2xl md:text-3xl py-2 md:py-4 text-center">
                  {" "}
                  Primavera / Otoño
                </p>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum vel provident ab aliquam, autem voluptate unde, est
                  iusto, ut perspiciatis corrupti sit. Rem, tempora eveniet
                  quaerat ex perferendis ducimus ipsa.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Propuestas
