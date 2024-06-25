import { CourseCard } from "../components/course-card";
import { MacbookScroll } from "../components/macbook-scroll";
import { PreRegForm } from "../components/pre-register-form";

import { Spotlight } from "../components/spotlight";

export default function Page(): JSX.Element {
  const courses = [{
    title: "Advanced Web3 Cohort",
    status: "Upcoming",
    thumbnail: "https://appx-wsb-gcp.akamai.net.in/paid_course3/2023-11-10-0.3523174787735883.jpeg",
    links: [{
      name: "Pre Register",
      url: "#"
    }, {
      name: "View Syllabus",
      url: "#"
    }]
  }, {
    title: "100xDevs Cohort 3",
    status: "Upcoming",
    thumbnail: "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
    links: [{
      name: "Pre Register",
      url: "#"
    }, {
      name: "View Syllabus",
      url: "#"
    }]
  },
  {
    title: "Full Stack Cohort",
    status: "Completed",
    thumbnail: "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
    links: [{
      name: "Purchase",
      url: "https://harkirat.classx.co.in/new-courses/2-live-full-stack-open-source-cohort-1-finished"
    }, {
      name: "View Syllabus",
      url: "https://harkirat.classx.co.in/new-courses/2-live-full-stack-open-source-cohort-1-finished"
    }
    ]
  },
  {
    title: "100xDevs Cohort 0-100",
    status: "OnGoing",
    thumbnail: "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
    links: [{
      name: "Purchase Now",
      url: "https://harkirat.classx.co.in/new-courses"
    }, {
      name: "View Syllabus",
      url: "https://harkirat.classx.co.in/new-courses"
    }
    ]
  }
  ]
  return (
    <div>
      <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
          <Spotlight
            className="top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-[20rem] md:pt-[20rem] scale-90">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
              100xDevs<br /> because 10x ain't enough!
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              A Beginner-Friendly Platform for Mastering Programming Skills and Unleashing Your Inner Developer Genius! Start Learning Today and Transform into a Tech Pro Tomorrow!
            </p>
          </div>
        </div>
        <div className="scale-125">
          <MacbookScroll
            title={
              <div></div>}
            src={`https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg`}
            showGradient={false}
          />
        </div>
        <div className="grid grid-cols-2 w-screen mt-[30rem]">
          <h1 className="text-[4rem] font-semibold text-black dark:text-white col-span-2 text-center">The Most Awaited Cohort!</h1>
          {courses.map(course => course.status === "Upcoming" ? (<CourseCard course={course} />) : null)}
        </div>
        <div className="grid grid-cols-2 w-screen mt-0">
          <PreRegForm />
          <div className="grid grid-cols-2 w-screen">
            {courses.map(course => course.status !== "Upcoming" ? (<CourseCard course={course} />) : null)}
          </div>
        </div>
      </div>
    </div >
  );
}
