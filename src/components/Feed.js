import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          message={post.data.message}
          timestamp={post.data.timestamp}
          displayName={post.data.displayName}
          image={post.data.image}
          likes={post.data.likes}
          uid={post.data.uid}
        />
      ))}
    </div>
  );
}

export default Feed;
