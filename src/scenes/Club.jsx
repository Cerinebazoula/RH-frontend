import React, { useState } from "react";

import Agenda from "../pages/Agenda";
import Events from "../pages/Events";
import Projects from "../pages/Projects";
import EventsImages from "../pages/EventsImages";
import CurrentEvent from "../pages/CurrentEvent";
import CurrentProject from "../pages/CurrentProject";
import LinkButton from "../components/LinkButton";
import VerticleSeparator from "../components/VerticleSeparator";

function Club() {
  const [currentPage, setCurrentPage] = useState("Agenda");

  return (
    <div>
      <div className="w-full h-2 bg-[#FFB703]"></div>

      <div className="flex w-screen h-full">
        <div className="flex flex-col items-center mt-[10%] p-2 gap-8">
          <LinkButton
            text="Agenda"
            isSelected={currentPage === "Agenda"}
            onClick={() => {
              setCurrentPage("Agenda");
            }}
          />
          <LinkButton
            text="Events List"
            isSelected={currentPage === "Events"}
            onClick={() => {
              setCurrentPage("Events");
            }}
          />
          <LinkButton
            text="Projects List"
            isSelected={currentPage === "Projects"}
            onClick={() => {
              setCurrentPage("Projects");
            }}
          />
          <LinkButton
            text="Events Images"
            isSelected={currentPage === "EventsImages"}
            onClick={() => {
              setCurrentPage("EventsImages");
            }}
          />
          <LinkButton
            text="Current Event"
            isSelected={currentPage === "CurrentEvent"}
            onClick={() => {
              setCurrentPage("CurrentEvent");
            }}
          />
          <LinkButton
            text="Current Project"
            isSelected={currentPage === "CurrentProject"}
            onClick={() => {
              setCurrentPage("CurrentProject");
            }}
          />
        </div>
        <VerticleSeparator />
        <div>
          {currentPage === "Agenda" && <Agenda />}
          {currentPage === "Events" && <Events />}
          {currentPage === "Projects" && <Projects />}
          {currentPage === "EventsImages" && <EventsImages />}
          {currentPage === "CurrentEvent" && <CurrentEvent />}
          {currentPage === "CurrentProject" && <CurrentProject />}
        </div>
      </div>
    </div>
  );
}

export default Club;
