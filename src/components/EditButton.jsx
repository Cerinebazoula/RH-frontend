import React from "react";
import pen from "../assets/images/members_icons/pen.svg"

const EditButton = ({ onClick, target }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="h-fit w-fit flex justify-center items-center text-sm pb-1.5 pt-1.5 pl-5 pr-10 bg-white text-black rounded-xl border-2 transition duration-150 ease-in-out">
            <img className="mr-3 w-4 h-4" src={pen} alt="plus" />
            <span className="font-light">Edit {target}</span>
        </button>
    );
}

export default EditButton;