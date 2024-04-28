import { NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const { displayName, email, photoURL } = user || {};
  const [showEmail, setShowEmail] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-[#eea12c]" : "text-white"
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to={"/allArtCraftItems"}
        className={({ isActive }) =>
          isActive ? "text-[#eea12c]" : "text-white"
        }
      >
        <li>All Art & craft Items</li>
      </NavLink>
      <NavLink
        to={"/addCraftItems"}
        className={({ isActive }) =>
          isActive ? "text-[#eea12c]" : "text-white"
        }
      >
        <li>Add Craft Item</li>
      </NavLink>
      <NavLink
        to={`/myArtCraftList`}
        className={({ isActive }) =>
          isActive ? "text-[#eea12c]" : "text-white"
        }
      >
        <li>My Art&Craft List</li>
      </NavLink>
      <NavLink
        to={`/about`}
        className={({ isActive }) =>
          isActive ? "text-[#eea12c]" : "text-white"
        }
      >
        <li>About Us</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="bg-[#191919]">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            <NavLink to="/">
              <button className="btn btn-ghost text-white text-2xl">
                <img className="h-6" src={logo} alt="" /> Artisan Corner
              </button>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-6 text-white text-[18px] font-semibold px-1">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end gap-2">
            {user ? (
              <>
                <div>
                  <div
                    onMouseLeave={() => setShowEmail(false)}
                    onMouseEnter={() => setShowEmail(true)}
                    className="avatar relative"
                  >
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={photoURL} />
                    </div>
                  </div>
                  <div className={`${showEmail ? "flex" : "hidden"}`}>
                    <div className="bg-[#eea12c] lg:w-[250px] rounded-md text-white absolute z-10 right-[410px] top-[60px]">
                      <div className="p-4 font-semibold">
                        <h1>{displayName || "Not found"}</h1>
                        <h1>{email || "Not Found"}</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleLogOut}
                  className="text-xl font-semibold bg-[#eea12c] text-white px-4 py-2 rounded-md"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
