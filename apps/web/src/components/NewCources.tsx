import CourseCard from "./CourseCard";
import Section from "./Section";

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

export default function Newcourses() {
  return (
    <Section crosses className=" bg-gradient-to-r from-slate-950 to-gray-850">
      <h1 className="text-center text-4xl font-bold p-10">New Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {Newcourse.map((course, index) => (
          <CourseCard
            key={index}
            imageUrl={course.imageUrl}
            title={course.title}
          />
        ))}
      </div>
    </Section>
  );
}
