import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";
import { PreRegForm } from "./pre-register-form";

export function CourseCard({ course }: { course: any }) {
  return (
    <div className="flex m-2 flex-col relative">
      <Image
        src={course.thumbnail}
        alt={course.title}
        width={720}
        height={0}
        className="mx-auto rounded-2xl object-cover h-full object-left-top drop-shadow-xl hover:scale-[102%] transition-all cursor-pointer"
        draggable={false}
      />
      <div
        className="full inset-0 rounded-2xl flex justify-center mt-5 h-full items-center">
        {
          course.links.map((link: any) => {
            if (link.name === "Pre Register") {
              return (
                <PreRegForm />
              )
            }
            return (
              <Link href={link.url} className="scale-[60%] md:scale-75">
                <Button className="hover:bg-transparent text-black dark:dark:text-gray-200 w-fit h-fit dark:bg-transparent cursor-pointer scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4 border-2 border-black dark:border-white z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] sm:px-2 px-4 py-2 dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] hover:shadow transition duration-200 bg-white flex-shrink-0">
                  <span className="text-[2rem]">{link.name}</span>
                </Button>
              </Link>
            )
          })
        }
      </div>
    </div >
  )
}

