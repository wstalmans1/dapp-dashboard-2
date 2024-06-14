import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/HomePage";
import ProfilesPage from "./components/ProfilesPage";
import NotFoundPage from "./components/NotFoundPage";
import ProfilePage from "./components/ProfilePage";


import './styles/main.css';

const router = createHashRouter([ 
    { path: "/", element: <HomePage />, errorElement: <NotFoundPage />},
    { path: "/profiles", element: <ProfilesPage />, children: [{ path: "/profiles/:profileId", element: <ProfilePage />}]},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);    
