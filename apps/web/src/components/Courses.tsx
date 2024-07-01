"use client";
import Button from "./Button";
import CourseCard from "./CourseCard";
import Section from "./Section";
import { useRouter } from "next/navigation";
import { PreRegForm } from "./pre-register-form";

const courses = [
  {
    imageUrl:
      "https://appx-wsb-gcp.akamai.net.in/paid_course3/2023-11-10-0.3523174787735883.jpeg",
    title: "Cohort 1: Full Stack Development",
    link: "https://harkirat.classx.co.in/new-courses/2-live-full-stack-open-source-cohort-1-finished",
  },
  {
    imageUrl:
      "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
    title: "Cohort 2: Full Stack Development",
    link: "https://harkirat.classx.co.in/new-courses/8-live-0-100-complete",
  },
];
const Newcourse = [
  {
    imageUrl: "https://100xdevs.com/web-cohort-3.jpg",
    title: "Cohort 3: Web Development",
  },
  {
    imageUrl: "https://100xdevs.com/web3-cohort-1.png",
    title: "Web3 Cohort",
  },
];
export default function Courses() {
  const router = useRouter();
  return (
    <>
      <Section crosses className=" bg-gradient-to-r from-slate-950 to-gray-850">
        <h1 className="text-center text-4xl font-bold p-10">New Courses</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {Newcourse.map((course, index) => (
            <CourseCard
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              ButtonComponent={(props) => <PreRegForm></PreRegForm>}
            />
          ))}
        </div>
      </Section>

      <Section crosses className=" bg-gradient-to-r from-slate-950 to-gray-850">
        <h1 className="text-center text-4xl font-bold p-10">
          Existing Courses
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              ButtonComponent={(props) => <Button white>Explore</Button>}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
