import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { DataContext } from "../Strore/DataProvidingStore";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdSunny } from "react-icons/md";
const Header = () => {
  const { toggle, handleOnClick, profileView, SetProfileView } =
    useContext(DataContext);

  return (
    <>
      <nav className="fixed top-0 right-0   backdrop-blur-md bg-white/1 shadow-xl  h-20  flex justify-between transition cursor-pointer pb-20 w-full md:w-[calc(100%-250px)] md:right-0 z-10">
        {toggle ? (
          <img
            className="h-23 lg:ml-10"
            src="src\assets\ChatGPT_Image_Aug_3__2025__03_16_54_PM-removebg-preview.png"
            alt=""
          />
        ) : (
          <img
            className="h-23 lg:ml-10"
            src="src\assets\ChatGPT Image Aug 2, 2025, 02_05_03 PM.png"
            alt=""
          />
        )}
        <div className="lg:w-25 mt-5 w-25 flex justify-between lg:mr-10 space-x-1">
          <button
            className=" h-10 text-2xl w-13 flex justify-center pt-2 rounded-[25px] border-2 dark:bg-blue-600 bg-black text-white border-none dark:border-none"
            onClick={() => handleOnClick()}
          >
            {!toggle ? <MdSunny /> : <MdOutlineWbSunny />}
          </button>
          <button
            onMouseEnter={() => {
              // console.log("Profile view ", profileView);
              if (!profileView) SetProfileView(true);
              console.log("Profile view ", profileView);
            }}
          >
            {toggle ? (
              <FaUserCircle className="h-10 mr-5 w-9" />
            ) : (
              <img
                src="src\assets\profileBlack-removebg-preview.png"
                className=" mb-35 h-10 mr-5"
                alt=""
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};
export default Header;
