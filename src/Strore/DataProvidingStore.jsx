import { useState, useEffect, useRef } from "react";

import { createContext } from "react";
export const DataContext = createContext([]);

const DataContextProvider = ({ children }) => {
  const [openClose, SetOpenClose] = useState(false);
  const [Load, SetLoad] = useState(false);
  const [PostDataList, SetPostList] = useState([]);
  const [userDetail, SetuserDetail] = useState([]);
  useEffect(() => {
    console.log(Load);

    console.log("hello");
    fetch("https://dummyjson.com/posts?limits=5")
      .then((res) => res.json())
      .then((obj) => {
        SetPostList(obj.posts);
        console.log(obj);
      });

    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((obj) => {
        SetuserDetail(obj.results);
        console.log(obj.results);
        SetLoad(true);
        console.log(Load);
      });
  }, []);

  const handleOnDeletePost = async (index, postId) => {
    try {
      // Call API
      const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "DELETE",
      });
      const deletedPost = await res.json();
      console.log("Deleted from API:", deletedPost);

      // Update local state
      SetPostList((prev) => prev.filter((p) => p.id !== postId));
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
    let new_userDetail = userDetail.filter((_, x) => x != index % 10);
    SetuserDetail(new_userDetail);
  };

  const handleOnOpen = () => {
    console.log("open Close :-", openClose);

    if (!openClose) SetOpenClose(true);
  };
  const handleClose = () => {
    console.log("open Close :-", openClose);
    if (openClose) SetOpenClose(false);
  };

  let [toggle, SetToggle] = useState(true);
  const handleOnClick = () => {
    console.log("helloo");
    if (toggle) SetToggle(false);
    else SetToggle(true);

    document.getElementById("box").classList.toggle("dark");
  };

  // Create Post Comp//
  const titleRef = useRef();
  const contentRef = useRef();

  const handleOnClickPost = () => {
    console.log("POST SUBMITTED");
    console.log("hello .....", titleRef.current.value);
    console.log("hello .....", contentRef.current.value);
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleRef.current.value,
        body: contentRef.current.value,
        reactions: { likes: 122, dislikes: 231 },
        tags: ["post", "study", "english"],
        views: 640,
        userId: 5,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((new_post) => {
        SetPostList((PostDataList) => [new_post, ...PostDataList]),
          SetOpenClose(false),
          (titleRef.current.value = ""),
          (contentRef.current.value = "");
      })
      .catch((err) => {
        console.error("Failed to post:", err);
      });

    // For profile option
  };
  const [profileView, SetProfileView] = useState(false);

  return (
    <DataContext.Provider
      value={{
        toggle,
        handleOnClick,
        openClose,
        handleOnOpen,
        handleClose,
        PostDataList,
        Load,
        userDetail,
        contentRef,
        titleRef,
        handleOnClickPost,
        profileView,
        SetProfileView,
        handleOnDeletePost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
