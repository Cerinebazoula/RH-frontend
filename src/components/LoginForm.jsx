import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import gdg_logo from "../assets/images/gdg_logo.svg";
import wtm_logo from "../assets/images/wtm_logo.svg";

export default function LoginForm() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    // TODO: implement the logic of validation, errors, and routting
    const userInput = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    navigate("/", { replace: true });
  };

  return (
    <div className="bg-white z-10 rounded-xl shadow-lg p-8">
      <div className="flex justify-between gap-2 px-4 py-2">
        <div className="w-36 h-16 select-none">
          <img src={gdg_logo} alt="GDG Logo" />
        </div>

        <div className="w-28 h-16 select-none">
          <img src={wtm_logo} alt="WTM Logo" />
        </div>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor="email" className="mt-10 mb-1 tracking-wide">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@gmail.com"
          className="border-solid border-2 border-black outline-none px-4 py-3 rounded-lg"
        />

        <label htmlFor="password" className="mt-6 mb-1 tracking-wide">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="border-solid border-2 border-black outline-none px-4 py-3 rounded-lg"
        />

        <Link
          className="self-end text-[#FFB703] underline"
          to={"/forgotpassword"}
        >
          Forgot password ?
        </Link>

        <button
          type="submit"
          className="mt-12 mb-4 bg-[#FFB703] text-black font-bold text-xl tracking-wider rounded-lg px-16 py-3 w-80 select-none"
        >
          Log-In
        </button>

        <div className="flex mt-5 justify-center items-center space-x-2">
          <p>Don't have an account? </p>
          <Link className="text-[#FFB703]" to={"/signup"}>
            signup
          </Link>
        </div>
      </form>
    </div>
  );
}
