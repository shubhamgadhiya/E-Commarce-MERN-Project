import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const auth = useSelector((state) => state.user);

  return (auth?.isAuth === true && auth?.user?.role === "ADMIN")  ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
