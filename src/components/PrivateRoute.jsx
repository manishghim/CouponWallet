import React from "react";
import { getFromLocalStorage } from "../utils/util";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = getFromLocalStorage("isLoggedIn");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
