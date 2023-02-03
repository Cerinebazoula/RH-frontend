import React from "react";

export default function LinkButton({ text, isSelected, onClick }) {
  return (
    <button
      className={`${isSelected && "bg-[#D3E9ECCC]"} ${
        isSelected ? "text-[#001524]" : "text-[#676767]"
      } w-40 rounded-lg py-1 pl-4 pr-4 text-left`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
