import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"; // Assuming you have a file named routes.js exporting your routes

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
});
