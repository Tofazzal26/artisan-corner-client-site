import { BiLogoFacebook } from "react-icons/bi";
import { PiTwitterLogoLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import logo from "../../../public/logo/logo.png";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">
            {" "}
            <button className="link link-hover">Home</button>
          </NavLink>
          <NavLink to="/allArtCraftItems">
            <button className="link link-hover">All Art & craft Items</button>
          </NavLink>
          <NavLink to="/addCraftItems">
            {" "}
            <button className="link link-hover">Add Craft Item</button>
          </NavLink>
          <NavLink to="/myArtCraftList">
            {" "}
            <button className="link link-hover">My Art&Craft List</button>
          </NavLink>
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
