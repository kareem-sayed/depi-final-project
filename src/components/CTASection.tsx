import { useEffect, useState } from "react";
import HeadSection from "./HeadSection";
import MainButton from "./MainButton";

const translations = {
  ar: {
    title: "ابدأ رحلتك الآن",
    btnText: "ابدأ رحلتك الآن",
  },
  en: {
    title: "Start Your Journey Now",
    btnText: "Start Your Journey Now",
  }
};

export default function CTASection() {
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
    <section className="py-16 bg-background" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <HeadSection 
          title={t.title} 
          position="text-center font-serif text-3xl md:text-4xl text-foreground font-bold mb-8 w-full flex justify-center" 
        />
        <div className="w-full flex justify-center transform scale-110 md:scale-125 origin-center my-4">
          <MainButton text={t.btnText} to="/prophets" />
        </div>
      </div>
    </section>
  );
}