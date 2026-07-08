import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import type { Prophet } from "../types/Prophet";
import type { ProphetQuiz } from "../types/ProphetQuiz";

const arabicLetters = {
  ar: ["أ", "ب", "ج", "د"],
  en: ["A", "B", "C", "D"],
}

const content = {
  ar: {
    noQuiz: "لا يوجد اختبار متاح لهذا النبي حالياً",
    backToProphets: "العودة لصفحة الأنبياء",

    prophets: "الأنبياء",
    quiz: "الاختبار",

    quizTitle: "اختبار قصة",
    quizSubtitle: "اختبر فهمك للقصة بأسئلة بسيطة",

    question: "سؤال",
    of: "من",

    finishQuiz: "إنهاء الاختبار",
    submitting: "جاري التصحيح...",
    nextQuestion: "السؤال التالي",
    
    resultTitle: "نتيجة الاختبار",
    passedMsg: "ممتاز! لقد اجتزت الاختبار بنجاح 🏆",
    failedMsg: "لا بأس، يمكنك إعادة القراءة والمحاولة مرة أخرى 💪",
    correctMsg: "إجابة صحيحة من أصل",
    backToStory: "العودة للقصة",
    goToDashboard: "لوحة التحكم"
  },

  en: {
    noQuiz: "No quiz is currently available for this prophet.",
    backToProphets: "Back to Prophets",

    prophets: "Prophets",
    quiz: "Quiz",

    quizTitle: "Quiz of",
    quizSubtitle: "Test your understanding of the story with a few simple questions.",

    question: "Question",
    of: "of",

    finishQuiz: "Finish Quiz",
    submitting: "Submitting...",
    nextQuestion: "Next Question",
    
    resultTitle: "Quiz Result",
    passedMsg: "Excellent! You passed the quiz successfully 🏆",
    failedMsg: "It's okay, you can read again and retry 💪",
    correctMsg: "correct answers out of",
    backToStory: "Back to Story",
    goToDashboard: "Dashboard"
  },
};

