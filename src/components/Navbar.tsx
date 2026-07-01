import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";

interface NavItem {
  to: string;
  label: string;
}

const translations = {
  ar: {
    title: "رحلة عبر",
    subtitle: "قصص الأنبياء",
    home: "الرئيسية",
    prophets: "الأنبياء",
    dashboard: "لوحة التحكم",
    about: "عن الموقع",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    langBtn: "English",
  },
  en: {
    title: "Journey Through",
    subtitle: "Stories of Prophets",
    home: "Home",
    prophets: "Prophets",
    dashboard: "Dashboard",
    about: "About",
    login: "Login",
    signup: "Sign Up",
    langBtn: "العربية",
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const toggleLanguage = () => {
    const nextLang = lang === "ar" ? "en" : "ar";
    setLang(nextLang);
    document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = nextLang;
  };

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

  const t = translations[lang] || translations.ar;

  const navItems: NavItem[] = [
    { to: "/", label: t.home },
    { to: "/prophets", label: t.prophets },
    { to: "/dashboard", label: t.dashboard },
    { to: "/about", label: t.about },
  ];

  return (
    <>
      <header
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`fixed top-0 left-0 right-0 z-[110] py-4 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-background/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className={`flex md:hidden ${lang === "en" ? "order-1" : "order-3"}`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-muted focus:outline-none"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
            </button>
          </div>

          <Link 
            to="/" 
            className={`leading-tight md:order-1 ${lang === "en" ? "order-3 text-left" : "order-1 text-right"}`}
          >
            <span className="block font-serif text-2xl font-bold text-emerald-900">
              {t.title}
            </span>
            <span className="block text-sm font-medium text-foreground/70">
              {t.subtitle}
            </span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex md:order-2">
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

          <div className="hidden items-center gap-6 md:flex md:order-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              <i className="fa-solid fa-globe"></i>
              {t.langBtn}
            </button>

            <Link
              to="/login"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.login}
            </Link>

            <MainButton text={t.signup} to="/signup" />
          </div>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[190] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`fixed inset-y-0 z-[200] w-full max-w-xs bg-background p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          lang === "ar" ? "right-0" : "left-0"
        } ${
          isOpen ? "translate-x-0" : lang === "ar" ? "translate-x-full" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between flex-row-reverse">
          <button
            type="button"
            className="rounded-md p-2 text-foreground/80 hover:bg-muted focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>

          <div className="text-right leading-tight">
            <span className="block font-serif text-xl font-bold text-emerald-900">
              {t.title}
            </span>
            <span className="block text-xs font-medium text-foreground/70">
              {t.subtitle}
            </span>
          </div>
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
          <button 
            onClick={() => { toggleLanguage(); setIsOpen(false); }}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
          >
            <i className="fa-solid fa-globe"></i>
            {t.langBtn}
          </button>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
          >
            {t.login}
          </Link>

          <div className="flex w-full justify-center pt-2">
            <MainButton text={t.signup} to="/signup" />
          </div>
        </div>
      </div>
    </>
  );
}