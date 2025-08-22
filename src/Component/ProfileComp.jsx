import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../Strore/DataProvidingStore";

const ProfileComp = () => {
  const { profileView, SetProfileView } = useContext(DataContext);
  return (
    <>
      {profileView ? (
        <div
          className=" top-16 right-21 z-10 fixed rounded-[25px] bg-gray-950 text-[90%] text-gray-200 space-y-3 w-55 p-1 dark:text-[90%] dark:border-gray-800 dark:border-[1px] rounded-tr-none   "
          onMouseLeave={() => {
            if (profileView) SetProfileView(false);
            console.log("Profile view ", profileView);
          }}
        >
          <div className="flex flex-col justify-center bg-gray-800 rounded-[25px] m-2 p-10">
            <div className=" flex justify-center text-2xl">
              <span className="p-1">
                <FaUserCircle className=" mr-[4%]" />
              </span>
            </div>
            <div className=" flex justify-center font-bold text-[12px]">
              Davi Thomas
            </div>
            <div className=" flex justify-center  mb-1">
              davithomas200@gmail.com
            </div>
          </div>
          <div>
            <div className="flex m-2 justify-center">
              CSE’25 🎓 | Web Dev 💻 | Java & JS 💡 | Building & learning 🚀
            </div>
          </div>
          <hr />

          <div className="m-2">
            <span>post:</span>
            <span>Followers:</span>
            <span>Following:</span>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProfileComp;
