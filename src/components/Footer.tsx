import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const translations = {
  ar: {
    home: "الرئيسية",
    prophets: "الأنبياء",
    about: "عن الموقع",
    rights: "جميع الحقوق محفوظة © 2026 - رحلة عبر قصص الأنبياء"
  },
  en: {
    home: "Home",
    prophets: "Prophets",
    about: "About",
    rights: "All rights reserved © 2026 - Journey Through Stories of Prophets"
  }
};

export default function Footer() {
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const htmlLang = document.documentElement.lang;
      if (htmlLang === "ar" || htmlLang === "en") {
        setCurrentLang(htmlLang as "ar" | "en");
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

   

    return () => observer.disconnect();
  }, []);

  const t = translations[currentLang];

  return (
    <footer className="w-full bg-primary text-white" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-white/80">
        
        <div className="flex items-center gap-6 md:order-1 w-full md:w-auto justify-center md:justify-start font-semibold">
          <Link to="/" className="hover:text-white transition-colors">{t.home}</Link>
          <Link to="/prophets" className="hover:text-white transition-colors">{t.prophets}</Link>
          <Link to="/about" className="hover:text-white transition-colors">{t.about}</Link>
        </div>

        <div className="flex items-center gap-5 text-base md:order-2 w-full md:w-auto justify-center text-white/90">
          <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        <div className={`text-center md:order-3 w-full md:w-auto justify-center tracking-wide ${currentLang === "ar" ? "md:text-left md:justify-end" : "md:text-right md:justify-start"}`}>
          <span>{t.rights}</span>
        </div>

      </div>
    </footer>
  );
}