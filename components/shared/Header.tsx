"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { usePathname, useRouter } from "next/navigation"

const Header = () => {
  const headerRef = useRef(null)
  const [showHeader, setShowHeader] = useState("")

  const pathname = usePathname()
  // console.log("pathname", pathname)

  const router = useRouter()
  const [currentLink, setCurrentLink] = useState(pathname)
  // console.log("currentLink - header 19", currentLink)

  const handleLinkClick =
    (href: string): React.MouseEventHandler<HTMLAnchorElement> =>
    (event) => {
      event.preventDefault()
      router.push(href)
      setCurrentLink("/")
    }

  useLayoutEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop
      if (headerRef.current) {
        if (scrollTop > lastScrollTop) {
          setShowHeader("hide-header")
        } else {
          setShowHeader("show-header")
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [headerRef])

  return (
    <header
      className={`w-full xl:text-xl shadow-lg ${showHeader} z-50`}
      ref={headerRef}
    >
      <div className="headerWrapper bg-[#000000d8] flex items-center justify-between">
        <Link href="/" className="w-36" onClick={handleLinkClick("/")}>
          <Image
            src="https://raw.githubusercontent.com/refugio-del-lobo/rdl-website/main/public/assets/images/rdl-logo-white.svg"
            width={128}
            height={128}
            alt="logo de Refugio del Lobo"
            className="w-20 md:w-36"
          />
        </Link>

        <nav
          className={`md:flex md:justify-between md:items-center hidden md:visible w-full text-white z-50`}
        >
          <NavItems setCurrentLink={setCurrentLink} currentLink={currentLink} />
        </nav>
        <MobileNav setCurrentLink={setCurrentLink} currentLink={currentLink} />
      </div>
    </header>
  )
}

export default Header
