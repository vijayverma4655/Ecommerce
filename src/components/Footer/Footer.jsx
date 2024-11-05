import React from "react";
import Banner from "../../assets/Banner/Banner.jpg";
import Logo1 from "../../assets/Banner/Logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    limk: "/#",
  },
  {
    title: "About",
    limk: "/#about",
  },
  {
    title: "Contact",
    limk: "/#contact",
  },
  {
    title: "Blog",
    limk: "/#blog",
  },
];
function Footer() {
  return (
    <div style={BannerImg} data-aos="zoom-in" className="text-white " id="footer">
      <div className="container ">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-37 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justifymb-3 flex items-center gap-3">
              <img src={Logo1} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, reprehenderit! Quos{" "}
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}

            <div>
              <div className="flex items-center gap-3 mt-6 ">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Lalgarh Sri Ganganagar</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 9571425420</p>
                </div>
              </div>
              <div className=" flex justify-center items-center mt-8">
                <span className="text-gray-300 mx-2">@2024</span>{" "}
                <p>CodeWithVijayBaghela</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
