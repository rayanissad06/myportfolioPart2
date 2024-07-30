import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const user = useSelector((state) => state.auth.user);

  return user ? element : <Navigate to="/signup" />;
};

export default PrivateRoute;
