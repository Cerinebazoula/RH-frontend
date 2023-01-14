import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  // TODO: implement auth logic
  let auth = false;

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
}
