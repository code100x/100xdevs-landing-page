import { Button } from '@repo/ui/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-12 w-full items-center gap-2 border-b shadow-sm bg-white dark:bg-gray-900 py-8">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <div className="flex items-center ml-4">
          <Image src="/favicon.ico" alt="Icon" width={32} height={32} />
          <h2 className='font-bold text-xl text-black ml-3 my-2 dark:text-white'>100xDevs</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button className="hover:bg-transparent dark:border-white w-fit h-fit cursor-pointer scroll-m-20 pb-1 text-base font-semibold tracking-tight border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] px-2 py-1 hover:shadow transition duration-200 bg-blue-500">
            <Link href={'https://github.com/code100x'} target="_blank" rel="noopener noreferrer">
              <p className="dark:text-white text-black">Open Source</p>
            </Link>
          </Button>
          <Button className="hover:bg-transparent dark:border-white w-fit h-fit cursor-pointer scroll-m-20 pb-1 text-base font-semibold tracking-tight border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] px-2 py-1 hover:shadow transition duration-200 bg-blue-500 mr-6">
            <Link href={'https://www.youtube.com/@harkirat1'} target="_blank" rel="noopener noreferrer">
              <p className="dark:text-white text-black">YouTube</p>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
