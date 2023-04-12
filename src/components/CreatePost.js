import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../utils/firebase";
import firebase from "firebase/compat/app";

const CreatePost = () => {
  const user = useSelector(selectUser);

  const [postTitle, setPostTitle] = useState("");
  const [imageURL, setimageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      uid: user.uid,
      message: postTitle,
      displayName: user?.displayName,
      image: imageURL,
      likes: [],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setPostTitle("");
    setimageURL("");
  };
  return (
    <div className="w-full mx-auto py-3 px-3 border bg-white  border-gray-300 rounded-md">
      <form className="mx-auto">
        <input
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="rounded-full w-full border outline-2 px-5 py-2 focus:outline-green-600"
          type="text"
          placeholder="Enter Post Caption"
        />
        <input
          value={imageURL}
          onChange={(e) => setimageURL(e.target.value)}
          className="rounded-full mt-6 w-full border outline-2 px-5 py-2 focus:outline-green-600"
          type="text"
          placeholder="Enter Image Url"
        />
        <button onClick={handleSubmit} className="hidden" type="submit">
          Hidden Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
