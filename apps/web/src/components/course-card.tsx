import * as React from "react"
import Image from "next/image";
import { ContainerScroll } from "./container-scroll";
import { HoverBorderGradient } from "./hover-border-gradient";
import { AceternityLogo } from "./macbook-scroll";
import Link from "next/link";

export function CourseCard({ course }: { course: any }) {
  return (
    <div className="flex flex-col scale-90 relative">
      <ContainerScroll
        titleComponent={
          <div className="max-w-7xl  mx-auto relative z-10  w-full pt-[20rem] md:pt-[20rem] scale-90">
            <span className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
              {course.title}
            </span>
          </div>
        }
      >
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={1270}
          height={0}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        <div
          className="w-full inset-0 rounded-2xl flex justify-evenly mt-5 h-full">
          {
            course.links.map((link: any) => {
              return (
                <Link href={link.url}>
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                    <AceternityLogo />
                    <span>{link.name}</span>
                  </HoverBorderGradient>
                </Link>
              )
            })
          }
        </div>
      </ContainerScroll >
    </div >
  )
}

