import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home'; // Update the import path to use relative path
import NewExercise from '../NewExercise'; // Update the import path to use relative path

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/exercises" element={<NewExercise />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default AppRoutes;
