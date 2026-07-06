import MainButton from "./MainButton";
import heroBg from "../assets/hero-bg.jpg";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  ar: {
    heading: "رحلة عبر قصص الأنبياء",
    subheading: "استكشف حياة الأنبياء بطريقة تفاعلية وجذابة",
    cta: "ابدأ الاستكشاف",
  },
  en: {
    heading: "A Journey Through the Stories of the Prophets",
    subheading:
      "Explore the lives of the prophets in an interactive and engaging way",
    cta: "Start Exploring",
  },
};

export default function HeroSection() {
  const { lang } = useLanguage();

  const t = translations[lang];

  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-10 text-center lg:px-8 bg-cover bg-center"
    >
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl leading-tight">
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
