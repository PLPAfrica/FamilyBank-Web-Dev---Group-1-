import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const navigate = useNavigate();
  const signOutOfApp = () => {
    dispatch(logout);
    auth.signOut();
    window.location.reload(false);

    if (user) {
      auth.signOut();
    }
    navigate("/");
  };

  return (
    <div className="shadow-md min-h-15 py-3 mx-auto  bg-white">
      <div className="flex mx-auto justify-between items-center ml-4 mr-4">
        <h1 className="font-bold text-2xl font-mono cursor-pointer hover:text-green-600">
          Home
        </h1>
        <input
          className="hidden md:block rounded-full w-4/6 border outline-2 px-5 py-2 focus:outline-green-600"
          type="text"
          placeholder="Search Post"
        />
        <div>
          <button
            onClick={signOutOfApp}
            className="bg-green-600 py-2 px-5 text-sm text-white rounded-full hover:bg-green-500"
          >
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
