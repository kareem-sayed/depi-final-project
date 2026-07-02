import HeadSection from "./HeadSection";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  ar: {
    title: "عن الموقع",
    text: "يهدف هذا الموقع إلى تقديم قصص الأنبياء بطريقة حديثة وتفاعلية، حيث يمكن للمستخدم استكشاف الأحداث من خلال خط زمني، وفهم الأماكن عبر الخرائط، واختبار معلوماته باستخدام الاختبارات. نسعى إلى جعل التعلم أكثر سهولة ومتعة للجميع.",
  },
  en: {
    title: "About the Website",
    text: "This website aims to present the stories of the prophets in a modern and interactive way, allowing users to explore events through a timeline, understand locations via maps, and test their knowledge with quizzes. We strive to make learning accessible and enjoyable for everyone.",
  },
};

export default function AboutSection() {
  const { lang } = useLanguage();

  const t = translations[lang];

  return (
    <section
      className="py-16 bg-background"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeadSection
          title={t.title}
          position="text-center flex justify-center"
        />
        <p className="max-w-4xl mx-auto font-cairo text-base md:text-lg text-muted-foreground leading-loose text-center font-medium">
          {t.text}
        </p>
      </div>
    </section>
  );
}
