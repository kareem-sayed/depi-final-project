import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
  lang?: "ar" | "en";
  toggleLanguage?: () => void;
}

export default function MainLayout({
  lang = "ar",
  toggleLanguage,
}: MainLayoutProps) {
  return (
    <>
      <Navbar
        lang={lang}
        toggleLanguage={toggleLanguage}
      />
      <Outlet />
      
    </>
  );
}