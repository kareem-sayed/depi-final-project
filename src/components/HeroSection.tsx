import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: "/", label: "الرئيسية" },
  { to: "/prophets", label: "الأنبياء" },
  { to: "/dashboard", label: "لوحة التحكم" },
  { to: "/about", label: "عن الموقع" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-colors duration-300 ${
        isScrolled ? "bg-background/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="text-right leading-tight">
          <span className="block font-serif text-2xl font-bold text-emerald-900">
            رحلة عبر
          </span>
          <span className="block text-sm font-medium text-foreground/70">
            قصص الأنبياء
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <i className="fa-solid fa-globe"></i>
            EN
          </button>

          <Link
            to="/login"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            تسجيل الدخول
          </Link>

          <MainButton text="إنشاء حساب" to="/signup" />
        </div>
      </nav>
    </header>
  );
}