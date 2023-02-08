import Scrollbar from "./Scrollbar";
import SingleProfile from "./SingleProfile";
import React from "react";
import defaultProfilePic from "../assets/images/members_icons/default_profile_picture.svg"

const Profiles = ({ profiles, onClick }) => {
    return (
        <>
            <div className="w-full h-full flex">
                <Scrollbar>
                    <div className="flex flex-col justify-center items-center mt-2">
                        {
                            profiles.map(profile => {
                                return (
                                    <SingleProfile
                                        key={profile.id}
                                        profilePicture={defaultProfilePic}
                                        name={profile.name}
                                        mail={profile.mail}
                                        date={profile.date}
                                        role={profile.role}
                                        handleClickEvent={() => onClick(profile.id)}
                                    />
                                );
                            })
                        }
                    </div>
                </Scrollbar>
            </div>
        </>
    );
}

export default Profiles;