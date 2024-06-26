import Link from "next/link";
import { PreRegForm } from "./pre-register-form";
import { Course } from "../app/page";

type CourseCardProps = {
  course: Course;
  isEven: boolean;
};

export default function CourseCard({ course, isEven }: CourseCardProps) {
  const { status, title, thumbnail, links, description } = course;
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32  ${isEven && "bg-muted"}`}
    >
      <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div
            className={`${status === "Upcoming" ? "bg-blue-600" : status === "OnGoing" ? "bg-yellow-500" : "bg-green-600"} inline-block rounded-lg px-3 py-1 text-primary-foreground`}
          >
            {status}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            {links[0].name === "Pre Register" ? (
              <PreRegForm />
            ) : (
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                {links[0].name}
              </Link>
            )}
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              {links[1].name}
            </Link>
          </div>
        </div>
        <img
          src={thumbnail}
          width="550"
          height="310"
          alt="Web Dev Cohort 3.0"
          className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full ${
            isEven ? "lg:order-1" : "lg:order-[-1]"
          }`}
        />
      </div>
    </section>
  );
}
