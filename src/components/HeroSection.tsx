import { useEffect, useState } from "react";
import MainButton from "./MainButton";
import heroBg from "../assets/hero-bg.jpg";

const translations = {
  ar: {
    heading: "رحلة عبر قصص الأنبياء",
    subheading: "استكشف حياة الأنبياء بطريقة تفاعلية وجذابة",
    cta: "ابدأ الاستكشاف",
  },
  en: {
    heading: "A Journey Through the Stories of the Prophets",
    subheading: "Explore the lives of the prophets in an interactive and engaging way",
    cta: "Start Exploring",
  }
};

export default function HeroSection() {
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
    <section 
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center lg:px-8 bg-cover bg-center"
    >
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-emerald-950 sm:text-6xl leading-tight">
          {t.heading}
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80 font-medium">
          {t.subheading}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <MainButton text={t.cta} to="/prophets" />
        </div>
      </div>
    </section>
  );
}