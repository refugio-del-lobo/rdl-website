import LinkCard from "@/components/shared/LinkCard"
import Image from "next/image"
import React from "react"

const Instalaciones = () => {
  return (
    <>
      <div className=" bg-nosotros-bg bg-center">
        <div className="w-full h-full min-h-screen opacity-layer-70 hf-paddings ">
          <h1 className="text-3xl md:text-5xl xl:text-7xl text-center pb-6 md:pb-12 py-5">
            Instalaciones
          </h1>
          <div className="wrapper min-h-screen opacity-layer-70">
            <div className="mb-8">
              <h3 className="text-[3rem] text-center pb-6 lg:pb-12">La casa</h3>
              <div className="flex flex-wrap justify-evenly gap-10">
                <LinkCard
                  text="Habitaciones"
                  imgSrc="/assets/images/interior/habitaciones/habitaciones_primavera_01.jpg"
                />
                <LinkCard
                  text="Baños"
                  href="/instalaciones"
                  imgSrc="/assets/images/interior/banos/banos_05.jpg"
                />
                <LinkCard
                  text="Livings"
                  href="/instalaciones"
                  imgSrc="/assets/images/interior/living/living_01.jpg"
                />
                <LinkCard
                  text="Quincho"
                  href="/instalaciones"
                  imgSrc="/assets/images/interior/quincho/quincho_04.jpg" />
                <LinkCard
                  text="Cocina"
                  href="/instalaciones"
                  imgSrc="/assets/images/interior/cocina/cocina_02.jpg"
                />
              </div>
              <div></div>
            </div>

            <div className="mb-8">
              <h3 className="text-[3rem] text-center pb-6 lg:pb-12">
                Exterior
              </h3>
              <div className="flex flex-wrap justify-evenly gap-10">
                <LinkCard text="Fogoneros" href="/instalaciones" imgSrc="/assets/images/exterior/fogoneros/fogoneros_09.jpg"/>
                <LinkCard
                  text="Playita"
                  href="/instalaciones"
                  imgSrc="/assets/images/exterior/playita/playita_06.jpg"
                />
                <LinkCard
                  text="Invernadero"
                  href="/instalaciones"
                  imgSrc="/assets/images/exterior/invernadero/invernadero_01.jpg"
                />
                <LinkCard
                  text="Deck"
                  href="/instalaciones"
                  imgSrc="/assets/images/exterior/deck/deck_01.jpg"
                />
                <LinkCard
                  text="Zona deportiva"
                  href="/instalaciones"
                  imgSrc="/assets/images/exterior/zona_deportiva/zona_deportiva_04.jpg"
                />
                <LinkCard
                  text="La matera"
                  href="/instalaciones"
                  imgSrc="/assets/images/exterior/matera/matera_08.jpg"
                />

              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Instalaciones
