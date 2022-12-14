import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";

const PostView = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);
  return (
    <>
      <Header />
      <div className="post-container">
        {posts.map((post, i) => {
          return <Card post={post} key={i} />;
        })}
      </div>
    </>
  );
};

export default PostView;
