import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PrivateRoutes() {
  // TODO: implement auth logic
  let auth = true;

  return auth ? (
    <div className="flex h-screen w-screen">
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
