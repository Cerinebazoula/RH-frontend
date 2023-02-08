import React from "react";
import badge1 from "../assets/images/members_icons/badges/badge1.svg"
const DetailedProfile = (props) => {
    return (
        <div
            className="flex flex-col justify-start items-center w-1/2 h-fit pr-32  pl-4">
            <img src={props.profilePicture} alt="default" className="h-24 w-24" />
            <h1 className=" font-semibold pt-6 pb-6 text-2xl">{props.name}</h1>
            <ul className="list-none leading-8">
                <li><span className="font-semibold">Departement: </span>{props.departement}</li>
                <li><span className="font-semibold">Role: </span>{props.role}</li>
                <li><span className="font-semibold">E-mail: </span>{props.mail}</li>
                <li><span className="font-semibold">Date of joining : </span>{props.joined}</li>
                <li><span className="font-semibold">Phone number : </span>{props.phoneNumber}</li>
                <li><span className="font-semibold">Discord ID: </span>{props.discordId}</li>
                <li><span className="font-semibold">Rank in leadboard : </span>{props.rank}</li>
                <li>
                    <div className="flex items-center gap-4">
                        <span className="font-semibold ">Badges: </span>
                        <img src={badge1} alt="badge1" className="h-6 w-6" />
                        <img src={badge1} alt="badge1" className="h-6 w-6" />
                        <img src={badge1} alt="badge1" className="h-6 w-6" />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default DetailedProfile;