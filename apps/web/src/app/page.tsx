import { CourseCard } from "../components/course-card";
import { PreRegForm } from "../components/pre-register-form";

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
    <div className="bg-white relative flex flex-col items-center justify-center mt-6">
      <section className="w-full p-8 flex flex-col justify-center items-center dark:bg-gray-800">
        <video width="1250" height="240" controls preload="none" className="rounded-2xl bg-black p-1 mt-[1rem] m-4 drop-shadow-xl mt-10" autoPlay muted>
          <source src="test.mp4" type="video/mp4" />
          <track
            src={`https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg`}
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <h2 className="w-fit bg-transparent cursor-pointer scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0">
          The Most Awaited Cohort!
        </h2>
      </section>

      <section className="w-full p-8 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div className="grid grid-cols-2 w-screen mt-[3rem]">
          <h1 className="text-[3rem] text-black font-bold dark:text-white col-span-2 text-center">Upcoming Cohorts</h1>
          <div className="flex w-screen justify-evenly py-8 px-4">
            {courses.map(course => course.status === "Upcoming" ? (<CourseCard course={course} />) : null)}
          </div>
        </div>
      </section>
      <section className="w-full p-8 flex flex-col justify-center items-center dark:bg-gray-800">
        <h1 className="text-[3rem] text-black font-bold dark:text-white col-span-2 text-center">Available Cohorts</h1>
        <div className="flex w-screen justify-evenly py-8">
          {courses.map(course => course.status !== "Upcoming" ? (<CourseCard course={course} />) : null)}
        </div>
      </section>
    </div>
  );
}
