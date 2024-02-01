import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import LoginPage from "./finalPage/LoginPage";
import NewService from "./finalPage/home/NewService";
import Service from "./finalPage/home/Service";
import UpPage from "./finalPage/UpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Service />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/add",
    element: <NewService />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/service/update/:id",
    element: <UpPage />,
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
