import { IoIosCreate } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { useContext } from "react";
import { DataContext } from "../Strore/DataProvidingStore";
const DownBar = () => {
  const { handleOnOpen } = useContext(DataContext);
  return (
    <div className="fixed bottom-0 dark:text-white  backdrop-blur-md bg-white/1 border w-[100%] h-15 border-white/10 shadow-xl flex space-x-15 justify-evenly">
      <span className="text-4xl mt-3 ">
        <IoHomeOutline />
      </span>
      <span className="text-4xl mt-3 ">
        <FaRegMessage />
      </span>
      <button className="text-[45px] mb-2" onClick={() => handleOnOpen()}>
        <IoIosCreate />
      </button>
    </div>
  );
};
export default DownBar;
