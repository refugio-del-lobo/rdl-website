import React, { ReactElement } from "react"
import { galleryImagesUrls } from "../../../../public/assets/js/galleryImagesUrls"
import Image from "next/image.js"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ImgGroup from "@/components/shared/GalleryImgGroup"
import GalleryImgGroup from "@/components/shared/GalleryImgGroup"
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
      <div className=" bg-casa-lejos-bg bg-cover">
        <div className="w-full h-full min-h-screen opacity-layer-70 hf-paddings ">
          <h1 className="text-3xl md:text-5xl xl:text-7xl text-center pb-6 md:pb-8 py-5">
            {/* Galeria de imagenes{" "} */}
            {houseSectionId == "banos"
              ? "Baños"
              : capitalizarPalabras(houseSectionId)}
          </h1>

          <div className="wrapper">
            {/* ***************** INTERIOR ****************** */}
            {houseSectionId == "habitaciones" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 pb-6 drop-shadow-md">
                  <p>
                    Tenemos en total cuatro habitaciones, cada una tiene el
                    nombre de una estación del año.
                  </p>
                  <p>
                    <span className="font-semibold">Verano:</span> Es la
                    habitación doble.
                  </p>
                  <p>
                    <span className="font-semibold">Otoño:</span> Tiene cinco
                    camas, cuatro cuchetas y un somier.
                  </p>
                  <p>
                    <span className="font-semibold">Invierno:</span> Tiene seis
                    camas, tres cuchetas.
                  </p>
                  <p>
                    <span className="font-semibold">Primavera:</span> Tiene
                    cinco camas, cuatro cuchetas y un somier.
                  </p>
                </div>
                  <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                    <Button variant={"default"}>
                      <Link href={"/instalaciones"}>
                        ⬅ Regresar a instalaciones
                      </Link>
                    </Button>
                  </div>
                <div>
                  <h2 className="text-center text-3xl pb-2 mt-6">Verano</h2>
                  <GalleryImgGroup
                    imgGroupLinks={galleryImagesUrls?.habitaciones?.verano}
                  />
                </div>
                <div>
                  <h2 className="text-center text-3xl pb-2">Otoño</h2>
                  <GalleryImgGroup
                    imgGroupLinks={galleryImagesUrls?.habitaciones?.otono}
                  />
                </div>
                <div>
                  <h2 className="text-center text-3xl pb-2">Invierno</h2>
                  <GalleryImgGroup
                    imgGroupLinks={galleryImagesUrls?.habitaciones?.invierno}
                  />
                </div>
                <div>
                  <h2 className="text-center text-3xl pb-2">Primavera</h2>
                  <GalleryImgGroup
                    imgGroupLinks={galleryImagesUrls?.habitaciones?.primavera}
                  />
                </div>
              </div>
            )}
            {houseSectionId == "cocina" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    Una cocina equipada dónde el chef de la casa nos prepara las
                    cuatro comidas.
                  </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.cocina} />
              </div>
            )}
            {houseSectionId == "banos" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    La casa cuenta con cuatro baños. Dos en la planta baja, uno
                    en el primer piso y un cuarto baño ubicado en el quincho.
                  </p>
                  <p> Todos cuentan con ducha.</p>
                </div>{" "}
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.banos} />
              </div>
            )}
            {houseSectionId == "livings" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    Contamos con dos livings con chimenea, sillones y tv para
                    que disfrutes de tardes y noches o los días de lluvia con
                    una mayor comodidad.
                  </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.livings} />
              </div>
            )}
            {houseSectionId == "quincho" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    Contamos con un quincho equipado con parrilla, una barra y
                    proyector para ver todos juntos y de la mejor manera
                    partidos o eventos importantes.
                  </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.quincho} />
              </div>
            )}

            {/* ***************** EXTERIOR ****************** */}
            {houseSectionId == "fogoneros" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    Disponemos de tres zonas con fogoneros para compartir
                    momentos de una manera calida acompañadas de un buen fuego.
                  </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.fogoneros} />
              </div>
            )}
            {houseSectionId == "playita" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    Contamos con una laguna artificial de agua cristalina,
                    habilitada para meterse y nadar con las truchas que hay en
                    ella.
                  </p>
                  <p>
                    {" "}
                    El agua de la laguna viene del Lago Lolog y desemboca en el
                    Lago Lacar.
                  </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.playita} />
              </div>
            )}
            {houseSectionId == "invernadero" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    Disponemos de un invernadero y una huerta, donde encontrarás
                    variedad de verduras y frutas que el chef utiliza para
                    deleitarnos en las comidas.
                  </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.invernadero} />
              </div>
            )}
            {houseSectionId == "deck" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    El deck es un lugar multifuncional que nunca te va a fallar.
                  </p>
                  <p>
                    Puede servir para lo que quieras: leer un libro, trabajar,
                    jugar juegos de mesa, tomar tragos... lo que el día y el
                    momento pida.
                  </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.deck} />
              </div>
            )}
            {houseSectionId == "zona-deportiva" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    A unos 300 mtrs aproximadamente, frente a la matera y dentro
                    del barrio, se encuentra la cancha de tenis y de fútbol.
                  </p>
                  <p>Habilitadas para usar con previa reservación.</p>
                  <p> Disponemos de raquetas y pelotas para los huespedes. </p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.zonaDeportiva} />
              </div>
            )}
            {houseSectionId == "matera" && (
              <div className=" flex flex-col">
                <div className="text-xl flex flex-col gap-2 drop-shadow-md">
                  <p>
                    A unos 300 metros aproximadamente, dentro del barrio, se
                    encuentra la “Matera” un pequeño espacio disponible para
                    usar (con previa reserva).
                  </p>
                  <p>
                    {" "}
                    Ideal para eventos, asado con grupos numerosos. También
                    disponemos de una cancha de ping pong.
                  </p>
                  <p>Este espacio no se encuentra dentro de la casa.</p>
                </div>
                <div className="mt-4 opacity-layer-90 w-fit rounded-md hover:bg-gray-200">
                  <Button variant={"default"}>
                    <Link href={"/instalaciones"}>
                      ⬅ Regresar a instalaciones
                    </Link>
                  </Button>
                </div>
                <GalleryImgGroup imgGroupLinks={galleryImagesUrls?.matera} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
