import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { Users } from "./Users";
import Pets from "./Pets";
import UserLogin from "./UserLogin";
import UserCreate from "./UserCreate";
import Form from "./Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserCreate/>,
  },
  {
    path: "/login",
    element: <UserLogin/>,
  },
  {
    path: "/users",
    element: <div>Hello</div>,
  },
  {
    path:"/Pets",
    element:<Pets/>
  },
  {
    path:"/Form",
    element:<Form/>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);