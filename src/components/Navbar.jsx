import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import gdg_logo from "../assets/images/gdg_logo.svg";
import wtm_logo from "../assets/images/wtm_logo.svg";
import LinkIcon from "./LinkIcon";

function Navbar() {
  const [page, setPage] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pathname.split("/")[1] || "home");
  }, [pathname]);

  return (
    <div className="bg-[#001524] flex flex-col items-center justify-around">
      {/* Logos */}
      <div>
        <div className="w-11 h-12 mx-4 select-none">
          <img src={gdg_logo} alt="GDG Logo" />
        </div>

        <div className="w-11 h-12 mx-4 select-none">
          <img src={wtm_logo} alt="GDG Logo" />
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col">
        <button
          onClick={() => {
            navigate("/");
            setPage("home");
          }}
        >
          <LinkIcon page="home" isSelected={page === "home"} />
        </button>

        <button
          onClick={() => {
            navigate("/users");
            setPage("users");
          }}
        >
          <LinkIcon page="users" isSelected={page === "users"} />
        </button>

        <button
          onClick={() => {
            navigate("/club");
            setPage("club");
          }}
        >
          <LinkIcon page="club" isSelected={page === "club"} />
        </button>

        <button
          onClick={() => {
            navigate("/profile");
            setPage("profile");
          }}
        >
          <LinkIcon page="profile" isSelected={page === "profile"} />
        </button>
      </div>

      {/* Settings */}
      <div>
        <button
          onClick={() => {
            navigate("/settings");
            setPage("settings");
          }}
        >
          <LinkIcon page="settings" isSelected={page === "settings"} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
