import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="w-full footer-bg">
      <div className="footer-wrapper text-white flex md:text-xl">
        <div className="w-4/12 text-center">
          <Link
            href={`https://wa.me/+5491165747910`}
            className=" flex flex-col items-center gap-2"
            target="_blank"
          >
            Contacto
            <Image
              style={{ color: "white" }}
              src="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/icons/whatsapp_icon.svg"
              alt="Mobile menu icon"
              height={36}
              width={36}
              className="cursor-pointer w-7 h-7 md:w-8 md:h-8"
            />
          </Link>
        </div>
        <div className="w-4/12 text-center">
          <Link
            href={`https://www.google.com/maps/place/El+Pegual+Club+de+Campo/@-40.1119756,-71.2407286,17z/data=!3m1!4b1!4m6!3m5!1s0x96110bce045c0849:0x4fb1ddbec52292f0!8m2!3d-40.1119756!4d-71.2407286!16s%2Fg%2F11ftbzcr0s?entry=ttu`}
            className=" flex flex-col items-center gap-2"
            target="_blank"
          >
            Locación
            <Image
              style={{ color: "white" }}
              src="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/icons/location.svg"
              alt="Mobile menu icon"
              height={36}
              width={36}
              className="cursor-pointer w-8 h-8 md:w-8 md:h-8"
            />
          </Link>
          
          </div>
        <div className="w-4/12 text-center">
        <Link
            href={`https://www.instagram.com/refugiodellobo`}
            className=" flex flex-col items-center gap-2"
            target="_blank"
          >
            Redes
            <Image
              style={{ color: "white" }}
              src="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/icons/instagram_icon.svg"
              alt="Mobile menu icon"
              height={36}
              width={36}
              className="cursor-pointer w-8 h-8 md:w-8 md:h-8"
            />
          </Link>
          </div>
      </div>
      <div className="footer-wrapper text-white flex flex-col items-center">
        <div>www.refugiodellobo.com</div>
        <div className="mt-1 text-sm text-gray-500">
          © Copyright 2024. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
