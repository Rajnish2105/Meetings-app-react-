import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllMeetUps, { AllMeetupsLoader } from "@/Pages/AllMeetUps";
import NewMeetUps from "@/Pages/NewMeetUps";
import Favorites from "@/Pages/Favorites";
import Layout from "@/Components/Layout/Layout";
import MeetupDetails, {
  MeetupDetailsLoader,
} from "@/Components/Meetups/MeetupDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", loader: AllMeetupsLoader, element: <AllMeetUps /> },
      { path: "/new", element: <NewMeetUps /> },
      { path: "/favorites", element: <Favorites /> },
      {
        path: "/MeetupDetails/:id",
        loader: MeetupDetailsLoader,
        element: <MeetupDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
