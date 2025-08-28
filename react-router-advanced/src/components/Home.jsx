import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <Link to="/profile/details">Profile Details</Link> |{" "}
      <Link to="/profile/settings">Profile Settings</Link> |{" "}
      <Link to="/post/1">Blog Post 1</Link>
    </nav>
  </div>
);

export default Home;
