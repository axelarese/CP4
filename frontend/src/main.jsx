import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";

import Home from "./finalPage/home/Home";
import Login from "./pages/login/Login";
import NewService from "./finalPage/home/NewService";
import Service from "./finalPage/home/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/add",
    element: <NewService />,
  },
  {
    path: "/service",
    element: <Service />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
