"use client"
import React from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@radix-ui/react-separator"
import NavItems from "./NavItems"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

const  MobileNav = ({setCurrentLink, currentLink}: any) => {

  const pathname = usePathname()
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
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
          <NavItems setCurrentLink={setCurrentLink} currentLink={currentLink}/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
