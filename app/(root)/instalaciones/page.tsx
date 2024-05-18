import LinkCard from "@/components/shared/LinkCard"
import Polaroid from "@/components/shared/Polaroid"
import Image from "next/image"
import React from "react"

const title1 = "Refugio del lobo, 1864"
const text1 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
const title2 = "Refugio del Pescador, 1940"
const text2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ADemas esto."
const img1 = "https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/interior/cocina/cocina_01.jpg"
const img2 = "https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/interior/cocina/cocina_02.jpg"

const Instalaciones = () => {
  return (
    <>
      <div className=" bg-nosotros-bg bg-cover bg-center">
        <div className="w-full h-full min-h-screen opacity-layer-70 hf-paddings ">
          {/* <h1 className="text-3xl md:text-5xl xl:text-7xl text-center pb-6 md:pb-12 py-5">
            Instalaciones
          </h1> */}
          {/* <div className="w-full flex justify-center gap-5 flex-wrap">
              <Polaroid title={title2} src={img2}/>
              <Polaroid title={title1} text={text1} src={img1}/>
              <Polaroid title={title2} text={text2} src={img2}/>
          </div> */}
          <div className="wrapper min-h-screen opacity-layer-70">
            <div className="mb-8">
              <h3 className="text-[3rem] text-center pb-6 lg:pb-12">La casa</h3>
              <div className="flex flex-wrap justify-evenly gap-10">
                <LinkCard
                  text="Habitaciones"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/interior/habitaciones/habitaciones_primavera_01.jpg"
                  href="/instalaciones/habitaciones"
                />
                <LinkCard
                  text="Baños"
                  href="/instalaciones/banos"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/interior/banos/banos_05.jpg"
                />
                <LinkCard
                  text="Livings"
                  href="/instalaciones/livings"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/interior/living/living_01.jpg"
                />
                <LinkCard
                  text="Quincho"
                  href="/instalaciones/quincho"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/interior/quincho/quincho_04.jpg" />
                <LinkCard
                  text="Cocina"
                  href="/instalaciones/cocina"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/interior/cocina/cocina_02.jpg"
                />
              </div>
              <div></div>
            </div>

            <div className="mb-8">
              <h3 className="text-[3rem] text-center pb-6 lg:pb-12">
                Exterior
              </h3>
              <div className="flex flex-wrap justify-evenly gap-10">
                <LinkCard text="Fogoneros" href="/instalaciones/fogoneros" imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/exterior/fogoneros/fogoneros_09.jpg"/>
                <LinkCard
                  text="Playita"
                  href="/instalaciones/playita"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/exterior/playita/playita_06.jpg"
                />
                <LinkCard
                  text="Huerta e Invernadero"
                  href="/instalaciones/invernadero"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/exterior/invernadero/invernadero_01.jpg"
                />
                <LinkCard
                  text="Deck"
                  href="/instalaciones/deck"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/exterior/deck/deck_01.jpg"
                />
                <LinkCard
                  text="Zona deportiva"
                  href="/instalaciones/zona-deportiva"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/exterior/zona_deportiva/zona_deportiva_04.jpg"
                />
                <LinkCard
                  text="La matera"
                  href="/instalaciones/matera"
                  imgSrc="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/exterior/matera/matera_08.jpg"
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
