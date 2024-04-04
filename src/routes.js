// routes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home.jsx";
import NewExercise from "../NewExercise.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home.jsx />} />
      <Route path="/exercise" element={<NewExercise.jsx />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
