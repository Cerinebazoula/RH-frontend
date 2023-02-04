import React from "react";

export default function Notification({ text, time, isRead }) {
  return (
    <div className="flex gap-4 justify-start items-center py-3">
      <div
        className={`${
          isRead ? "invisible" : "visible"
        } h-2 w-2 rounded-full bg-red-500 animate-pulse`}
      ></div>

      <dir>
        <div className="text-[#001524] font-semibold">{text}</div>
        <div className="text-[#758189]">{time}</div>
      </dir>
    </div>
  );
}
