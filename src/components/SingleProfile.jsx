import React from "react";
import corbeille from "../assets/images/members_icons/corbeille.svg"

const SingleProfile = ({ profilePicture, name, mail, date, role, handleClickEvent }) => {
    return (
        <div
            className="flex justify-between items-center w-4/5 h-fit  border-b-2 border-gray-400 p-6 hover:cursor-pointer hover:bg-[#D3E9ECCC]"
            onClick={handleClickEvent}
        >
            <img src={profilePicture} alt="profile" className="w-12 h-12" />
            <div className="flex flex-col">
                <span>{name}</span>
                <span className="text-[#9ca3af] font-light text-sm">{mail}</span>
            </div>
            <span className="text-[#9ca3af] font-medium">{date}</span>
            <div className="w-24 h-8 pl-2 border-2 rounded-lg text-[#9ca3af] font-medium">{role}</div>
            <img src={corbeille} alt="trash" />
        </div>
    );
}


export default SingleProfile;