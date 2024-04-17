"use client"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import React, { useEffect } from "react"

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full h-full flex flex-col justify-center bg-nosotros-bg bg-center">
      <div className="w-full h-full hf-paddings opacity-layer-70">
        <div className="wrapper h-full">
          <div className="opacity-layer-70">
            <div className="flex flex-col py-5 px-5 md:p-10 opacity-layer-70 rounded-sm">
              <h1 className="text-3xl md:text-5xl xl:text-7xl text-center pb-6 md:pb-12">
                Nosotros
              </h1>
              <div className="text-xl xl:text-2xl flex flex-col gap-6 text-justify">
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                  <p className="lg:w-9/12 lg:px-12 2xl:px-24 drop-shadow-md">
                    Somos tu{" "}
                    <span className="font-semibold">casa boutique de montaña </span>
                     ubicada en la entrada de {" "} 
                    <span className="font-semibold">
                    San Martín de los Andes.
                    </span>
                    <span className="text-gray-500 text-sm"> (A tan solo 10 minutos del aeropuerto y a 15 del centro)</span>
                  </p>
                  <div className="flex justify-center max-w-[500px] max-h-[500px] drop-shadow-2xl">
                    <div className="rounded-sm img-container flex">
                      <Image
                        src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/el_pegual_letrero.jpg"}
                        width={500}
                        height={500}
                        alt="letrero del club de campo 'El Pegual' "
                        className="rounded-lg responsive-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center lg:flex-row-reverse">
                  <p className="lg:w-9/12 lg:px-12 2xl:px-24 drop-shadow-md">
                    Nuestro{" "}
                    <span className="font-semibold">
                      predio de tres hectáreas rodeado de bosques y montaña{" "}
                    </span>
                    cuenta con{" "}
                    <span className="font-semibold">
                      una amplia variedad de comodidades y entretenimiento{" "}
                    </span>
                    como laguna y playa privada, sector deportivo (cancha de tenis y de fútbol), senderos con hermosas vistas, spots con fogoneros y otros espacios recreativos
                  </p>
                  <div className="flex justify-center max-w-[500px] max-h-[500px] drop-shadow-2xl">
                    <div className="rounded-sm img-container flex">
                      <Image
                        src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/spot_bosque.jpg"}
                        width={500}
                        height={500}
                        alt="spot del bosque"
                        className="rounded-lg responsive-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                  <p className="lg:w-9/12 lg:px-12 2xl:px-24 drop-shadow-md">
                    La casa tiene una{" "}
                    <span className="font-semibold">
                      capacidad para 12 a 17 personas{" "}
                    </span>
                    distribuida en{" "}
                    <span className="font-semibold">cuatro habitaciones</span>:
                    una doble, una quintuple y dos habitaciones que pueden adaptarse para alojar entre 2 y 5 personas cada una. Además, cuenta con {" "}
                    <span className="font-semibold">
                    4 baños, diversos espacios comunes, incluyendo living con chimenea, sala de estar con tv, comedor, quincho con parrilla y mas...
                    </span>
                  </p>
                  <div className="flex justify-center max-w-[500px] max-h-[500px] drop-shadow-2xl">
                    <div className="rounded-sm img-container flex">
                      <Image
                        src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/casa_frente_1.jpg"}
                        width={500}
                        height={500}
                        alt="frente de la casa"
                        className="rounded-lg responsive-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center lg:flex-row-reverse">
                  <p className="lg:w-9/12 lg:px-12 2xl:px-24 drop-shadow-md">
                    Nuestro objetivo es que nuestros huespedes se sientan de vacaciones el 100% del tiempo y estén libres de cualquier tipo de procupación durante su estadía. El <span className="font-semibold">servicio de pensión completa</span> incluye{" "}
                     las cuatro comidas, elaboradas por el chef de la casa, con{" "}
                    <span className="font-semibold">
                      {" "}
                      opciones de take away
                    </span>. Además ofrecemos un {" "}
                    <span className="font-semibold">Open-bar</span> con variedad de tragos y vinos.<span className="text-gray-500 text-sm"> (consultar por opciones sin TACC, vegetariana u otras)</span>
                  </p>
                  <div className="flex justify-center max-w-[500px] max-h-[500px] drop-shadow-2xl">
                    <div className="img-container flex">
                      <Image
                        src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/desayuno_outdoor.jpg"}
                        width={500}
                        height={500}
                        alt="desayuno en el pegual"
                        className="responsive-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="my-10 bg-gray-700" />
              <div className="flex flex-col items-center relative min-h-[200px]">
                <Image
                  src={"https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/rdl-logo-white.svg"}
                  width={300}
                  height={300}
                  className="z-10 absolute mt-[-30px] opacity-50"
                  alt="Logo del refugio del lobo"
                />
                <div className="flex flex-col text-xl lg:text-3xl font-bold gap-5 text-center z-20 mt-5 md:mt-10">
                  <p>
                    {" "}
                    ¡También podés consultarnos para gestionar excursiones!
                  </p>
                  
                  <p>¡TE ESPERAMOS!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
