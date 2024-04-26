import { NavLink, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const notFound = useRouteError();
  return (
    <div>
      {notFound.status === 404 && (
        <div className="flex justify-center items-center text-center">
          <div className="space-y-4">
            <h1 className="font-bold text-[260px] bg-gradient-to-r from-yellow-500  via-orange-500 to-red-400 inline-block text-transparent bg-clip-text">
              404
            </h1>
            <h2 className="font-bold text-[40px] text-[#564b47] ">
              OPPS! PAGE NOT FOUND
            </h2>
            <p className="text-[30px] font-semibold">
              Sorry the page looking for does'nt exist. If you think something
              is broken report a problem
            </p>
            <div>
              <NavLink to="/">
                <button className="bg-[#eea12c] text-white px-8 py-4 text-2xl rounded-md font-bold">
                  Return Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
