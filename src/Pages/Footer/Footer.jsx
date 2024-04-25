import { BiLogoFacebook } from "react-icons/bi";
import { PiTwitterLogoLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import logo from "../../../public/logo/logo.png";
const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="footer footer-center p-10 bg-[#191919] text-white  rounded">
        <div>
          <img className="h-[50px]" src={logo} alt="" />
          <h2 className="font-semibold text-lg text-[#eea12c]">
            Artisan Corner
          </h2>
        </div>
        <nav className="grid grid-flow-col text-lg font-semibold gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <span>
              <BiLogoFacebook
                className="rounded-full w-[50px] p-2 h-[50px] border-2"
                size={20}
              />
            </span>
            <span>
              <PiTwitterLogoLight
                className="rounded-full w-[50px] p-2 h-[50px] border-2"
                size={20}
              />
            </span>
            <span>
              <TfiWorld
                className="rounded-full w-[50px] p-3 h-[50px] border-2"
                size={20}
              />
            </span>
            <span>
              <IoLogoInstagram
                className="rounded-full w-[50px] p-2 h-[50px] border-2"
                size={20}
              />
            </span>
          </div>
        </nav>
        <aside>
          <p className="text-lg">
            Copyright © 2024 - All right reserved by Artisan Corner
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
