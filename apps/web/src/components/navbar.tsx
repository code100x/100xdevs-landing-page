import { Button } from '@repo/ui/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    < nav className="fixed top-0 z-50 flex h-12 w-full items-center gap-2 border-b shadow-sm bg-white dark:bg-gray-900 py-8" >
      < div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl" >
        <h2 className='font-bold text-xl text-white ml-3 my-2'>100xDevs</h2>
        <div className="flex items-center justify-between scale-50 gap-4">
          <Button className="hover:bg-transparent dark:border-white w-fit h-fit cursor-pointer scroll-m-20 pb-2 text-3xl font-semibold tracking-tight border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] px-4 py-2 hover:shadow transition duration-200 bg-transparent flex-shrink-0 bg-blue-500">
            <Link
              href={'https://github.com/code100x'}
            >
              <p className="dark:text-white text-black">Open Source</p>{' '}
            </Link>
          </Button>
          <Button className="hover:bg-transparent dark:border-white w-fit h-fit cursor-pointer scroll-m-20 pb-2 text-3xl font-semibold tracking-tight border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] px-4 py-2 hover:shadow transition duration-200 bg-transparent flex-shrink-0 bg-blue-500">
            <Link
              href={'https://www.youtube.com/@harkirat1'}
            >
              <p className="dark:text-white text-black">Youtube</p>{' '}
            </Link>
          </Button>
        </div>
      </div>
    </nav >
  )
}
