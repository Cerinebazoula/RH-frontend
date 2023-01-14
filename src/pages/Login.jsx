import React from "react";

import LoginForm from "../components/LoginForm";
import styles from "../styles/Login.module.css";

import img_globe from "../assets/images/globe.svg";
import img_blue_square from "../assets/images/blue_square.svg";
import img_yellow_square from "../assets/images/yellow_square.svg";
import img_green_square from "../assets/images/green_square.svg";
import img_circle from "../assets/images/circle.svg";
import img_triangle from "../assets/images/triangle.svg";

export default function Login() {
  return (
    <div className="bg-[#EDF2F4] flex items-center justify-center w-[100vw] h-[100vh] relative">
      <LoginForm />

      <img src={img_globe} className="absolute right-[10%] select-none" />

      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[630px] h-[255px] -left-16 top-[46%] scale-x-[0.8] select-none"
      >
        <path
          className={styles.short}
          d="M570.6,157.8c17.8,13,35.8,25.6,53.3,38.9c3.9,3-0.2,3.3-3.2,3.1c-18.5-1.2-37.7,5-54.6,11.7"
          stroke="#001524"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={styles.short}
          d="M574.8,152.3c17.8,13,35.8,25.6,53.3,38.9c3.9,3-0.2,3.3-3.2,3.1c-18.5-1.2-37.7,5-54.6,11.7"
          stroke="#FFB703"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={styles.long}
          d="M2,3.4c0,0,24.4-1.5,81.3,20.5c48.8,21.7,73,50,95,96.8c10.2,21.8,23.2,59.2,10.2,84.8 c-10.5,20.7-31,10.6-43.5,0.5c-22.7-18.4-34.9-43.4-37.4-72.6c-1.2-14.8-1-30.8,5.3-44.3c14.4-30.9,51.3-46.7,82.2-51.1 c43.7-6.2,105.6,4.5,146,18.1c48.5,16.3,97.7,44.8,138.2,75.8c34.4,26.3,88.3,52.2,131.9,55.5"
          stroke="#FFB703"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={styles.long}
          d="M1.8,5.9c0,0,30.4-0.2,88,23.3c48.8,21.7,73,50,95,96.8c10.2,21.8,23.2,59.2,10.2,84.8 c-10.5,20.7-31,10.6-43.5,0.5c-22.7-18.4-34.9-43.4-37.4-72.6c-1.2-14.8-1-30.8,5.3-44.3c14.4-30.9,51.3-46.7,82.2-51.1 c43.7-6.2,105.6,4.5,146,18.1c48.5,16.3,97.7,44.8,138.2,75.8c34.4,26.3,88.3,52.2,131.9,55.5"
          stroke="#001524"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <img
        src={img_triangle}
        className="absolute left-0 top-8 w-36 select-none"
      />

      <img
        src={img_circle}
        className="absolute right-0 bottom-0 w-52 select-none"
      />

      <img
        src={img_green_square}
        className="absolute left-[50%] top-[55%] w-64 select-none"
      />

      <img
        src={img_yellow_square}
        className="absolute right-8 top-0 w-52 select-none"
      />

      <img
        src={img_blue_square}
        className="absolute left-0 bottom-0 w-52 select-none"
      />
    </div>
  );
}
