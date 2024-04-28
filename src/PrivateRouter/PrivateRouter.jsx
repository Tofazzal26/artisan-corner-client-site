import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import loadingSpinner from "../../public/logo/Loading.gif";

const PrivateRouter = ({ children }) => {
  const { user, notLoading } = useContext(AuthContext);

  const location = useLocation();

  if (notLoading) {
    return (
      <div className=" flex justify-center items-center">
        {/* <span className="loading loading-bars loading-lg"></span> */}
        <img className="h-[400px]" src={loadingSpinner} alt="" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRouter;