export default function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizId, setQuizId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState<{score: number, correctAnswers: number, totalQuestions: number, passed: boolean} | null>(null);

  const [prophets, setProphets] = useState<Prophet[]>([]);
  const [quiz, setQuiz] = useState<ProphetQuiz[]>([]);
  const [loadingProphets, setLoadingProphets] = useState(true);
  const [loadingQuiz, setLoadingQuiz] = useState(true);

  useEffect(() => {
    const fetchProphets = async () => {
      try {
        const res = await fetch(
          "https://backenddepi-production.up.railway.app/api/prophets"
        );
        const data = await res.json();
        setProphets(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProphets(false);
      }
    };
    fetchProphets();
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchQuizes = async () => {
      try {
        const res = await fetch(
          `https://backenddepi-production.up.railway.app/api/Quizzes/${id}`
        );
        const data = await res.json();
        setQuiz(data.data.questions);
        setQuizId(data.data._id || data.data.id); 
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingQuiz(false);
      }
    };
    fetchQuizes();
  }, [id]);

  const prophet = prophets.find((p) => p.slug === id);
  const { lang } = useLanguage();
  const t = content[lang as keyof typeof content];

  if (loadingProphets || loadingQuiz) {
    return (
      <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-[70vh] flex flex-col items-center justify-center gap-5" >
        <div className="w-14 h-14 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-muted-foreground text-lg font-medium animate-pulse">
          {lang === "ar"
            ? "جاري تحميل الإختبار..."
            : "Loading Quiz..."}
        </p>
      </div>
    );
  }

  if (quiz.length === 0 || !prophet) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <i className="fa-solid fa-circle-exclamation text-4xl text-muted-foreground/50"></i>
        <p className="text-lg text-muted-foreground">{t.noQuiz}</p>
        <Link to="/prophets" className="text-primary font-semibold hover:underline text-sm">
          ← {t.backToProphets}
        </Link>
      </div>
    );
  }

  const totalQuestions = quiz.length;
  const question = quiz[currentQuestion];
  const progressPercent = Math.round((currentQuestion / totalQuestions) * 100);
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  const submitQuiz = async (finalAnswers: number[]) => {
    setIsSubmitting(true);
    const token = localStorage.getItem("token") || localStorage.getItem("auth_token");
    
    try {
      const response = await fetch("https://backenddepi-production.up.railway.app/api/quiz-results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          quizId: quizId,
          answers: finalAnswers
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setQuizResult(data.data);
        setShowResult(true);
        if (data.data.score === 100) {
          localStorage.setItem("perfect_score_achieved", "true");
        }
      } else {
        navigate(`/prophetstory/${id}`);
      }
    } catch (err) {
      console.error("خطأ في إرسال الاختبار:", err);
      navigate(`/prophetstory/${id}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newAnswers);

    if (isLastQuestion) {
      submitQuiz(newAnswers);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  if (showResult && quizResult) {
    return (
      <div className="w-full" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="max-w-2xl mx-auto px-6 py-20 mt-10">
          <div className="bg-card border border-border/30 rounded-3xl p-8 md:p-12 shadow-sm text-center">
            
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm border-4 ${quizResult.passed ? 'bg-gold/10 border-gold text-gold' : 'bg-muted border-muted-foreground/30 text-muted-foreground'}`}>
              <i className={`fa-solid ${quizResult.passed ? 'fa-star' : 'fa-rotate-right'} text-4xl`}></i>
            </div>

            <h2 className="text-3xl font-extrabold text-foreground mb-2">{t.resultTitle}</h2>
            <p className="text-muted-foreground mb-10 text-lg">{quizResult.passed ? t.passedMsg : t.failedMsg}</p>

            <div className="mb-8">
              <span className={`text-7xl font-black ${quizResult.passed ? 'text-primary' : 'text-foreground'}`}>
                {quizResult.score}%
              </span>
            </div>

            <p className="text-lg font-bold text-foreground mb-12 bg-muted/30 py-3 px-6 rounded-2xl inline-block border border-border/50">
              {quizResult.correctAnswers} {t.correctMsg} {quizResult.totalQuestions}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate(`/prophetstory/${id}`)} 
                className="px-8 py-3.5 rounded-xl border-2 border-border font-bold text-foreground hover:bg-muted transition-colors"
              >
                {t.backToStory}
              </button>
              <button 
                onClick={() => navigate(`/dashboard`)} 
                className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                {t.goToDashboard}
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 py-10 mt-20">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/prophets" className="hover:text-primary transition-colors">{t.prophets}</Link>
            <span>/</span>
            <Link to={`/prophetstory/${id}`} className="hover:text-primary transition-colors">{lang === "ar" ? prophet.name.ar : prophet.name.en}</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{t.quiz}</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="text-center pt-10 pb-6 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {t.quizTitle} {lang === "ar" ? prophet.name.ar : prophet.name.en}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t.quizSubtitle}
        </p>
      </div>

      {/* Quiz Card */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-card border border-border/30 rounded-3xl p-6 md:p-10 shadow-sm">

          {/* Progress Section */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground font-medium">{progressPercent}%</span>
            <span className="text-sm font-semibold text-foreground">
              {lang === "ar" ? `سؤال ${currentQuestion + 1} من ${totalQuestions}` : `Question ${currentQuestion + 1} of ${totalQuestions}`}
            </span>
          </div>
          <div className="w-full h-2 bg-muted/50 rounded-full mb-8 overflow-hidden" dir="ltr">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Question */}
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
            {lang === "ar" ? question.question.ar : question.question.en}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option: { ar: string; en: string }, index: number) => {
              const isSelected = selectedOption === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedOption(index)}
                  className={`w-full flex items-center gap-3 rounded-xl border px-5 py-4 text-right transition-all cursor-pointer
                    ${isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-white border-border/60 hover:border-primary/40 hover:bg-primary/5 text-foreground"
                    }`}
                >
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                      ${isSelected
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted/40 text-muted-foreground"
                      }`}
                  >
                    {lang === "ar" ? arabicLetters.ar[index] : arabicLetters.en[index]}
                  </span>
                  <span className="font-semibold text-sm md:text-base flex-1"><p className="w-fit">{lang === "ar" ? option.ar : option.en}</p></span>
                </button>
              );
            })}
          </div>

          {/* Next / Finish Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={selectedOption === null || isSubmitting}
            className={`w-full py-3.5 font-bold rounded-xl text-base transition-all flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
              ${selectedOption !== null && !isSubmitting
                ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
          >
            {isSubmitting && (
               <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            )}
            {isLastQuestion 
              ? (isSubmitting ? t.submitting : t.finishQuiz) 
              : t.nextQuestion}
          </button>
        </div>
      </div>
    </div>
  );
}