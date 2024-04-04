import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home'; // Importing Home.jsx from the same directory
import NewExercise from '../NewExercise'; // Importing NewExercise.jsx from the same directory


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/exercises" element={<NewExercise />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default AppRoutes;
