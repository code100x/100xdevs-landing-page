import Image from "next/image";
import googleIcon from "../app/images/google.jpeg";
import xIcon from "../app/images/x.png";
import youtubeIcon from "../app/images/youtube.png";
import instaIcon from "../app/images/insta.jpeg";

export const Footer=()=>{
    return(
        <>
          <footer className="w-full bg-blue-900 text-white py-10">
        <div className="container mx-auto flex justify-between items-start px-10">
          <div className="flex items-center space-x-4">
            <Image src="/favicon.ico" alt="Icon" width={32} height={32} />
            <h1 className="text-xl font-semibold">100xDevs</h1>
          </div>
          <div>
            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Refund & Cancellation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-lg font-semibold cursor-pointer hover:text-blue-500"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.hundredx.devs",
                  "_blank"
                );
              }}
            >
              Download App
            </h4>

            <a
              href="https://play.google.com/store/apps/details?id=com.hundredx.devs"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2"
            >
              <Image
                src={googleIcon}
                alt="Google Play"
                width={150}
                height={62}
              />
            </a>
          </div>
          <div>
            <h4 className="text-lg font-semibold">
              Follow us
            </h4>
            <div className="flex space-x-4 mt-2">
              <div className="cursor-pointer">
                <a
                  href="https://x.com/kirat_tw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={xIcon} alt="X" width={32} height={32} />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  href="https://www.instagram.com/kirat_ins/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={instaIcon}
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  href="https://www.youtube.com/@harkirat1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={youtubeIcon}
                    alt="YouTube"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}