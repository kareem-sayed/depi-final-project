import { Link } from "react-router-dom";
import type { Prophet } from "../types/Prophet";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useMemo, useState } from "react";

const content = {
  ar: {
    title: "دَلِيلُ الأَنْبِيَاءِ وَالرُّسُل",
    subtitle:
      "سير وتاريخ 25 نبيّاً ورسولاً ذُكروا في القرآن الكريم، نأخذ من قصصهم العبرة والموعظة",
    searchPlaceholder: "ابحث باسم النبي، أو معجزته، أو قومه...",
    ululAzmOnly: "أولو العزم فقط",
    count: "العدد:",
    ululAzmBadge: "أولو العزم",
    readStory: "اقرأ القصة",
    noResults: "لم نجد نبيّاً يطابق كلمة",
    resetSearch: "إعادة ضبط البحث",
    langToggle: "EN",
  },
  en: {
    title: "Prophets & Messengers Guide",
    subtitle:
      "Biographies and history of 25 prophets mentioned in the Holy Quran, taking lessons from their stories.",
    searchPlaceholder: "Search by prophet name, miracle, or people...",
    ululAzmOnly: "Ulul Azm Only",
    count: "Count:",
    ululAzmBadge: "Ulul Azm",
    readStory: "Read Story",
    noResults: "No prophet matches the word",
    resetSearch: "Reset Search",
    langToggle: "AR",
  },
};

export default function Prophets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyUlulAzm, setOnlyUlulAzm] = useState(false);
  const { lang } = useLanguage();
  const [prophets, setProphets] = useState<Prophet[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProphets = async () => {
      try {
        const res = await fetch(
          "https://backenddepi-production.up.railway.app/api/prophets",
        );

        const data = await res.json();

        setProphets(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProphets();
  }, []);

  const t = content[lang];

  const filteredProphets = useMemo(() => {
    return prophets.filter((prophet) => {
      const matchesSearch =
        prophet.name.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prophet.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prophet.shortDesc.ar
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        prophet.shortDesc.en.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesUlulAzm = onlyUlulAzm ? prophet.ululAzm : true;

      return matchesSearch && matchesUlulAzm;
    });
  }, [prophets, searchQuery, onlyUlulAzm]);

  if (loading) {
    return (
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="min-h-[70vh] flex flex-col items-center justify-center gap-5"
      >
        <div className="w-14 h-14 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>

        <p className="text-muted-foreground text-lg font-medium animate-pulse">
          {lang === "ar" ? "جاري تحميل قصص الأنبياء..." : "Loading Prophets..."}
        </p>
      </div>
    );
  }

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="container mx-auto px-4 py-10 mt-20 font-cairo relative"
    >
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-6xl font-extrabold font-amiri text-forest-dark dark:text-gold mt-8 mb-5 tracking-wide">
          {t.title}
        </h1>
        <p className="text-lg text-forest dark:text-slate-300 font-semibold">
          {t.subtitle}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-card text-card-foreground p-4 md:p-6 rounded-card shadow-soft border border-border mb-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Box */}
        <div className="relative w-full sm:w-[420px]">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full ltr:pl-11 rtl:pr-11 ltr:pr-4 rtl:pl-4 py-3 rounded-xl bg-background text-forest-dark dark:text-white font-bold border border-border focus:outline-none focus:ring-2 focus:ring-forest text-sm placeholder:text-muted-foreground placeholder:font-normal transition-all"
          />
          <svg
            className="w-5 h-5 text-forest absolute ltr:left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filter & Counter */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <button
            type="button"
            onClick={() => setOnlyUlulAzm(!onlyUlulAzm)}
            className={`px-5 py-2.5 rounded-xl text-sm font-extrabold transition-all flex items-center gap-2 border ${
              onlyUlulAzm
                ? "bg-forest-dark text-gold-light border-forest-dark shadow-md"
                : "bg-background text-forest-dark dark:text-slate-200 border-border hover:border-forest"
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full transition-colors ${onlyUlulAzm ? "bg-gold" : "bg-muted"}`}
            ></span>
            {t.ululAzmOnly}
          </button>

          <div className="px-4 py-2 bg-forest/10 dark:bg-forest-dark text-forest-dark dark:text-gold-light rounded-xl border border-forest/20 text-xs font-bold flex items-center gap-1.5">
            <span>{t.count}</span>
            <span className="text-sm font-extrabold">
              {filteredProphets.length}
            </span>
          </div>
        </div>
      </div>

      {/* Prophets Grid */}
      {filteredProphets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProphets.map((prophet: Prophet) => (
            <Link
              key={prophet.slug}
              to={`/prophetstory/${prophet.slug}`}
              className="group bg-card text-card-foreground rounded-card p-6 border border-border shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-full bg-forest text-white font-extrabold text-sm flex items-center justify-center group-hover:bg-gold group-hover:text-forest-dark transition-all shadow-sm">
                  {prophet.order}
                </span>

                {prophet.ululAzm && (
                  <span className="bg-gold text-forest-dark font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                    {t.ululAzmBadge}
                  </span>
                )}
              </div>

              {/* Name and Description */}
              <div className="mb-6 text-start">
                <h2 className="text-3xl font-extrabold font-amiri text-forest-dark dark:text-gold group-hover:text-forest transition-colors">
                  {prophet.name[lang]}
                </h2>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm mt-3 leading-relaxed line-clamp-2">
                  {prophet.shortDesc[lang]}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-end text-sm font-extrabold text-forest-dark dark:text-gold group-hover:text-gold-dark transition-colors">
                <span className="flex items-center gap-1.5 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  {t.readStory}
                  <span className="text-lg leading-none rtl:rotate-0 ltr:rotate-180">
                    &larr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card rounded-card border-2 border-dashed border-border shadow-soft max-w-lg mx-auto">
          <p className="text-forest-dark dark:text-gold text-lg font-bold">
            {t.noResults} "{searchQuery}"
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setOnlyUlulAzm(false);
            }}
            className="mt-6 px-6 py-2.5 bg-forest-dark text-gold-light font-bold text-sm rounded-xl hover:bg-forest transition-colors shadow-md"
          >
            {t.resetSearch}
          </button>
        </div>
      )}
    </div>
  );
}
