const MainLayout = lazy(() => import("./layout/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const Prophets = lazy(() => import("./pages/Prophets"));
const ProphetStory = lazy(() => import("./pages/ProphetStory"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/NotFound"));
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "prophets", element: <Prophets /> },
      { path: "prophetstory/:id", element: <ProphetStory /> },
      { path: "quiz/:id", element: <Quiz /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
