import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const content = {
  ar: {
    greeting: "أهلاً بك من جديد 👋",
    progressText: (p: number) =>
      `أكملت ${p}% من رحلتك. كمل القراءة وتعلّم المزيد من قصص الأنبياء اليوم.`,
    continueReadingBtn: "أكمل القراءة",
    stats: {
      read: "قصص مقروءة",
      tests: "اختبارات مكتملة",
      days: "أيام متتالية",
      points: "متوسط الدرجات",
    },
    achievementsTitle: "الإنجازات",
    achievementDefs: [
      { code: "first_story", title: "أول قصة", desc: "أتمم قراءة أول قصة" },
      { code: "week_streak", title: "أسبوع متواصل", desc: "7 أيام متتالية" },
      {
        code: "perfect_score",
        title: "علامة كاملة",
        desc: "احصل على 100% في متوسط النقاط",
      },
      { code: "avid_reader", title: "قارئ نهم", desc: "أكمل 10 قصص" },
    ],
    continueReadingTitle: "تابع القراءة",
    viewAll: "الكل",
    readBtn: "قراءة",
    loading: "جاري التحميل...",
    error: "حدث خطأ أثناء تحميل البيانات",
    bookmarksTitle: "القصص المفضلة",
    noBookmarks: "لم تقم بحفظ أي قصص في المفضلة بعد.",
    readNow: "اقرأ الآن",
    guestTitle: "سجل دخولك لمتابعة رحلتك",
    guestSubtitle:
      "أنشئ حسابًا أو سجل دخولك حتى تتمكن من حفظ تقدمك، ومتابعة القراءة، والوصول إلى الإنجازات والقصص المفضلة.",
    loginBtn: "تسجيل الدخول",
    signupBtn: "إنشاء حساب",
  },
  en: {
    greeting: "Welcome back 👋",
    progressText: (p: number) =>
      `You have completed ${p}% of your journey. Keep reading and learn more about the prophets today.`,
    continueReadingBtn: "Continue Reading",
    stats: {
      read: "Stories Read",
      tests: "Quizzes",
      days: "Day Streak",
      points: "Average Score",
    },
    achievementsTitle: "Achievements",
    achievementDefs: [
      {
        code: "first_story",
        title: "First Story",
        desc: "Finished reading the first story",
      },
      {
        code: "week_streak",
        title: "Weekly Streak",
        desc: "7 consecutive days",
      },
      {
        code: "perfect_score",
        title: "Perfect Score",
        desc: "Get 100% on average score",
      },
      {
        code: "avid_reader",
        title: "Avid Reader",
        desc: "Complete 10 stories",
      },
    ],
    continueReadingTitle: "Continue Reading",
    viewAll: "View All",
    readBtn: "Read",
    loading: "Loading...",
    error: "Something went wrong while loading data",
    bookmarksTitle: "Bookmarked Stories",
    noBookmarks: "You haven't bookmarked any stories yet.",
    readNow: "Read Now",
    guestTitle: "Sign in to continue your journey",
    guestSubtitle:
      "Create an account or sign in to save your reading progress, unlock achievements, and access your bookmarked stories.",
    loginBtn: "Login",
    signupBtn: "Sign Up",
  },
};

interface DashboardStats {
  storiesRead?: number;
  quizzesCompleted?: number;
  dayStreak?: number;
  points?: number;
  userName?: string;
}
interface AchievementItem {
  code?: string;
  type?: string;
  earned?: boolean;
  unlocked?: boolean;
}
interface ProgressItem {
  slug: string;
  name?: string;
  chapter?: string;
  progress: number;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = content[lang as keyof typeof content];

  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [progressItems, setProgressItems] = useState<ProgressItem[]>([]);
  const [bookmarkedStories, setBookmarkedStories] = useState<any[]>([]);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userId = localStorage.getItem("userId");

  const updateAndGetStreak = () => {
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    let streak = parseInt(localStorage.getItem(`dayStreak_${userId}`) || "0");
    const lastActive = localStorage.getItem(`lastActiveDate_${userId}`);

    if (lastActive === todayStr) {
      return streak > 0 ? streak : 1;
    }

    if (!lastActive) {
      localStorage.setItem(`lastActiveDate_${userId}`, todayStr);
      localStorage.setItem(`dayStreak_${userId}`, "1");
      return 1;
    }

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastActive === yesterdayStr) {
      streak += 1;
      localStorage.setItem(`lastActiveDate_${userId}`, todayStr);
      localStorage.setItem(`dayStreak_${userId}`, streak.toString());
      return streak;
    } else {
      localStorage.setItem(`lastActiveDate_${userId}`, todayStr);
      localStorage.setItem(`dayStreak_${userId}`, "1");
      return 1;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      navigate("/", { replace: true });
      return;
    }

    const storedName = localStorage.getItem(`userName_${userId}`);
    if (storedName) {
      setUserName(storedName);
    } else {
      setUserName(lang === "ar" ? "قارئنا العزيز" : "Dear Reader");
    }

