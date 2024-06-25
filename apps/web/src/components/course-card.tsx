import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";
import { PreRegForm } from "./pre-register-form";

export function CourseCard({ course }: { course: any }) {
  return (
    <div className="flex flex-col relative mr-4 ml-7">
      <Image
        src={course.thumbnail}
        alt={course.title}
        width={720}
        height={0}
        className="mx-auto rounded-2xl object-cover h-full object-left-top drop-shadow-xl hover:scale-[102%] transition-all cursor-pointer border  border-white"
        draggable={false}
      />
      <div
        className="full inset-0 rounded-2xl flex justify-evenly mt-5 h-full items-center">
        {
          course.links.map((link: any) => {
            if (link.name === "Pre Register") {
              return (
                <PreRegForm />
              )
            }
            return (
              <Link href={link.url} className="scale-75">
                <Button className="hover:bg-transparent text-black w-fit h-fit dark:bg-transparent cursor-pointer scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0">
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

