import Footer from "../components/footer";
import Header from "../components/header";
import CourseCard from "../components/course-card";

export type Course = {
  title: string;
  description: string;
  status: string;
  thumbnail: string;
  links: {
    name: string;
    url: string;
  }[];
};

export default function Page(): JSX.Element {
  const courses: Course[] = [
    {
      title: "Advanced Web3 Cohort",
      description:
        "Dive into the world of Web3 and learn the latest technologies, frameworks, and best practices for building decentralized applications.",
      status: "Upcoming",
      thumbnail:
        "https://appx-wsb-gcp.akamai.net.in/paid_course3/2023-11-10-0.3523174787735883.jpeg",
      links: [
        {
          name: "Pre Register",
          url: "#",
        },
        {
          name: "View Syllabus",
          url: "#",
        },
      ],
    },
    {
      title: "100xDevs Cohort 3",
      description:
        " Join our comprehensive full-stack web development course and learn the latest technologies, frameworks, and best practices.",
      status: "Upcoming",
      thumbnail:
        "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
      links: [
        {
          name: "Pre Register",
          url: "#",
        },
        {
          name: "View Syllabus",
          url: "#",
        },
      ],
    },
    {
      title: "100xDevs Cohort 0-100",
      status: "OnGoing",
      description:
        " Our comprehensive full-stack web development course has been updated with the latest technologies and best practices.",
      thumbnail:
        "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
      links: [
        {
          name: "Purchase Now",
          url: "https://harkirat.classx.co.in/new-courses",
        },
        {
          name: "View Syllabus",
          url: "https://harkirat.classx.co.in/new-courses",
        },
      ],
    },
    {
      title: "Full Stack Cohort",
      description:
        "Our flagship full-stack web development course has helped thousands of students launch their careers in tech.",
      status: "Completed",
      thumbnail:
        "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
      links: [
        {
          name: "Purchase",
          url: "https://harkirat.classx.co.in/new-courses/2-live-full-stack-open-source-cohort-1-finished",
        },
        {
          name: "View Syllabus",
          url: "https://harkirat.classx.co.in/new-courses/2-live-full-stack-open-source-cohort-1-finished",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="grid grid-cols-1 gap-6 py-12 md:py-24 lg:py-32">
          <video
            width="850"
            height="240"
            controls
            preload="none"
            className="rounded-2xl bg-black p-1 mt-[1rem] m-4 drop-shadow-xl mx-auto"
            autoPlay
            muted
          >
            <source src="test.mp4" type="video/mp4" />
            <track
              src={`https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg`}
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <span className="font-bold text-blue-500 text-4xl lg:text-5xl xl:text-6xl">
                100xdevs
              </span>{" "}
              <br /> because 10x ain't enough!
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              A Beginner-Friendly Platform for Mastering Programming Skills and
              Unleashing Your Inner Developer Genius! Start Learning Today and
              Transform into a Tech Pro Tomorrow!
            </p>
          </div>
        </section>
        {courses.map((course, index) => (
          <CourseCard
            key={course.title}
            course={course}
            isEven={index % 2 === 0}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
