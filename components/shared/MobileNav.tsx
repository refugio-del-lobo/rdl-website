"use client"
import React, { useEffect, useRef, useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@radix-ui/react-separator"
import NavItems from "./NavItems"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

const MobileNav = ({ setCurrentLink, currentLink }: any) => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  const toggleNavbar = () => {
    setIsOpen(!isOpen) // Cambiar el estado de abierto a cerrado y viceversa
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Especificamos el tipo de event
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        // Convertimos event.target a Node
        setIsOpen(false)
      }
    }

    const handleTouchOutside = (event: TouchEvent) => {
      // Especificamos el tipo de event
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        // Convertimos event.target a Node
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleTouchOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleTouchOutside)
    }
  }, [])

  return (
    <nav className="md:hidden" ref={navbarRef}>
      <div className="w-12 h-12 m-2 flex justify-center items-center">
        {isOpen ? (
          <button onClick={toggleNavbar}>
            <Image
              src={"/assets/icons/icon-exit.svg"}
              width={48}
              height={48}
              alt="exit icon"
              className="w-full relative"
            />
          </button>
        ) : (
          <button onClick={toggleNavbar}>
            <Image
              src={"/assets/icons/icon-menu.svg"}
              width={48}
              height={48}
              alt="menu icon"
              className="w-full relative"
            />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 py-4 text-white bg-[#000000d8]">
          <NavItems
            setCurrentLink={setCurrentLink}
            currentLink={currentLink}
            toggleNavbar={toggleNavbar}
          />
        </div>
      )}

      {/* <Sheet>
        <SheetTrigger className="align-middle"
        //  onClick={toggleSheet}
         >
          <Image
            style={{ color: "white" }}
            src="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/icons/menu.svg"
            alt="Mobile menu icon"
            height={46}
            width={46}
            className="cursor-pointer"
          />
        </SheetTrigger>

          <SheetContent
            side={"top"}
            className="flex flex-col gap-6 bg-white md:hidden items-center"
          >
            <div className="w-full flex flex-col items-center gap-1">
              <Image
                src="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/rdl-logo-white.svg"
                alt="logo de refugio del lobo"
                height={112}
                width={112}
              />
              <Separator className="border border-gray-150 w-full" />
            </div>
            <NavItems
              setCurrentLink={setCurrentLink}
              currentLink={currentLink}
              // toggleSheet={toggleSheet}
            />
          </SheetContent>
      </Sheet> */}
    </nav>
  )
}

export default MobileNav
