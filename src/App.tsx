import { useEffect, useMemo, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

export default function App() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: (
            <MainLayout
              lang={lang}
              toggleLanguage={toggleLanguage}
            />
          ),
          children: [
            {
              index: true,
              element: <Home lang={lang} />,
            },
          ],
        },
      ]),
    [lang]
  );

  return <RouterProvider router={router} />;
}