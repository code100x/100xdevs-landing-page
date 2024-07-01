import Section from "./Section";

export default function About() {
  return (
    <Section crosses className=" bg-gradient-to-r from-slate-950 to-gray-850 flex flex-col ">
      <h1 className="text-3xl text-center font-semibold ">About 100xdevs</h1>
      <div className=" m-auto p-[1.5rem] text-n-2 md:p-[4rem] md:text-xl">
        <div className="text-white">
          Welcome to <span className="text-blue-600">100xdevs,</span>
        </div>
        This is an initiative by{" "}
        <span className="text-blue-600">Harkirat Singh</span> to personally
        mentor folks in the field of Programming.
        <br /> Harkirat strongly feels that today you are either a 1x engineer
        or a 100x engineer and nothing in the middle, and his hope is to take
        everyone in this community to be a{" "}
        <span className="text-blue-600">100xEngineer</span>.<br /> Join him in
        his
        <span className=" text-blue-600">live course</span> on Full Stack
        development with a heavy focus on{" "}
        <span className="text-blue-600">Open source projects</span> to learn
        programming practically.
      </div>
    </Section>
  );
}
