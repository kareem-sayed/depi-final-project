import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { lang } = useLanguage();

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ]),
    [lang],
  );

  return <RouterProvider router={router} />;
}