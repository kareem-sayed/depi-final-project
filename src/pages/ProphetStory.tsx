import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import type { StorySection } from "../types/StorySection";
import type { StoryChapters } from "../types/StoryChapters";
import type { ProphetStory } from "../types/ProphetStory";

const content = {
  ar: {
    home: "الرئيسية",
    guide: "دليل الأنبياء",
    era: "الزمان",
    location: "المكان",
    unspecified: "غير محدد",
    stages: "مراحل القصة",
    verse: "آية كريمة",
    next: "المرحلة التالية",
    prev: "المرحلة السابقة",
    notFoundTitle: "هذه السيرة غير متوفرة حالياً",
    notFoundBtn: "العودة لدليل الأنبياء",
    langToggle: "EN",
    quizBtn:"اختبر معلوماتك"
  },
  en: {
    home: "Home",
    guide: "Prophets Guide",
    era: "Era",
    location: "Location",
    unspecified: "Unspecified",
    stages: "Story Stages",
    verse: "Holy Verse",
    next: "Next Stage",
    prev: "Previous Stage",
    notFoundTitle: "This biography is currently unavailable",
    notFoundBtn: "Return to Prophets Guide",
    langToggle: "AR",
    quizBtn:"Test Your Knowledge"
  }
};

export default function ProphetStory() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [story, setStory] = useState<ProphetStory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const { lang } = useLanguage();
  const t = content[lang];

  const [activeChapter, setActiveChapter] = useState(0);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    if (!id) return;

    const bookmarks: string[] = JSON.parse(
      localStorage.getItem("bookmarkedProphets") || "[]"
    );

    if (bookmarks.includes(id)) {
      const updated = bookmarks.filter((item) => item !== id);
      localStorage.setItem("bookmarkedProphets", JSON.stringify(updated));
      setIsBookmarked(false);
    } else {
      bookmarks.push(id);
      localStorage.setItem("bookmarkedProphets", JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeChapter]);

  useEffect(() => {
    if (id) {
      const read = JSON.parse(localStorage.getItem("readProphets") || "[]");
      if (!read.includes(id)) {
        read.push(id);
        localStorage.setItem("readProphets", JSON.stringify(read));
      }
    }
  }, [id]);
  
  useEffect(() => {
    if (!id) return;
    
    const fetchStory = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://backenddepi-production.up.railway.app/api/stories/${id}`
        );
        
        if (!response.ok) throw new Error("Failed");
        
        const data = await response.json();
        
        setStory(data.data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStory();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const bookmarks: string[] = JSON.parse(
      localStorage.getItem("bookmarkedProphets") || "[]"
    );

    setIsBookmarked(bookmarks.includes(id));
  }, [id]);
  
  if (loading) {
    return (
      <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-[70vh] flex flex-col items-center justify-center gap-5" >
        <div className="w-14 h-14 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-muted-foreground text-lg font-medium animate-pulse">
          {lang === "ar"
            ? "جاري تحميل السيرة..."
            : "Loading Story..."}
        </p>
      </div>
    );
  }
  
  if (error || !story) {
    return (
      <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-[60vh] p-10 mt-20 flex flex-col items-center justify-center font-cairo relative">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-4">{t.notFoundTitle}</h2>
        <button onClick={() => navigate("/prophets")} className="px-6 py-2.5 bg-forest-dark text-gold-light font-bold rounded-xl hover:bg-forest transition-colors shadow-md">
          {t.notFoundBtn}
        </button>
      </div>
    );
  }

  const chapters = story.chapters;
  const currentChapter = chapters[activeChapter];
  const totalChapters = chapters.length;

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="container mx-auto px-4 p-10 mt-20 md:py-12 max-w-6xl font-cairo relative">

      <nav className="flex items-center justify-between text-sm text-muted-foreground font-bold mb-8 mt-4 md:mt-0">
        <div className="flex items-center flex-wrap gap-1">
          <Link to="/" className="hover:text-forest transition-colors">{t.home}</Link>
          <span className="mx-2">/</span>
          <Link to="/prophets" className="hover:text-forest transition-colors">{t.guide}</Link>
          <span className="mx-2">/</span>
          <span className="text-forest-dark">{story.name[lang]}</span>
        </div>
      </nav>

      {/* Story Header */}
      <div className="bg-forest-dark text-gold-light rounded-card p-6 md:p-8 mb-10 shadow-soft relative overflow-hidden border border-forest">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl"></div>
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-background/5 rounded-full blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold font-amiri text-gold mb-3">
                  {lang === "ar"
                    ? `سِيرَةُ ${story.name.ar}`
                    : `Biography of ${story.name.en}`}
                </h1>

                <p className="text-base md:text-lg opacity-90 font-medium">
                  {story.title?.[lang]}
                </p>
              </div>

              <button className="w-11 h-11 rounded-full border border-gold/30 bg-background/10 hover:bg-gold/20 transition" onClick={toggleBookmark}>
              <i
                className={`${
                  isBookmarked
                    ? "fa-solid fa-bookmark text-gold"
                    : "fa-regular fa-bookmark"
                }`}
              />
            </button>
            </div>
          </div>
          
          <div className="flex gap-4 text-sm font-bold bg-background/10 p-4 rounded-xl backdrop-blur-sm border border-gold/20 w-full md:w-auto justify-center">
            <div className="flex flex-col items-center">
              <span className="text-gold/70 text-xs mb-1">{t.era}</span>
              <span className="text-center">{story.era?.[lang] || t.unspecified}</span>
            </div>
            <div className="w-px bg-gold/20 flex-shrink-0"></div>
            <div className="flex flex-col items-center">
              <span className="text-gold/70 text-xs mb-1">{t.location}</span>
              <span className="text-center">{story.location?.[lang] || t.unspecified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Sidebar */}
        <div className="lg:col-span-1 bg-card border border-border rounded-card p-5 lg:sticky lg:top-8 shadow-sm">
          <h3 className="text-lg font-extrabold text-forest-dark mb-4 text-center border-b border-border pb-3">
            {t.stages}
          </h3>
          <div className="flex flex-col gap-2 max-h-[280px] lg:max-h-none overflow-y-auto pr-1">
            {chapters.map((chapter: StoryChapters, index: number) => (
              <button
                key={index}
                onClick={() => setActiveChapter(index)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all text-start w-full ${
                  activeChapter === index
                    ? "bg-forest/10 border border-forest/20"
                    : "bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0 transition-colors ${
                    activeChapter === index
                      ? "bg-forest text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`font-bold text-sm ${
                    activeChapter === index
                      ? "text-forest-dark"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {chapter.title[lang]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 w-full overflow-hidden">
          <div className="bg-card rounded-card p-5 md:p-10 shadow-soft border border-border h-fit">
            
            <div className="border-b border-border pb-6 mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center text-lg font-bold shadow-md flex-shrink-0">
                {activeChapter + 1}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-amiri text-forest-dark leading-snug">
                {currentChapter.title[lang]}
              </h2>
            </div>

            {/* sections and verses */}
            <div className="space-y-8">
              {currentChapter.sections.map((section: StorySection, index: number) => (
                <div key={index} className="leading-relaxed">
                  <p className="text-slate-800 dark:text-slate-200 text-base md:text-lg font-medium leading-loose mb-6 text-justify">
                    {section.text[lang]}
                  </p>

                  {section.ayah && (
                    <div className="mt-12 mb-10 relative bg-forest/5 dark:bg-forest/20 border-2 border-forest/20 rounded-2xl p-6 py-8 md:p-10 text-center shadow-sm ">
                      <span className="absolute -top-3.5 ltr:left-6 rtl:right-6 bg-card text-forest-dark dark:text-gold border border-forest/20 px-3 py-1 rounded-full text-xs font-extrabold z-10 shadow-sm">
                        {t.verse}
                      </span>
                      <p dir="rtl" className="text-xl md:text-3xl font-amiri text-forest-dark dark:text-gold-light leading-[3] md:leading-[2.8] mb-4 pt-2">
                        ﴿{section.ayah.text}﴾
                      </p>
                      <p className="text-forest font-bold text-sm">
                        [{section.ayah.ref[lang] || section.ayah.ref.ar}]
                      </p>
                      {section.ayah.audioUrl && (
                        <audio 
                          key={section.ayah.audioUrl}
                          controls 
                          src={section.ayah.audioUrl}
                          className="mt-6 w-full max-w-xs mx-auto h-8"
                        />
                      )}  
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

            {/* Chapter navigation buttons */}
          <div className="flex items-center justify-between mt-8 gap-4">
            
            {activeChapter === totalChapters - 1 ? (
              <button
                onClick={() => navigate(`/quiz/${id}`)}
                className="flex-1 sm:flex-none justify-center px-6 py-3.5 rounded-xl font-extrabold flex items-center gap-2 transition-all bg-gold text-forest-dark hover:bg-gold-light shadow-md hover:-translate-y-1 text-sm md:text-base border border-gold-dark/20"
              >
                {t.quizBtn}
                <span className="rtl:hidden inline text-lg md:text-xl">&rarr;</span>
                <span className="ltr:hidden inline text-lg md:text-xl">&larr;</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveChapter((prev) => prev + 1)}
                className="flex-1 sm:flex-none justify-center px-4 md:px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all text-sm md:text-base bg-forest-dark text-gold-light hover:bg-forest shadow-md hover:-translate-y-1"
              >
                <span className="rtl:hidden inline text-lg md:text-xl">&rarr;</span>
                {t.next}
                <span className="ltr:hidden inline text-lg md:text-xl">&larr;</span>
              </button>
            )}
            <button
              onClick={() => setActiveChapter((prev) => prev - 1)}
              disabled={activeChapter === 0}
              className={`flex-1 sm:flex-none justify-center px-4 md:px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border border-border text-sm md:text-base ${
                activeChapter === 0
                  ? "opacity-50 cursor-not-allowed text-muted-foreground bg-background"
                  : "text-forest-dark bg-card hover:bg-forest/5 shadow-sm hover:-translate-y-1"
              }`}
            >
              <span className="ltr:hidden inline text-lg md:text-xl">&rarr;</span>
              {t.prev}
              <span className="rtl:hidden inline text-lg md:text-xl">&larr;</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}