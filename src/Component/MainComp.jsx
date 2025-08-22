import Loading from "./Loading";
import FeedItem from "./FeedItem";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../Strore/DataProvidingStore";

const MainComp = () => {
  const { PostDataList, Load, userDetail } = useContext(DataContext);
  return (
    <>
      {!Load ? (
        <Loading />
      ) : (
        <div className="dark:text-white mt-15 mb-20">
          {PostDataList.map((post, index) => (
            <FeedItem post={post} user={userDetail[index % 10]} index={index} />
          ))}
        </div>
      )}
    </>
  );
};
export default MainComp;
