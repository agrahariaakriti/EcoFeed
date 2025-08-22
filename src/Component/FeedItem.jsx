import { MdDeleteForever } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { useContext, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { DataContext } from "../Strore/DataProvidingStore";

const FeedItem = ({ post, user, index }) => {
  const { handleOnDeletePost } = useContext(DataContext);
  if (!user || !user.login) return null;
  const [initialLike, SetLike] = useState(post.reactions.likes);
  const [initialDisLike, SetDislikebtn] = useState(post.reactions.dislikes);
  const [dislike, SetDislike] = useState(false);
  const [likeBg, SetLikeBg] = useState(false);

  const handleDislike = () => {
    console.log(post.id);

    console.log(post);

    if (!dislike) {
      {
        SetDislike(true);
        SetDislikebtn(initialDisLike + 1);
        SetLikeBg(false);
        SetLike(post.reactions.likes);
      }
    } else if (dislike) {
      SetDislike(false);
      SetDislikebtn(initialDisLike - 1);
    }
  };

  const handleOnLike = () => {
    console.log(post.id);

    console.log(post);

    if (!likeBg) {
      SetLikeBg(true);
      SetLike(initialLike + 1);
      SetDislike(false);
      SetDislikebtn(post.reactions.dislikes);

      console.log(initialLike);
    } else if (likeBg) {
      SetLikeBg(false);
      SetLike(initialLike - 1);
      console.log(initialLike);
    }
  };

  return (
    <div
      key={post.id}
      className=" mt-10 dark:text-white  border-2 dark:bg-black p-4 text-[20px] container rounded-2xl dark:border-gray-700 md:w-[80%] sm:w-[100%]"
    >
      <div>
        <span>
          <img
            src={`${user.picture.thumbnail}`}
            className="rounded-3xl inline mr-5"
            alt=""
          />
        </span>
        <span className="font-sans font-bold text-md">
          {user.name.first} {user.name.last}
        </span>
        <span className="font-mono ml-2 text-gray-700 font-sm">
          @{user.name.first}
        </span>
      </div>
      <div className="text-xl font-semibold">{post.title}</div>
      <div className="mb-2">{post.body}</div>

      <div className="mb-2">
        {post.tags.map((tag) => (
          <span key={tag} className="mr-2 text-blue-500">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex border-white justify-between  gap-4 text-sm text-gray-600">
        <span
          className={`flex flex-wrap  cursor-pointer justify-center mt-1 text-[16px] md:px-4    rounded   ${
            likeBg ? "text-red-600" : "text-teal-600"
          }`}
          onClick={() => handleOnLike(index)}
        >
          <span className=" mt-1 text-[18px]">
            {likeBg ? <BiSolidLike /> : <AiOutlineLike />}
          </span>

          <span className="ml-1 text-[18px]">{initialLike}</span>
        </span>

        <span
          className={`flex  cursor-pointer justify-center mt-1 text-[16px] px-4    rounded  flex-wrap ${
            dislike ? "text-red-600" : "text-teal-600"
          }`}
          onClick={() => handleDislike(index)}
        >
          <span className=" mt-1 text-[18px]">
            {dislike ? <BiSolidDislike /> : <BiDislike />}
          </span>
          <span className="ml-1 text-[18px]">{initialDisLike}</span>
        </span>
        <span className="flex-wrap text-teal-600 text-[16px] flex justify-center mt-2">
          <span
            className="text-[25px] mt-0.5 mr-1
           "
          >
            <IoPeople />
          </span>
          <span
            className="mt-1 
          "
          >
            {post.views}
          </span>
        </span>

        <span className="text-teal-600 text-[23px] flex justify-center mt-3">
          <IoShareOutline />
        </span>

        <span
          className="text-teal-600 text-[23px] flex justify-center mt-3 mr-1 cursor-pointer"
          onClick={() => {
            handleOnDeletePost(index, post.id);
          }}
        >
          <MdDeleteForever />
        </span>
      </div>
    </div>
  );
};

export default FeedItem;
