import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

import "./App.css";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  //validate and keep the user loggedIn
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            profilePic: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, [dispatch]);
  return (
    <div className="">
      {/* <h1>Helolo world</h1> */}
      <Routes>
        {!user ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
