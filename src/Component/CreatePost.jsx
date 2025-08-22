import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { DataContext } from "../Strore/DataProvidingStore";

const CreatePost = () => {
  console.log("hello in create post module ");

  const { handleClose, titleRef, contentRef, handleOnClickPost } =
    useContext(DataContext);

  return (
    <>
      <div className="bg-white dark:bg-black p-5 rounded-2xl dark:border-2 dark:border-cyan-900 dark:text-white md:w-[calc(100%-40%)]  md:h-[calc(100%-35%)] border-1 border-blue-500 sm:h-[350px] sm:w-[75%] ">
        <form action="" className="space-y-5 flex flex-col justify-center">
          <div
            className="text-3xl relative right-0"
            onClick={() => handleClose()}
          >
            <RxCross2 />
          </div>
          <div className="sm:mt-6 mb-6">
            <input
              ref={titleRef}
              type="text"
              placeholder="Title"
              className="text-2xl focus:border-transparent  focus:outline-none focus:ring-0"
              require
              onKeyDown={() => console.log(titleRef.current.value)}
            />
          </div>
          <div className="flex mt-6 mb-5 justify-center flex-wrap w-[100%] h-[100%]">
            <input
              ref={contentRef}
              type="text"
              placeholder="What happening?"
              className="text-[20px] border-none focus:border-transparent focus:outline-none focus:ring-0 w-[100%] h-[100%] "
              require
            />
          </div>
          <hr className="bg-gray-700 border-0 mt-10 h-1" />
          <button
            type="submit"
            className="bg-black text-white font-semiboldbold  mt-4 w-25  dark:bg-w h-8.5 rounded-3xl dark:bg-blue-600"
            onClick={(e) => (
              e.preventDefault(),
              console.log("hello .....", titleRef),
              console.log("hello .....", contentRef),
              handleOnClickPost()
            )}
          >
            post
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePost;
