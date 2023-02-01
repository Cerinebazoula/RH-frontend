import React from "react";

export default function Error({ message }) {
  return (
    <div
      className={`${
        message ? "visible" : "hidden"
      } text-center font-semibold text-lg text-red-400 drop-shadow-[0_0_5px_#ff000088] select-none`}
    >
      {message}
    </div>
  );
}
