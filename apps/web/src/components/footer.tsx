import Link from "next/link";
import Image from "next/image";
import playstore from "/public/playstore.png";
import Logo from "./logo";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bottom-0 w-full bg-neutral-900 p-4 px-6 dark:bg-slate-900 lg:px-36 print:hidden">
      <div className="mx-auto mt-4 flex w-full flex-row items-start justify-between md:max-w-screen-2xl">
        <div className="flex w-3/5 flex-col md:flex-row md:justify-between">
          <div className="flex">
            <Logo onFooter={true} />
          </div>
          <div className="my-8 flex flex-col justify-center md:my-0">
            <h3 className="mb-4 font-semibold text-neutral-100">Quick Links</h3>
            <Link
              href={"/tnc"}
              className="text-neutral-200 hover:text-blue-500"
            >
              Terms & Conditions
            </Link>
            <Link
              href={"/privacy-policy"}
              className="text-neutral-200 hover:text-blue-500"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/refund"}
              className="text-neutral-200 hover:text-blue-500"
            >
              Refund & Cancellation
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.hundredx.devs"
            }
            target="_blank"
            className="mb-4 font-semibold text-neutral-200 hover:text-blue-500"
          >
            Download App
            <Image
              className="mt-2 shadow-md"
              src={playstore}
              alt={"playstore"}
              height={50}
              width={150}
            />
          </Link>
          <div>
            <h4 className="mb-2 font-semibold text-neutral-200">Follow us</h4>
            <div className="flex gap-x-2">
              <Link target="_blank" href={"https://twitter.com/kirat_tw"}>
                <IconBrandTwitter className="text-white hover:text-blue-500 size-8" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/kirat_ins/"}
              >
                <IconBrandInstagram className="text-white hover:text-blue-500 size-8" />
              </Link>
              <Link target="_blank" href={"https://www.youtube.com/@harkirat1"}>
                <IconBrandYoutube className="text-white hover:text-blue-500 size-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
