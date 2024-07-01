"use client";
import { useRouter } from "next/navigation";
import { FaYoutube, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6">
      <div className="container mx-auto flex text-3xl justify-between p-4 items-center">
        <div
          className="font-bold hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          100xdevs
        </div>
        <div className="flex space-x-4 hover:cursor-pointer ">
          <div
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => router.push("https://www.youtube.com/@harkirat1")}
          >
            <FaYoutube />
          </div>
          <div
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => router.push("https://github.com/code100x")}
          >
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}
