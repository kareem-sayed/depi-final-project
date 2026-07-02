import { useLanguage } from "../context/LanguageContext";
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
  },
};

export default function CTASection() {
  const { lang } = useLanguage();

  const t = translations[lang];

  return (
    <section
      className="py-16 bg-background"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <HeadSection
          title={t.title}
          position="text-center flex justify-center"
        />
        <div className="w-full flex justify-center transform scale-110 md:scale-125 origin-center my-4">
          <MainButton text={t.btnText} to="/prophets" />
        </div>
      </div>
    </section>
  );
}
