import { useEffect, useState } from "react";
import HeadSection from "./HeadSection";

const translations = {
  ar: {
    title: "عن الموقع",
    text: "يهدف هذا الموقع إلى تقديم قصص الأنبياء بطريقة حديثة وتفاعلية، حيث يمكن للمستخدم استكشاف الأحداث من خلال خط زمني، وفهم الأماكن عبر الخرائط، واختبار معلوماته باستخدام الاختبارات. نسعى إلى جعل التعلم أكثر سهولة ومتعة للجميع."
  },
  en: {
    title: "About the Website",
    text: "This website aims to present the stories of the prophets in a modern and interactive way, allowing users to explore events through a timeline, understand locations via maps, and test their knowledge with quizzes. We strive to make learning accessible and enjoyable for everyone."
  }
};

export default function AboutSection() {
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeadSection 
          title={t.title} 
          position="text-center font-serif text-3xl md:text-4xl text-primary font-bold mb-6 w-full flex justify-center" 
        />
        <p className="max-w-4xl mx-auto font-cairo text-base md:text-lg text-muted-foreground leading-loose text-center font-medium">
          {t.text}
        </p>
      </div>
    </section>
  );
}