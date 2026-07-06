import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { prophetQuizes } from "../data/prophetsQuizes";
import { prophets } from "../data/prophetsList";
import { useLanguage } from "../context/LanguageContext";

const arabicLetters = ["أ", "ب", "ج", "د", "هـ", "و"];

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
    nextQuestion: "السؤال التالي",
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
    nextQuestion: "Next Question",
  },
};

export default function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const quiz = id ? prophetQuizes[id] : undefined;
  const prophet = prophets.find((p: any) => p.slug === id);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const { lang } = useLanguage();
  const t = content[lang];

  if (!quiz || !prophet) {
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

  const handleNext = () => {
    if (isLastQuestion) {
      // Navigate back or to results - for now go back to prophet story
      navigate(`/prophetstory/${id}`);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

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
            {question.options.map((option, index) => {
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
                    {arabicLetters[index]}
                  </span>
                  <span className="font-semibold text-sm md:text-base flex-1">{lang === "ar" ? option.ar : option.en}</span>
                </button>
              );
            })}
          </div>

          {/* Next / Finish Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`w-full py-3.5 font-bold rounded-xl text-base transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
              ${selectedOption !== null
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
          >
            {isLastQuestion ? (lang === "ar" ? "إنهاء الاختبار" : "Finish Quiz") : (lang === "ar" ? "السؤال التالي" : "Next Question")}
          </button>
        </div>
      </div>
    </div>
  );
}

