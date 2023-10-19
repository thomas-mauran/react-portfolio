import React, { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Navigate } from "react-router-dom";
import HomeView from "../views/Home/HomeView";
import ProjectView from "../views/Project/ProjectView";
import ContactView from "../views/Contact/ContactView";

import Navbar from "../components/Navbar/Navbar";
import ErrorView from "../views/Error/ErrorView";
import PresentationView from "../views/Presentation/PresentationView";
const AppLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Toast /> */}
      {children}
    </>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<PresentationView />} />
        <Route path="/projects" element={<HomeView />} />
        <Route path="/project/:title" element={<ProjectView />} />
        <Route path="/about" element={<PresentationView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="*" element={<ErrorView />} />
      </Route>
    </Route>
  )
);
export default Router;
