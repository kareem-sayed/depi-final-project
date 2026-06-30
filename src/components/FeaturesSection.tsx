import HeadSection from "./HeadSection";
import Box from "./Box";

interface Props {
  lang?: "AR" | "EN";
}

const translations = {
  AR: {
    title: "المميزات",
    features: [
      { icon: "fa-solid fa-clock text-primary text-xl", headline: "Timeline تفاعلي", text: "استعرض قصة كل نبي من خلال خط زمني تفاعلي يساعدك على متابعة الأحداث خطوة بخطوة." },
      { icon: "fa-solid fa-book text-primary text-xl", headline: "آيات من القرآن", text: "كل حدث مدعوم بآيات من القرآن الكريم لزيادة الفهم والتأكد من صحة المعلومات." },
      { icon: "fa-solid fa-square-check text-primary text-xl", headline: "اختبارات (Quiz)", text: "اختبر فهمك بعد كل قصة من خلال أسئلة بسيطة تساعدك على تثبيت المعلومات." },
      { icon: "fa-solid fa-chart-simple text-primary text-xl", headline: "تتبع التقدم", text: "تابع تقدمك أثناء استكشاف القصص واعرف نسبة إنجازك في كل قصة." },
    ],
  },
  EN: {
    title: "Features",
    features: [
      { icon: "fa-solid fa-clock text-primary text-xl", headline: "Interactive Timeline", text: "Browse each prophet's story through an interactive timeline that helps you follow events step by step." },
      { icon: "fa-solid fa-book text-primary text-xl", headline: "Quranic Verses", text: "Every event is supported by Quranic verses to deepen understanding and verify information accuracy." },
      { icon: "fa-solid fa-square-check text-primary text-xl", headline: "Quizzes", text: "Test your understanding after each story with simple questions that help reinforce the information." },
      { icon: "fa-solid fa-chart-simple text-primary text-xl", headline: "Progress Tracking", text: "Track your progress as you explore stories and see your completion rate for each one." },
    ],
  },
};

export default function FeaturesSection({ lang = "AR" }: Props) {
  const t = translations[lang] ?? translations.AR;
  const dir = lang === "AR" ? "rtl" : "ltr";

  return (
    <section className="bg-background/40 py-16" dir={dir}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeadSection
          title={t.title}
          position="text-center font-serif text-3xl md:text-4xl text-primary font-bold mb-12 w-full flex justify-center"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {t.features.map((feature) => (
            <Box
              key={feature.headline}
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