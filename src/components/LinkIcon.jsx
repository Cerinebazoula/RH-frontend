import React from "react";

import { ReactComponent as DashboardIcon } from "../assets/images/navbar_icons/dashboard.svg";
import { ReactComponent as UsersIcon } from "../assets/images/navbar_icons/users.svg";
import { ReactComponent as StarIcon } from "../assets/images/navbar_icons/star.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/navbar_icons/settings.svg";
import ProfileImage from "../assets/images/profile_image.jpg";

function LinkIcon({ page, isSelected }) {
  switch (page) {
    case "home":
      return (
        <div
          className={`p-2 my-1 w-12 h-12 rounded-lg flex justify-center items-center ${
            isSelected && "bg-white"
          }`}
        >
          <DashboardIcon
            stroke="transparent"
            fill={isSelected ? "black" : "white"}
          />
        </div>
      );
    case "users":
      return (
        <div
          className={`p-2 my-1 w-12 h-12 rounded-lg flex justify-center items-center ${
            isSelected && "bg-white"
          }`}
        >
          <UsersIcon
            stroke={isSelected ? "black" : "white"}
            fill="transparent"
          />
        </div>
      );
    case "club":
      return (
        <div
          className={`p-2 my-1 w-12 h-12 rounded-lg flex justify-center items-center ${
            isSelected && "bg-white"
          }`}
        >
          <StarIcon
            stroke={isSelected ? "black" : "white"}
            fill={isSelected ? "black" : "white"}
          />
        </div>
      );
    case "profile":
      return (
        <img
          className="h-11 w-11 my-1 rounded-full"
          src={ProfileImage}
          alt="profile-img"
        />
      );
    case "settings":
      return (
        <div
          className={`p-2 my-1 w-12 h-12 rounded-lg flex justify-center items-center ${
            isSelected && "bg-white"
          }`}
        >
          <SettingsIcon
            stroke={isSelected ? "black" : "white"}
            fill={isSelected ? "black" : "white"}
          />
        </div>
      );
    default:
      return null;
  }
}

export default LinkIcon;
