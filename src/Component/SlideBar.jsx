import { IoPersonOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
// import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { DataContext } from "../Strore/DataProvidingStore";
import { useContext, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const SlideBar = () => {
  const { toggle, handleOnOpen } = useContext(DataContext);
  return (
    <div className="w-[100%] mt-10  flex  space-x-5 justify-center space-y-6  font-bold  flex-col  ">
      <span className="flex justify-evenly ">
        <span className="text-3xl  dark:text-white   ">
          {toggle ? <IoMdHome /> : <IoHomeOutline />}
        </span>
        <span className="text-2xl dark:text-white">Home</span>
      </span>

      <span className="flex justify-evenly">
        <span className="text-3xl dark:border-red-700 dark:text-white ">
          {toggle ? <IoNotifications /> : <IoMdNotificationsOutline />}
        </span>
        <span className="text-2xl dark:text-white">Notification</span>
      </span>

      <span className="flex justify-evenly">
        <span className="text-3xl dark:border-red-700 dark:text-white">
          {toggle ? <MdOutlineMessage /> : <MdOutlineMessage />}
        </span>
        <span className="text-2xl dark:text-white">Message</span>
      </span>

      <span className="flex justify-evenly">
        <span className="text-3xl dark:border-red-700 dark:text-white">
          {toggle ? <IoPerson /> : <IoPersonOutline />}
        </span>
        <span className="text-2xl dark:text-white">Profile</span>
      </span>

      <span className="flex justify-evenly">
        <span className="text-3xl dark:border-red-700 dark:text-white">
          {toggle ? <CiCircleMore /> : <CiCircleMore />}
        </span>
        <span className="text-2xl dark:text-white">More</span>
      </span>

      <button
        className="dark:border-gray-500   bg-blue-500 border-2 border-blue-600 hover:w-50.5 hover:h-11.5 dark:bg-white rounded-3xl w-50 ml-6 h-11"
        onClick={() => handleOnOpen()}
      >
        Post
      </button>
    </div>
  );
};
export default SlideBar;
