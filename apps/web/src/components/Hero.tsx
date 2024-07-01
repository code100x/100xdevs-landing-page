"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/hero";

const Hero = () => {
  const router = useRouter();
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-gradient-to-r from-slate-950 to-gray-850"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings=""
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[5.25rem]">
          <h1 className="h1 mb-6">
            <span className="text-blue-600">100xdevs</span> {` `}
            <span className="inline-block relative">
              because 10x ain't enough!{" "}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            A Beginner-Friendly Platform for Mastering Programming Skills and
            Unleashing Your Inner Developer Genius! Start Learning Today and
            Transform into a Tech Pro Tomorrow!
          </p>
        </div>
        <div className="flex justify-center mb-[5rem]">
          <Button
            className="hover:text-blue-600"
            onClick={() =>
              router.push("https://harkirat.classx.co.in/new-courses")
            }
            white
          >
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-slate-850">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[50/35] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/390] lg:aspect-[1080/610]">
                <iframe
                  src="https://appxcontent.kaxa.in/uploadvideo2/2024-06-26/harkirat_db/2024-06-26-0.31178257236835916.mp4"
                  className=" w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
            <BackgroundCircles />
          <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
          <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
