import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import icons from "../src/assets/js/icons.js";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./screens/Home/Home.jsx";
import Login from "./screens/Login/Login.jsx";
const link = document.querySelector("link[rel='icon']");
link.href = icons.netflix_favicon;
const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
