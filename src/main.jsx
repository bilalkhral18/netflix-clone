import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import icons from "../src/assets/js/icons.js";
import "./index.css";
import App from "./App.jsx";
const link = document.querySelector("link[rel='icon']");
link.href = icons.netflix_favicon;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
