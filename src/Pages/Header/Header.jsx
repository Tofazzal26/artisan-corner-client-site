import { NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo.png";
const Header = () => {
  const navLinks = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/"}>
        <li>All Art & craft Items</li>
      </NavLink>
      <NavLink to={"/"}>
        <li>Add Craft Item</li>
      </NavLink>
      <NavLink to={"/"}>
        <li>My Art&Craft List</li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-[#191919]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-2xl">
            <img className="h-6" src={logo} alt="" /> Artisan Corner
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 text-white text-[18px] font-semibold px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink to="/login">
            <button className="text-xl font-semibold bg-[#eea12c] text-white px-6 py-2 rounded-md">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="text-xl font-semibold bg-[#eea12c] text-white px-6 py-2 rounded-md">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
