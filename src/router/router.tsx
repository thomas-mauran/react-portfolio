import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import HomeView from "../views/Home/HomeView";
import ProjectView from "../views/Project/ProjectView";

import Navbar from "../components/Navbar/Navbar";
import ErrorView from "../views/Error/ErrorView";
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
        <Route path="/" element={<HomeView />} />
        <Route path="/project/:title" element={<ProjectView />} />
        <Route path="*" element={<ErrorView />} />
      </Route>
    </Route>
  )
);
export default Router;
