import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Prophets from "./pages/Prophets";
import ProphetStory from "./pages/ProphetStory";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";

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
