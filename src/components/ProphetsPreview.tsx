import { Link } from "react-router-dom";
import HeadSection from "./HeadSection";
import IconBox from "./IconBox";
import { useLanguage } from "../context/LanguageContext";
import { prophets } from "../data/prophetsList";

const translations = {
  ar: {
    title: "الأنبياء",
    cta: "ابدأ القصة",
  },
  en: {
    title: "The Prophets",
    cta: "Start Story",
  },
};

const previewIds = ["adam", "nuh", "ibrahim", "musa", "yusuf", "mohamed"];

const previewProphets = prophets.filter((prophet) =>
  previewIds.includes(prophet.slug),
);

export default function ProphetsPreview() {
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {previewProphets.map((prophet) => (
            <div
              key={prophet.slug}
              className="flex flex-col justify-between h-full bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 p-8 text-center items-center"
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-center w-full mb-4">
                  <IconBox Icon="fa-solid fa-book-open text-primary text-xl" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-foreground mb-2">
                  {prophet.name[lang]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prophet.longDesc[lang]}
                </p>
              </div>

              <div className="mt-6 w-full flex justify-center">
                <Link
                  to={`/prophetstory/${prophet.slug}`}
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
