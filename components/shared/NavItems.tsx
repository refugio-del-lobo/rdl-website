"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

const NavItems = ({setCurrentLink, currentLink, clicks }: any) => {
  // console.log("clicks", clicks)
  // console.log("currentLink 8", currentLink)

  const pathname = usePathname()
  console.log(pathname)

  const router = useRouter()
  const [selectedLink, setSelectedLink] = useState<any>(pathname)
  console.log("selectedLink", selectedLink)

  const handleLinkClick =
    (href: string): React.MouseEventHandler<HTMLAnchorElement> =>
    (event) => {
      event.preventDefault()
      setSelectedLink(href)
      setCurrentLink(href)
      router.push(href)
    }

  return (
    <ul className="flex flex-col items-center md:flex-row w-full justify-end gap-10">
      <Link
        href="/"
        onClick={handleLinkClick("/")}
        className={`navItem ${currentLink === "/" ? "selectedLinkStyle" : ""}`}
      >
        Inicio
      </Link>
      <Link
        href="/nosotros"
        onClick={handleLinkClick("/nosotros")}
        className={`navItem ${
          currentLink === "/nosotros" ? "selectedLinkStyle" : ""
        }`}
      >
        Nosotros
      </Link>
      <Link
        href="/instalaciones"
        onClick={handleLinkClick("/instalaciones")}
        className={`navItem ${
          currentLink === "/instalaciones" ? "selectedLinkStyle" : ""
        }`}
      >
        Instalaciones
      </Link>
      <Link
        href="/propuestas"
        onClick={handleLinkClick("/propuestas")}
        className={`navItem ${
          currentLink === "/propuestas" ? "selectedLinkStyle" : ""
        }`}
      >
        Propuestas
      </Link>
      <Link
        href="/contacto"
        onClick={handleLinkClick("/contacto")}
        className={`navItem ${
          currentLink === "/contacto" ? "selectedLinkStyle" : ""
        }`}
      >
        Contacto
      </Link>
    </ul>
  )
}

export default NavItems
