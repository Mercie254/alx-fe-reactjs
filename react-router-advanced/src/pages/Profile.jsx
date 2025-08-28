// src/pages/Profile.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <Outlet /> {/* Nested routes render here */}
  </div>
);

export default Profile;
