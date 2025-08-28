import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>View your favourite blogs here!!!.</p>
    </div>
  );
};

export default BlogPost;
