import HeadSection from "./HeadSection";
import Box from "./Box";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  ar: {
    title: "المميزات",
    features: [
      {
        icon: "fa-solid fa-clock text-primary text-xl",
        headline: "Timeline تفاعلي",
        text: "استعرض قصة كل نبي من خلال خط زمني تفاعلي يساعدك على متابعة الأحداث خطوة بخطوة.",
      },
      {
        icon: "fa-solid fa-book text-primary text-xl",
        headline: "آيات من القرآن",
        text: "كل حدث مدعوم بآيات من القرآن الكريم لزيادة الفهم والتأكد من صحة المعلومات.",
      },
      {
        icon: "fa-solid fa-square-check text-primary text-xl",
        headline: "اختبارات (Quiz)",
        text: "اختبر فهمك بعد كل قصة من خلال أسئلة بسيطة تساعدك على تثبيت المعلومات.",
      },
      {
        icon: "fa-solid fa-chart-simple text-primary text-xl",
        headline: "تتبع التقدم",
        text: "تابع تقدمك أثناء استكشاف القصص واعرف نسبة إنجازك في كل قصة.",
      },
    ],
  },
  en: {
    title: "Features",
    features: [
      {
        icon: "fa-solid fa-clock text-primary text-xl",
        headline: "Interactive Timeline",
        text: "Explore the story of each prophet through an interactive timeline that helps you follow events step by step.",
      },
      {
        icon: "fa-solid fa-book text-primary text-xl",
        headline: "Quranic Verses",
        text: "Every event is supported by verses from the Holy Quran to increase understanding and ensure accuracy.",
      },
      {
        icon: "fa-solid fa-square-check text-primary text-xl",
        headline: "Quizzes",
        text: "Test your understanding after each story with simple questions that help reinforce information.",
      },
      {
        icon: "fa-solid fa-chart-simple text-primary text-xl",
        headline: "Progress Tracking",
        text: "Track your progress while exploring stories and view your completion rate for each story.",
      },
    ],
  },
};

export default function FeaturesSection() {
  const { lang } = useLanguage();

  const t = translations[lang];

  return (
    <section
      className="py-16 bg-background/40"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeadSection
          title={t.title}
          position="text-center flex justify-center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.features.map((feature, index) => (
            <Box
              key={index}
              icon={feature.icon}
              HeadLine={feature.headline}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
