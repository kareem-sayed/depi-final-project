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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        dir="rtl"
        className={`fixed top-0 left-0 right-0 z-[110] py-4 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-background/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
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
              Switch to English
            </button>

            <Link
              to="/login"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              تسجيل الدخول
            </Link>

            <MainButton text="إنشاء حساب" to="/signup" />
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-muted focus:outline-none"
            >
              <i
                className={`fa-solid ${
                  isOpen ? "fa-xmark" : "fa-bars"
                } text-xl`}
              ></i>
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        dir="rtl"
        className={`fixed inset-y-0 left-0 z-[100] w-full max-w-xs bg-background p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="text-right leading-tight">
            <span className="block font-serif text-xl font-bold text-emerald-900">
              رحلة عبر
            </span>
            <span className="block text-xs font-medium text-foreground/70">
              قصص الأنبياء
            </span>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-foreground/80 hover:bg-muted focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="space-y-4 border-b border-border pb-6 text-right">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-foreground/90 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted">
            <i className="fa-solid fa-globe"></i>
            Switch to English
          </button>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
          >
            تسجيل الدخول
          </Link>

          <div className="flex w-full justify-center pt-2">
            <MainButton text="إنشاء حساب" to="/signup" />
          </div>
        </div>
      </div>
    </>
  );
}