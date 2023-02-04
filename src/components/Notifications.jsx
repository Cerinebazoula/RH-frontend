import React, { useState } from "react";

import Scrollbar from "./Scrollbar";
import { ReactComponent as BellIcon } from "../assets/images/bell.svg";
import Notification from "./Notification";

const NotificationList = [
  {
    text: "You earned a new badge !",
    time: "5h ago",
    isRead: false,
  },
  {
    text: "you got new tasks , it's time to work.",
    time: "Yesterday",
    isRead: false,
  },
  {
    text: "50 points added to your score",
    time: "Last week",
    isRead: true,
  },
  {
    text: "50 points added to your score",
    time: "Last week",
    isRead: true,
  },
];

export default function Notifications({ color }) {
  const [isHidden, setIsHidden] = useState(false);
  const [unreadCounter, setUnreadCounter] = useState(1);

  const readAll = () => {
    NotificationList.forEach((notification) => {
      notification.isRead = true;
    });

    setUnreadCounter(0);
  };

  return (
    <div>
      <div className="flex justify-end gap-6 items-center">
        <div className="flex justify-between gap-4 items-center">
          <div className="w-8 h-8 rounded-full bg-white"></div>
          <div className="w-8 h-8 rounded-full bg-white"></div>
          <div className="w-8 h-8 rounded-full bg-white"></div>
        </div>

        <div className="relative">
          <BellIcon
            stroke={color}
            fill={color}
            className="cursor-pointer"
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />
          <div
            className={`${
              unreadCounter === 0 && "hidden"
            } absolute h-2 w-2 rounded-full bg-red-500 top-[4px] right-[3px] animate-pulse`}
          ></div>
        </div>
      </div>

      {/* POPUP */}
      {isHidden && (
        <div className="absolute right-0 p-8 m-2 bg-white rounded-xl shadow-xl z-10">
          <div className="flex gap-20">
            <h1 className="font-bold text-[#001524]">Notifications</h1>
            <button className="text-[#078BE9]" onClick={() => readAll()}>
              Mark all as read
            </button>
          </div>

          <div className="w-full h-80 mt-8">
            <Scrollbar>
              {NotificationList.map((item, i) => (
                <Notification
                  text={item.text}
                  time={item.time}
                  isRead={item.isRead}
                  key={i}
                />
              ))}
            </Scrollbar>
          </div>
        </div>
      )}
    </div>
  );
}
