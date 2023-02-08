import React from "react";
import plus from "../assets/images/members_icons/plus.svg"

const AddButton = ({onClick , target}) => {
    return (
        <button
            type="button"
            className="h-fit w-fit flex text-sm justify-center items-center pb-2 pt-2 pl-5 pr-10 bg-[#FFB703] text-black font-medium leading-normal rounded-xl transition duration-150 ease-in-out"
            onClick={onClick}
            >
            <img className="mr-3 w-4 h-4" src={plus} alt="plus" /> <span className="font-light">Add {target}</span>
        </button>
    );
}

export default AddButton;