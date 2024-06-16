import Link from 'next/link'
import React from 'react'
import WhatsappIcon from './WhatsappIcon'

const StickyWhatsappLink = () => {
  return (
    <div className="sticky flex justify-end bottom-0 z-40 md:hidden mb-[-30px]">
    <div className="w-14 h-14 rounded-[50%] bg-[#16a700] flex justify-center items-center drop-shadow-md mb-3 mr-3">
      <div className="w-12 h-12 rounded-[50%] bg-[#b9ffae] flex justify-center items-center drop-shadow-md">
        <Link
          href={"https://wa.me/+5491165747910"}
          className="whatsapp-nav-link flex items-center w-7 h-7"
        >
          <WhatsappIcon />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default StickyWhatsappLink