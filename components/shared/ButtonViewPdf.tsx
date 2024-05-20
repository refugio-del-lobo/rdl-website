import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type ButtonProps = {
  title: string;
  src: string;
}

const ButtonViewPdf = ({title, src}: ButtonProps) => {
  return (
    <div className="bg-[#acecb0ae] text-green-600 w-full max-w-max rounded-md hover:bg-[#71e979b5] border-green-600 border drop-shadow-md">
    <Link
      href={src}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant={"default"}
        className="p-8 md:p-6 md:text-lg font-medium flex gap-2 items-center"
      >
        <p className='text-wrap text-center'>Ver {"'"}{title}{"'"}</p>
        <span>
          <Image
            src={"/assets/icons/icon-pdf.svg"}
            width={28}
            height={28}
            alt="Image"
            className="min-w-8 md:min-w-6"
          />
        </span>
      </Button>
    </Link>
  </div>
  )
}

export default ButtonViewPdf