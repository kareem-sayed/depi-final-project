import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeadSection from "./HeadSection";
import IconBox from "./IconBox";

const translations = {
  ar: {
    title: "الأنبياء",
    cta: "ابدأ القصة",
    prophets: [
      { id: "1", name: "سيدنا آدم", brief: "أول إنسان وأول نبي خلقه الله، عاش في الجنة ثم نزل إلى الأرض ليبدأ حياة البشر، وعلم الناس عبادة الله." },
      { id: "2", name: "سيدنا نوح", brief: "أرسل لقومه يدعوهم لعبادة الله، لكنهم كذبوه، فكانت النهاية بطوفان عظيم نجا منه هو ومن آمن معه." },
      { id: "3", name: "سيدنا إبراهيم", brief: "يُعرف بأبو الأنبياء، دعا إلى التوحيد وكسر الأصنام، وابتلي بعدة اختبارات عظيمة ونجح فيها." },
      { id: "4", name: "سيدنا موسى", brief: "أرسل إلى فرعون لدعوته إلى الله، وحدثت معه معجزات عظيمة مثل شق البحر وإنقاذ بني إسرائيل." },
      { id: "5", name: "سيدنا يوسف", brief: "قصة حياته مليئة بالأحداث، من إلقائه في البئر إلى أن أصبح عزيز مصر، ويُعرف بالصبر والحكمة." },
      { id: "6", name: "سيدنا يونس", brief: "ترك قومه غاضبًا فابتلاه الله بأن ابتلعه الحوت، ثم دعا الله فنجاه، وتعلم الصبر والرجوع إلى الله." }
    ]
  },
  en: {
    title: "The Prophets",
    cta: "Start Story",
    prophets: [
      { id: "1", name: "Prophet Adam", brief: "The first human and prophet created by Allah. He lived in Paradise then descended to Earth to start human life." },
      { id: "2", name: "Prophet Noah", brief: "Sent to his people to call them to worship Allah, but they denied him, ending in a great flood from which he and believers survived." },
      { id: "3", name: "Prophet Abraham", brief: "Known as the Father of Prophets. He called for monotheism, broke idols, and passed several great trials successfully." },
      { id: "4", name: "Prophet Moses", brief: "Sent to Pharaoh to invite him to Allah. Great miracles occurred with him, such as parting the sea and saving the Children of Israel." },
      { id: "5", name: "Prophet Joseph", brief: "His life story is full of events, from being thrown into the well to becoming the Minister of Egypt. He is known for patience and wisdom." },
      { id: "6", name: "Prophet Jonah", brief: "He left his people in anger, so Allah tested him by being swallowed by the whale. He supplicated to Allah, who saved him." }
    ]
  }
};

export default function ProphetsPreview() {
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
          position="text-center font-serif text-3xl md:text-4xl text-primary font-bold mb-12 w-full flex justify-center" 
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.prophets.map((prophet) => (
            <div 
              key={prophet.id} 
              className="flex flex-col justify-between h-full bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 p-8 text-center items-center"
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-center w-full mb-4">
                  <IconBox Icon="fa-solid fa-book-open text-primary text-xl" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-foreground mb-2">
                  {prophet.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prophet.brief}
                </p>
              </div>
              
              <div className="mt-6 w-full flex justify-center">
                <Link 
                  to={`/prophetstory/${prophet.id}`} 
                  className="bg-emerald-800 text-white text-xs px-6 py-2.5 rounded-md font-semibold shadow-sm hover:bg-emerald-700 transition-colors inline-block"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}