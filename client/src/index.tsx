import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./paths";
import { Created } from "./pages/created";
import Registration from "./pages/registration";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <App />,
  },
  {
    path: PATHS.created,
    element: <Created />
  },
  {
    path: PATHS.registration,
    element: <Registration />
  },
  {
    path: PATHS.login,
    element: <Login />
  }
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
