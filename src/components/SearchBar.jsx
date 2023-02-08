import React, { useState } from "react";
import searchLogo from "../assets/images/members_icons/search_logo.svg"


const SearchBar = ({ placeholder, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }
    return (
        <div className="flex justify-between border-2 w-1/3 border-gray-300 bg-white h-10 mr-24 px-5  rounded-lg text-sm focus:outline-none">
            <input
                className="tracking-wide text-gray-700 font-bold mb-2 w-full h-full outline-none"
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleSearch}
            />
            <img src={searchLogo} alt="search loop" className="w-4 h-4 self-center" />
        </div>
    );
}

export default SearchBar;
