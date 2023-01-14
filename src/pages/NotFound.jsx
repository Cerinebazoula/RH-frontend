import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 w-[100vw] h-[100vh]">
      <p className="text-6xl h-36">404 - Page Not Found</p>

      <Link to="/" className="text-4xl text-[#FFB703]">
        Return to home
      </Link>
    </div>
  );
}
