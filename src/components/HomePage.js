import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { auth } from "../utils/firebase";
import CreatePost from "./CreatePost";
import Feed from "./Feed";
import Header from "./Header";

const HomePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="flex space-x-10 justify-between w-5/6 mx-auto mt-5">
        <div className="hidden h-40 bg-white rounded-md border border-1 border-gray-300 pb-5 md:flex flex-col items-center w-2/6 ">
          <img
            className=" rounded-t-md h-20 w-full"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="text"
          />
          <div className="text-center items-center pt-3 -mt-7 bg-green-600 text-white rounded-full w-12 h-12">
            {user?.displayName[0]}
          </div>
          <p className="mt-3">{user.displayName}</p>
        </div>
        <div className="mx-auto w-full">
          <CreatePost />
          <Feed />
        </div>
        <div className="hidden bg-white rounded-md border border-1 border-gray-300 pb-5 md:block py-4 px-2 w-2/6 h-80">
          <h2>Trending topics</h2>
          <div className="text-left items-center pt-3 space-y-5">
            <p className="text-sm text-gray-600">#Javascript</p>
            <p className="text-sm text-gray-600">#Java</p>
            <p className="text-sm text-gray-600">#Typescript</p>
            <p className="text-sm text-gray-600">#Python</p>
            <p className="text-sm text-gray-600">#Data Science</p>
            <p className="text-sm text-gray-600">#Machine Learning</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
