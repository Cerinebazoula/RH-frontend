import React, { useState } from "react";

import Members from "../pages/Members";
import Leaderboard from "../pages/Leaderboard";
import ClubStructure from "../pages/ClubStructure";
import LinkButton from "../components/LinkButton";
import VerticleSeparator from "../components/VerticleSeparator";

export default function Users() {
  const [currentPage, setCurrentPage] = useState("Members");

  return (
    <div>
      <div className="w-full h-2 bg-[#FFB703]"></div>

      <div className="flex w-screen h-full">
        <div className="flex flex-col items-center mt-[10%] p-2 gap-8">
          <LinkButton
            text="Members List"
            isSelected={currentPage === "Members"}
            onClick={() => {
              setCurrentPage("Members");
            }}
          />
          <LinkButton
            text="Leaderboard"
            isSelected={currentPage === "Leaderboard"}
            onClick={() => {
              setCurrentPage("Leaderboard");
            }}
          />
          <LinkButton
            text="Club's Structure"
            isSelected={currentPage === "ClubStructure"}
            onClick={() => {
              setCurrentPage("ClubStructure");
            }}
          />
        </div>
        <VerticleSeparator />
        <div>
          {currentPage === "Members" && <Members />}
          {currentPage === "Leaderboard" && <Leaderboard />}
          {currentPage === "ClubStructure" && <ClubStructure />}
        </div>
      </div>
    </div>
  );
}
