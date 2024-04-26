import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, notLoading } = useContext(AuthContext);

  const location = useLocation();

  if (notLoading) {
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRouter;
