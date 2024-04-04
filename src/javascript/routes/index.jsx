import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home.jsx";
import NewExercises from "../NewExercise.jsx"; // Import the NewExercise component

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<NewExercises />} /> {/* Add this route for NewExercise */}
    </Routes>
  </Router>
);