    const fetchDashboardData = async () => {
      setLoading(true);
      setError("");

      if (!token) {
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      setIsLoggedIn(true);

      try {
        const storedProgress = JSON.parse(
          localStorage.getItem(`storyProgress_${userId}`) || "{}",
        );

        const formattedProgress = Object.entries(storedProgress).map(
          ([slug, item]: any) => ({
            slug,
            name: lang === "ar" ? item.name.ar : item.name.en,
            chapter:
              lang === "ar"
                ? `الفصل ${item.currentChapter}`
                : `Chapter ${item.currentChapter}`,
            progress: Math.round(
              (item.currentChapter / item.totalChapters) * 100,
            ),
          }),
        );

        setProgressItems(formattedProgress);

        const currentStreak = updateAndGetStreak();

        const completedStories = Object.values(storedProgress).filter(
          (item: any) => item.completed,
        ).length;

        let finalQuizzesCompleted = 0;
        let finalPoints = 0;

        if (token) {
          try {
            const quizRes = await fetch("https://backenddepi-production.up.railway.app/api/quiz-results", {
              headers: { "Authorization": `Bearer ${token}` }
            });
            const quizData = await quizRes.json();
            
            if (quizData.success) {
              const resultsArray = quizData.data?.results || quizData.data || [];
              finalQuizzesCompleted = Array.isArray(resultsArray) ? resultsArray.length : 0;
              
              const totalScore = Array.isArray(resultsArray) 
                ? resultsArray.reduce((sum: number, q: any) => sum + (q.score || 0), 0) 
                : 0;
              
              finalPoints = finalQuizzesCompleted > 0 ? Math.round(totalScore / finalQuizzesCompleted) : 0;
            }
          } catch (err) {
            console.error("Error fetching quiz results:", err);
          }
        }

        setStats({
          storiesRead: completedStories,
          quizzesCompleted: finalQuizzesCompleted,
          dayStreak: currentStreak,
          points: finalPoints,
        });

        setAchievements([]);

        if (token) {
          const storedBookmarks = JSON.parse(
            localStorage.getItem(`bookmarks_${userId}`) || "[]",
          );

          const formattedBookmarks = storedBookmarks.map((item: any) => ({
            slug: item.id,
            name: lang === "ar" ? item.name.ar : item.name.en,
          }));

          setBookmarkedStories(formattedBookmarks);
        }
      } catch (err: any) {
        setError(err.message || t.error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate, lang, userId]);

  const readCount = stats?.storiesRead ?? 0;
  const progressPercentage = Math.round((readCount / 25) * 100);

  const isAchievementActive = (code: string) => {
    const earnedFromServer = achievements.some((a: any) => {
      const matchCode = a.code === code || a.type === code;
      return (
        matchCode &&
        (a.earned === true || a.unlocked === true || a.status === "earned")
      );
    });

    if (earnedFromServer) return true;

    const points = stats?.points ?? 0;
    const streak = stats?.dayStreak ?? 0;

    if (code === "first_story" && readCount >= 1) return true;
    if (code === "avid_reader" && readCount >= 10) return true;
    if (code === "week_streak" && streak >= 7) return true;
    if (code === "perfect_score" && points >= 100 && points > 0) return true;

    return false;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] mt-20">
        <p className="text-muted-foreground text-lg font-semibold">
          {t.loading}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] mt-20">
        <p className="text-destructive text-lg font-semibold">{error}</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="min-h-[80vh] w-full flex flex-col items-center justify-center px-6 py-20 mt-20 font-cairo"
      >
        <div className="max-w-2xl w-full bg-card border border-border/40 rounded-3xl p-8 md:p-12 shadow-lg text-center backdrop-blur-md">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
            <i className="fa-solid fa-graduation-cap text-4xl text-emerald-800"></i>
          </div>

          <h1 className="text-3xl font-extrabold text-foreground mb-4">
            {t.guestTitle}
          </h1>

          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
            {t.guestSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/95 font-bold rounded-xl shadow-md transition-all"
            >
              {t.loginBtn}
            </Link>

            <Link
              to="/signup"
              className="px-8 py-3.5 bg-transparent border border-border text-foreground hover:bg-muted font-bold rounded-xl shadow-sm transition-all"
            >
              {t.signupBtn}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="container mx-auto px-4 py-10 mt-20 font-cairo max-w-7xl relative"
    >
      {/*Hero Section */}
      <div className="bg-forest text-white rounded-[2rem] p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-card-hover mt-12 md:mt-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-forest-dark/50 to-transparent pointer-events-none"></div>

        <div className="relative z-10 w-full text-start md:w-2/3">
          <p className="text-gold-light text-lg font-bold mb-2.5">
            {t.greeting}
          </p>
          <h1 className="text-4xl md:text-4xl font-extrabold font-amiri mb-3">
            {userName}
          </h1>
          <p className="text-gold-light text-lg md:text-xl opacity-80">
            {t.progressText(progressPercentage)}
          </p>
        </div>

        <div className="relative z-10 w-full md:w-auto mt-6 md:mt-0 flex gap-4">
          <Link
            to="/prophets"
            className="px-6 py-3 bg-gold text-forest-dark hover:bg-gold-light rounded-xl font-extrabold transition-colors shadow-md flex items-center gap-2"
          >
            {t.continueReadingBtn}
            <span className="rtl:hidden inline">&rarr;</span>
            <span className="ltr:hidden inline">&larr;</span>
          </Link>
        </div>
      </div>

      {/*Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
        <StatCard
          color="text-forest"
          value={(stats?.storiesRead ?? 0).toString()}
          label={t.stats.read}
        />
        <StatCard
          color="text-amber-600"
          value={(stats?.quizzesCompleted ?? 0).toString()}
          label={t.stats.tests}
        />
        <StatCard
          color="text-red-500"
          value={(stats?.dayStreak ?? 0).toString()}
          label={t.stats.days}
        />
        <StatCard
          color="text-gold-dark"
          value={(stats?.points ?? 0).toString()}
          label={t.stats.points}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-8">
        {/*Achievements */}
        <div className="lg:col-span-1 bg-card rounded-3xl p-6 border border-border shadow-sm">
          <div className="mb-6 border-b border-border pb-4">
            <h2 className="text-2xl font-extrabold text-forest-dark text-start">
              {t.achievementsTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {t.achievementDefs.map((def) => (
              <AchievementCard
                key={def.code}
                active={isAchievementActive(def.code)}
                title={def.title}
                desc={def.desc}
              />
            ))}
          </div>
        </div>

        {/*Continue Reading */}
        <div className="lg:col-span-2 bg-card rounded-3xl p-6 md:p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <h2 className="text-2xl font-extrabold text-forest-dark">
              {t.continueReadingTitle}
            </h2>
            <Link
              to="/prophets"
              className="text-forest font-bold hover:underline text-sm flex items-center gap-1"
            >
              {t.viewAll}
              <span className="rtl:hidden inline">&rarr;</span>
              <span className="ltr:hidden inline">&larr;</span>
            </Link>
          </div>

          <div className="space-y-6">
            {progressItems.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-6">
                {lang === "ar" ? "لا يوجد تقدم بعد" : "No progress yet"}
              </p>
            ) : (
              progressItems.map((item, index) => (
                <ProgressRow
                  key={index}
                  name={item.name ?? item.slug}
                  chapter={item.chapter ?? ""}
                  progress={item.progress}
                  slug={item.slug}
                  readBtnText={t.readBtn}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-sm">
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center">
              <i className="fa-solid fa-bookmark text-lg"></i>
            </div>
            <h2 className="text-2xl font-extrabold text-forest-dark">
              {t.bookmarksTitle}
            </h2>
          </div>
        </div>

        {bookmarkedStories.length === 0 ? (
          <p className="text-muted-foreground text-sm text-center py-6">
            {t.noBookmarks}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmarkedStories.map((item, index) => (
              <BookmarkCard
                key={index}
                name={item.name}
                slug={item.slug}
                readBtnText={t.readNow}
              />
            ))}
          </div>
        )}
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
  <div
    className={`p-4 rounded-2xl border transition-colors ${
      active
        ? "bg-amber-50 dark:bg-gold/10 border-gold/40"
        : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60"
    }`}
  >
    <div className="text-start">
      <h4
        className={`font-bold text-lg ${active ? "text-forest-dark dark:text-gold" : "text-slate-500"}`}
      >
        {title}
      </h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
    </div>
  </div>
);

const ProgressRow = ({ name, chapter, progress, slug, readBtnText }: any) => (
  <div className="p-5 rounded-2xl border border-border bg-background hover:border-forest/40 transition-colors flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex-grow w-full">
      <div className="text-start mb-2">
        <h3 className="text-xl font-extrabold text-forest-dark font-amiri mb-1">
          {name}
        </h3>
        <p className="text-slate-500 text-sm font-medium">{chapter}</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="text-xs font-bold text-forest w-8 ltr:text-left rtl:text-right">
          {progress}%
        </span>
        <div className="flex-grow bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-forest h-full rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
    <Link
      to={`/prophetstory/${slug}`}
      className="px-5 py-2 flex-shrink-0 bg-forest/10 hover:bg-forest text-forest hover:text-white rounded-xl font-bold transition-colors text-sm"
    >
      {readBtnText}
    </Link>
  </div>
);

const BookmarkCard = ({ name, slug, readBtnText }: any) => (
  <div className="p-5 rounded-2xl border border-border bg-background hover:border-gold/60 transition-colors flex items-center justify-between gap-4 shadow-sm group">
    <div className="flex items-center gap-4">
      <h3 className="text-lg font-extrabold text-forest-dark font-amiri">
        {name}
      </h3>
    </div>
    <Link
      to={`/prophetstory/${slug}`}
      className="px-4 py-2 bg-gold/10 hover:bg-gold text-forest-dark rounded-xl font-bold transition-colors text-sm whitespace-nowrap"
    >
      {readBtnText}
    </Link>
  </div>
);