import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const content = {
  ar: {
    greeting: "أهلاً بك من جديد 👋",
    name: "أحمد علاء",
    progressText: (p: number) => `أكملت ${p}% من رحلتك. كمل القراءة وتعلّم المزيد من قصص الأنبياء اليوم.`,
    continueReadingBtn: "أكمل القراءة",
    stats: { read: "قصص مقروءة", tests: "اختبارات مكتملة", days: "أيام متتالية", points: "النقاط" },
    achievementsTitle: "الإنجازات",
    achievements: [
      { title: "أول قصة", desc: "أتمم قراءة أول قصة" },
      { title: "أسبوع متواصل", desc: "7 أيام متتالية" },
      { title: "علامة كاملة", desc: "احصل على 100% في اختبار" },
      { title: "قارئ نهم", desc: "أكمل 10 قصص" }
    ],
    continueReadingTitle: "تابع القراءة",
    viewAll: "الكل",
    readBtn: "قراءة",
    langToggle: "EN"
  },
  en: {
    greeting: "Welcome back 👋",
    name: "Ahmed Alaa",
    progressText: (p: number) => `You have completed ${p}% of your journey. Keep reading and learn more about the prophets today.`,
    continueReadingBtn: "Continue Reading",
    stats: { read: "Stories Read", tests: "Quizzes", days: "Day Streak", points: "Points" },
    achievementsTitle: "Achievements",
    achievements: [
      { title: "First Story", desc: "Finished reading the first story" },
      { title: "Weekly Streak", desc: "7 consecutive days" },
      { title: "Perfect Score", desc: "Get 100% on a quiz" },
      { title: "Avid Reader", desc: "Complete 10 stories" }
    ],
    continueReadingTitle: "Continue Reading",
    viewAll: "View All",
    readBtn: "Read",
    langToggle: "AR"
  }
};

const mockData = {
  ar: [
    { name: "نبي الله موسى", chapter: "الفصل الثالث: الخروج من مصر", progress: 65, slug: "musa" },
    { name: "نبي الله يوسف", chapter: "الفصل الثاني: في بيت العزيز", progress: 40, slug: "yusuf" },
    { name: "نبي الله نوح", chapter: "الفصل الرابع: الطوفان", progress: 80, slug: "nuh" }
  ],
  en: [
    { name: "Prophet Musa", chapter: "Chapter 3: Exodus from Egypt", progress: 65, slug: "musa" },
    { name: "Prophet Yusuf", chapter: "Chapter 2: In the House of Al-Aziz", progress: 40, slug: "yusuf" },
    { name: "Prophet Nuh", chapter: "Chapter 4: The Flood", progress: 80, slug: "nuh" }
  ]
};

export default function Dashboard() {
  const [readStories, setReadStories] = useState<string[]>([]);
  
  const { lang } = useLanguage();
  const t = content[lang];
  const progressData = mockData[lang];

  useEffect(() => {
    const saved = localStorage.getItem("readProphets");
    if (saved) setReadStories(JSON.parse(saved));
  }, []);

  const progressPercentage = Math.round((readStories.length / 25) * 100);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="container mx-auto px-4 py-10 mt-20 font-cairo max-w-7xl relative">

      {/*Hero Section */}
      <div className="bg-forest text-white rounded-[2rem] p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-card-hover mt-12 md:mt-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-forest-dark/50 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 w-full text-start md:w-2/3">
          <p className="text-gold-light text-lg font-bold mb-2.5">
            {t.greeting}
          </p>
          <h1 className="text-4xl md:text-4xl font-extrabold font-amiri mb-3">
            {t.name}
          </h1>
          <p className="text-gold-light text-lg md:text-xl opacity-80">
            {t.progressText(progressPercentage)}
          </p>
        </div>

        <div className="relative z-10 w-full md:w-auto mt-6 md:mt-0 flex gap-4">
          <Link to="/prophets" className="px-6 py-3 bg-gold text-forest-dark hover:bg-gold-light rounded-xl font-extrabold transition-colors shadow-md flex items-center gap-2">
            {t.continueReadingBtn}
            <span className="rtl:hidden inline">&rarr;</span>
            <span className="ltr:hidden inline">&larr;</span>
          </Link>
        </div>
      </div>

      {/*Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
        <StatCard color="text-forest" value={readStories.length.toString()} label={t.stats.read} />
        <StatCard color="text-amber-600" value="5" label={t.stats.tests} />
        <StatCard color="text-red-500" value="12" label={t.stats.days} />
        <StatCard color="text-gold-dark" value="320" label={t.stats.points} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/*Achievements */}
        <div className="lg:col-span-1 bg-card rounded-3xl p-6 border border-border shadow-sm">
          <div className="mb-6 border-b border-border pb-4">
            <h2 className="text-2xl font-extrabold text-forest-dark text-start">{t.achievementsTitle}</h2>
          </div>
          
          <div className="space-y-4">
            <AchievementCard active={true} title={t.achievements[0].title} desc={t.achievements[0].desc} />
            <AchievementCard active={true} title={t.achievements[1].title} desc={t.achievements[1].desc} />
            <AchievementCard active={true} title={t.achievements[2].title} desc={t.achievements[2].desc} />
            <AchievementCard active={false} title={t.achievements[3].title} desc={t.achievements[3].desc} />
          </div>
        </div>

        {/*Continue Reading */}
        <div className="lg:col-span-2 bg-card rounded-3xl p-6 md:p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <h2 className="text-2xl font-extrabold text-forest-dark">{t.continueReadingTitle}</h2>
            <Link to="/prophets" className="text-forest font-bold hover:underline text-sm flex items-center gap-1">
               {t.viewAll} 
               <span className="rtl:hidden inline">&rarr;</span>
               <span className="ltr:hidden inline">&larr;</span>
            </Link>
          </div>

          <div className="space-y-6">
            {progressData.map((item, index) => (
              <ProgressRow 
                key={index}
                name={item.name} 
                chapter={item.chapter} 
                progress={item.progress} 
                slug={item.slug}
                readBtnText={t.readBtn} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

const StatCard = ({ color, value, label }: any) => (
  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
    <h3 className={`text-4xl font-extrabold mb-2 ${color}`}>{value}</h3>
    <p className="text-slate-500 text-sm font-bold">{label}</p>
  </div>
);

const AchievementCard = ({ active, title, desc }: any) => (
  <div className={`p-4 rounded-2xl border transition-colors ${
    active ? "bg-amber-50 dark:bg-gold/10 border-gold/40" : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60"
  }`}>
    <div className="text-start">
      <h4 className={`font-bold text-lg ${active ? "text-forest-dark dark:text-gold" : "text-slate-500"}`}>{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
    </div>
  </div>
);

const ProgressRow = ({ name, chapter, progress, slug, readBtnText }: any) => (
  <div className="p-5 rounded-2xl border border-border bg-background hover:border-forest/40 transition-colors flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex-grow w-full">
      <div className="text-start mb-2">
        <h3 className="text-xl font-extrabold text-forest-dark font-amiri mb-1">{name}</h3>
        <p className="text-slate-500 text-sm font-medium">{chapter}</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="text-xs font-bold text-forest w-8 ltr:text-left rtl:text-right">{progress}%</span>
        <div className="flex-grow bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div className="bg-forest h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
    <Link to={`/prophetstory/${slug}`} className="px-5 py-2 flex-shrink-0 bg-forest/10 hover:bg-forest text-forest hover:text-white rounded-xl font-bold transition-colors text-sm">
      {readBtnText}
    </Link>
  </div>
);