import About from "./About";
import Courses from "./Courses";
import Footer from "./Footer";
import Hero from "./Hero";
import Newcourses from "./NewCources";

export default function Landing() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Hero />
      </div>
      <div>
        <Courses />
      </div>
      <div>
        <About />
      </div>
      <Footer />
    </>
  );
}
