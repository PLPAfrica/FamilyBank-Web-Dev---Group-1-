import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
// import DeletePost from "./DeletePost";

function Post({ displayName, image, timestamp, message, id, uid }) {
  const user = useSelector(selectUser);
  return (
    <div className="bg-white border border-gray-300 py-3 px-3 mt-3 mb-3 rounded-md">
      <div className="flex items-center justify-between border-b-2 pb-2">
        {/* <Avatar src={profilePic} className="post_avatar" /> */}
        <div className="flex items-center space-x-3 ">
          <div className="text-center items-center pt-3  bg-green-600 text-white rounded-full w-12 h-12">
            {user?.displayName[0]}
          </div>
          <div className="">
            <h3>{displayName}</h3>
            <p className="text-xs text-gray-500">
              {new Date(timestamp?.toDate()).toUTCString()}
            </p>
          </div>
        </div>

        {/* {user && user.uid === uid && <DeletePost id={id} />} */}
      </div>

      <div className="mt-3">
        <p>{message}</p>
      </div>

      <div className="mt-5">
        <img className="w-full h-56 " src={image} alt="" />
      </div>

      <div className=" mt-3 flex justify-between items-center w-full">
        <div className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-green-600 py-1 px-2">
          <p>Like</p>
        </div>
        <div className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-green-600 py-1 px-2">
          <p>Comment</p>
        </div>
        <div className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-green-600 py-1 px-2">
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
