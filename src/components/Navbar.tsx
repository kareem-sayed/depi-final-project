import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import mainClient from "../fetchApi/clients/mainClient";

interface NavItem {
  to: string;
  label: string;
}

interface UserData {
  username: string;
  role: "admin" | "user";
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
    logout: "تسجيل الخروج",
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
    logout: "Logout",
    langBtn: "تحويل إلى العربية",
  },
};

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [userLoading, setUserLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("auth_token"),
  );
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) return;

      setUserLoading(true);

      try {
        const response = await mainClient.get("/auth/me");

        const profileData = response.data.data;

        setUser({
          username: profileData.name,
          role: profileData.role,
        });
      } catch {
        localStorage.removeItem("auth_token");
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setUserLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchUserProfile();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleAuthChange = () => {
      const tokenExists = !!localStorage.getItem("auth_token");
      setIsLoggedIn(tokenExists);
      if (!tokenExists) {
        setUser(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("auth_token");
    setIsLoggedIn(false);
    setUser(null);
    setIsOpen(false);
    setDropdownOpen(false);
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  const currentLang = lang === "ar" || lang === "en" ? lang : "ar";
  const t = translations[currentLang];

  const navItems: NavItem[] = [
    { to: "/", label: t.home },
    { to: "/prophets", label: t.prophets },
  ];

  if (isLoggedIn) {
    navItems.push({ to: "/dashboard", label: t.dashboard });
  }

  navItems.push({ to: "/about", label: t.about });

  return (
    <>
      <header
        dir={currentLang === "ar" ? "rtl" : "ltr"}
        className={`fixed top-0 left-0 right-0 z-[110] py-4 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-background/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div
            className={`flex md:hidden ${currentLang === "en" ? "order-1" : "order-3"}`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-muted focus:outline-none"
            >
              <i
                className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>

          <Link
            to="/"
            className={`leading-tight md:order-none ${currentLang === "en" ? "order-3 text-left" : "order-1 text-right"}`}
          >
            <span className="block font-serif text-2xl font-bold text-emerald-900">
              {t.title}
            </span>
            <span className="block text-sm font-medium text-foreground/70">
              {t.subtitle}
            </span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex md:order-none">
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

          <div className="hidden items-center gap-6 md:flex md:order-none">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              <i className="fa-solid fa-globe"></i>
              {t.langBtn}
            </button>

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {t.login}
                </Link>
                <Link
                  to="/signup"
                  className="rounded-xl bg-emerald-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                >
                  {t.signup}
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <span className="text-sm font-medium text-foreground/90">
                    {userLoading ? (
                      <i className="fa-solid fa-spinner fa-spin" />
                    ) : (
                      user?.username
                    )}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  ></i>
                </button>

                {dropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div
                      className={`absolute mt-2 w-40 rounded-xl bg-background p-2 shadow-xl ring-1 ring-black/5 z-20 ${currentLang === "ar" ? "left-0 origin-top-left" : "right-0 origin-top-right"}`}
                    >
                      <Link
                        to="/dashboard"
                        onClick={() => setDropdownOpen(false)}
                        className="flex w-full items-center px-4 py-2 text-sm text-foreground/80 rounded-lg hover:bg-muted"
                      >
                        {t.dashboard}
                      </Link>
                      <hr className="my-1 border-border" />
                      <button
                        onClick={handleLogoutClick}
                        className="flex w-full items-center px-4 py-2 text-sm text-destructive font-medium rounded-lg hover:bg-destructive/10"
                      >
                        {t.logout}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
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
        dir={currentLang === "ar" ? "rtl" : "ltr"}
        className={`fixed inset-y-0 z-[200] w-full max-w-xs bg-background p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          currentLang === "ar" ? "right-0" : "left-0"
        } ${
          isOpen
            ? "translate-x-0"
            : currentLang === "ar"
              ? "translate-x-full"
              : "-translate-x-full"
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

        {isLoggedIn && (
          <div className="mb-6 p-3 rounded-xl bg-muted/50">
            <span className="block text-sm font-semibold text-foreground">
              {user?.username || "..."}
            </span>
            <span className="block text-xs text-foreground/60 capitalize">
              {user?.role || "..."}
            </span>
          </div>
        )}

        <div
          className={`space-y-4 border-b border-border pb-6 ${currentLang === "ar" ? "text-right" : "text-left"}`}
        >
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
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
          >
            <i className="fa-solid fa-globe"></i>
            {t.langBtn}
          </button>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
              >
                {t.login}
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
              >
                {t.signup}
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogoutClick}
              className="flex w-full items-center justify-center rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-2.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/20"
            >
              {t.logout}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
