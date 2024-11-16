import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "new",
        element: <NewNote />,
        action: newNoteAction,
      },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}