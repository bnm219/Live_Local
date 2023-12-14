import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import App from "./layout/App.jsx";
import Root from "./layout/Root.jsx";
import EventsPerCity from "./layout/EventsPerCity.jsx";
import ProfilePage from "./layout/profilePage.jsx";
import NotFound from "./layout/notfound.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/city/:city", element: <EventsPerCity />},
      { path: "/profile", element: <ProfilePage/>},
      { path: "/login", element: <AuthForm /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
