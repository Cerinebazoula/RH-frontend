import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import Profiles from "../components/Profiles";
import EditButton from "../components/EditButton";
import PopUpModel from "../components/PopUpModel";
import DetailedProfile from "../components/DetailedProfile";
import defaultProfilePic from "../assets/images/members_icons/default_profile_picture.svg";
import profiles from "../data/Profiles.json";
import Notifications from "../components/Notifications";

export default function Members() {
  const [user, setUser] = useState(null);
  const [profileClicked, setProfileClicked] = useState(0);
  const [showAddProfileModel, setShowAddProfileModel] = useState(false);
  const [showEditProfileModel, setShowEditProfileModel] = useState(false);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleClickProfileEvent = (index) => {
    setUser(profiles[index - 1]);
    profileClicked === index ? setProfileClicked(0) : setProfileClicked(index);
  };

  const handleSearchEvent = (searchWord) => {
    setIsSearching(Boolean(searchWord));
    const filterResult = profiles.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredProfiles(filterResult);
  };

  return (
    <>
      <div className="ml-5">
        <Notifications color="black" />
        <h1 className="font-bold text-2xl mb-1">Club members</h1>
        <p className="text-base font-normal leading-relaxed text-gray-600 row-start-2">
          You can add , delete or modify any of the members
        </p>
        <div className="flex justify-between items-center w-full mt-8">
          <div className="flex gap-6 w-fit h-fit">
            <AddButton
              target="member"
              onClick={() => setShowAddProfileModel(!showAddProfileModel)}
            />
            {Boolean(profileClicked) && (
              <EditButton
                target="member"
                onClick={() => setShowEditProfileModel(!showEditProfileModel)}
              />
            )}
          </div>
          <SearchBar
            placeholder="search a member"
            onSearch={handleSearchEvent}
          />
        </div>
      </div>

      <div className="h-full w-full flex mt-4 pb-48">
        <Profiles
          profiles={isSearching ? filteredProfiles : profiles}
          onClick={handleClickProfileEvent}
        />
        {Boolean(profileClicked) && (
          <DetailedProfile
            profilePicture={defaultProfilePic}
            name={user.name}
            departement={user.departement}
            role={user.role}
            mail={user.mail}
            joined={user.joined}
            phoneNumber={user.phoneNumber}
            discordId={user.discordId}
            rank={user.rank}
          />
        )}
      </div>
      <PopUpModel
        visible={showAddProfileModel}
        onClose={() => {
          setShowAddProfileModel(false);
        }}
        action="Add"
        target="member"
      />
      <PopUpModel
        visible={showEditProfileModel}
        onClose={() => {
          setShowEditProfileModel(false);
        }}
        action="Edit"
        target="member"
      />
    </>
  );
}
