import React, { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Navigate } from "react-router-dom";
import HomeView from "../views/Home/HomeView";
import ProjectView from "../views/Project/ProjectView";

import Navbar from "../components/Navbar/Navbar";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Toast /> */}
    </>
  );

};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/project/:title" element={<ProjectView />} />

        {/* <Route path="/home" element={<HomeView />} />
        <Route path="/project/:title" element={<ProjectView />} />
        <Route path="/tag/:name" element={<TagView />} /> */}
      </Route>
    </Route>
  )
);
export default Router;
