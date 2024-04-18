import React, { ReactElement } from "react"
import { galleryImagesUrls } from "../../../../public/assets/js/galleryImagesUrls"
import Image from "next/image.js"
type Params = {
  params: {
    houseSectionId: string
  }
}
// console.log(galleryImagesUrls)

export function generateStaticParams() {
  return [
    { houseSectionId: "habitaciones" },
    { houseSectionId: "banos" },
    { houseSectionId: "livings" },
    { houseSectionId: "quincho" },
    { houseSectionId: "cocina" },
    { houseSectionId: "fogoneros" },
    { houseSectionId: "playita" },
    { houseSectionId: "invernadero" },
    { houseSectionId: "deck" },
    { houseSectionId: "zona-deportiva" },
    { houseSectionId: "matera" },
  ]
}

function capitalizarPalabras(houseSectionId: string) {
  // Dividir la cadena en palabras utilizando el guion medio como separador
  var palabras = houseSectionId.split("-")

  // Capitalizar la primera letra de cada palabra
  for (var i = 0; i < palabras.length; i++) {
    palabras[i] = capitalizarPrimeraLetra(palabras[i])
  }

  // Unir las palabras capitalizadas de nuevo en una cadena
  return palabras.join(" ")
}

// Función para capitalizar la primera letra de una palabra
function capitalizarPrimeraLetra(houseSectionId: string) {
  return houseSectionId.charAt(0).toUpperCase() + houseSectionId.slice(1)
}

export default function HouseSectionPage({
  params: { houseSectionId },
}: Params) {
  return (
    <>
      <div className=" bg-casa-lejos-bg bg-center">
        <div className="w-full h-full min-h-screen opacity-layer-70 hf-paddings ">
          <h1 className="text-3xl md:text-5xl xl:text-7xl text-center pb-6 md:pb-8 py-5">
            Galeria de imagenes{" "}
            {houseSectionId == "banos"
              ? "Baños"
              : capitalizarPalabras(houseSectionId)}
          </h1>

          <div className="wrapper">

            {houseSectionId == "habitaciones" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 pb-6 drop-shadow-md">
                  <p className="transform transition duration-300 ease-in-out hover:scale-120">
                    Tenemos en total cuatro habitaciones, cada una tiene el
                    nombre de una estación del año.
                  </p>
                  <p><span className="font-semibold">Verano:</span> Es la habitación doble.</p>
                  <p><span className="font-semibold">Otoño:</span> Tiene cinco camas, cuatro cuchetas y un somier.</p>
                  <p><span className="font-semibold">Invierno:</span> Tiene seis camas, tres cuchetas.</p>
                  <p>
                  <span className="font-semibold">Primavera:</span> Tiene cinco camas, cuatro cuchetas y un somier.
                  </p>
                </div>
                {/**************   HABTACIONES VERANO   **************/}
                <div>
                  <h2 className="text-center text-3xl pb-2">Verano</h2>
                <div className="flex gap-2 md:gap-6 flex-wrap justify-around my-6">
                  {galleryImagesUrls?.habitaciones?.verano?.map((url: string) => (
                    <div
                      key={url}
                      className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
                    >
                      <Image
                        src={url}
                        width={500}
                        height={500}
                        alt="imagen de galeria"
                        className="h-[200px] md:h-[300px] w-[300px] object-cover rounded-xl overflow-hidden drop-shadow-xl border"
                      />
                    </div>
                  ))}
                </div>
                </div>
                {/**************   HABTACIONES OTOÑO   **************/}
                <div>
                  <h2 className="text-center text-3xl pb-2">Otoño</h2>
                <div className="flex gap-6 flex-wrap justify-around my-6">
                  {galleryImagesUrls?.habitaciones?.otono?.map((url: string) => (
                    <div
                      key={url}
                      className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
                    >
                      <Image
                        src={url}
                        width={500}
                        height={500}
                        alt="imagen de galeria"
                        className="h-[300px] w-[300px] object-cover rounded-xl overflow-hidden drop-shadow-xl border"
                      />
                    </div>
                  ))}
                </div>
                </div>
                {/**************   HABTACIONES INVIERNO   **************/}
                <div>
                  <h2 className="text-center text-3xl pb-2">Invierno</h2>
                <div className="flex gap-6 flex-wrap justify-around my-6">
                  {galleryImagesUrls?.habitaciones?.invierno?.map((url: string) => (
                    <div
                      key={url}
                      className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
                    >
                      <Image
                        src={url}
                        width={500}
                        height={500}
                        alt="imagen de galeria"
                        className="h-[300px] w-[300px] object-cover rounded-xl overflow-hidden drop-shadow-xl border"
                      />
                    </div>
                  ))}
                </div>
                </div>
                {/**************   HABTACIONES PRIMAVERA   **************/}
                <div>
                  <h2 className="text-center text-3xl pb-2">Primavera</h2>
                <div className="flex gap-6 flex-wrap justify-around my-6">
                  {galleryImagesUrls?.habitaciones?.primavera?.map((url: string) => (
                    <div
                      key={url}
                      className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
                    >
                      <Image
                        src={url}
                        width={500}
                        height={500}
                        alt="imagen de galeria"
                        className="h-[300px] w-[300px] object-cover rounded-xl overflow-hidden drop-shadow-xl border"
                      />
                    </div>
                  ))}
                </div>
                </div>
              </div>
            )}

            {houseSectionId == "cocina" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p className="transform transition duration-300 ease-in-out hover:scale-120">
                    Una cocina equipada dónde el chef de la casa nos prepara las
                    cuatro comidas.
                  </p>
                </div>
                <div className="flex gap-6 flex-wrap justify-around my-6">
                  {galleryImagesUrls?.cocina?.map((url: string) => (
                    <div
                      key={url}
                      className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
                    >
                      <Image
                        src={url}
                        width={500}
                        height={500}
                        alt="imagen de galeria"
                        className="h-[300px] w-[300px] object-cover rounded-xl overflow-hidden drop-shadow-xl border"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {houseSectionId == "banos" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p className="transform transition duration-300 ease-in-out hover:scale-120">
                    La casa cuenta con cuatro baños. Dos en la planta baja, uno
                    en el primer piso y un cuarto baño ubicado en el quincho.
                  </p>
                  <p> Todos cuentan con ducha.</p>
                </div>
                <div className="flex gap-6 flex-wrap justify-around my-6">
                  {galleryImagesUrls?.banos?.map((url: string) => (
                    <div
                      key={url}
                      className={`p-1 drop-shadow-xl border border-white bg-white rounded-xl mb-6 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110`}
                    >
                      <Image
                        src={url}
                        width={500}
                        height={500}
                        alt="imagen de galeria"
                        className="h-[300px] w-[300px] object-cover rounded-xl overflow-hidden drop-shadow-xl border"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}
