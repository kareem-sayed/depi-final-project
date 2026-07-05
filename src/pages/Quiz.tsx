import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { prophetQuizzes } from "../data/prophetQuizzes";
import { prophets } from "../data/prophets";

const arabicLetters = ["أ", "ب", "ج", "د", "هـ", "و"];

export default function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const quiz = id ? prophetQuizzes[id] : undefined;
  const prophet = prophets.find((p) => p.slug === id);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!quiz || !prophet) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <i className="fa-solid fa-circle-exclamation text-4xl text-muted-foreground/50"></i>
        <p className="text-lg text-muted-foreground">لا يوجد اختبار متاح لهذا النبي حالياً</p>
        <Link to="/prophets" className="text-primary font-semibold hover:underline text-sm">
          ← العودة لصفحة الأنبياء
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
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/prophets" className="hover:text-primary transition-colors">الأنبياء</Link>
            <span>/</span>
            <Link to={`/prophetstory/${id}`} className="hover:text-primary transition-colors">{prophet.name.ar}</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">الاختبار</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="text-center pt-10 pb-6 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          اختبار قصة {prophet.name.ar}
        </h1>
        <p className="text-muted-foreground text-sm">
          اختبر فهمك للقصة بأسئلة بسيطة
        </p>
      </div>

      {/* Quiz Card */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-card border border-border/30 rounded-3xl p-6 md:p-10 shadow-sm">

          {/* Progress Section */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground font-medium">{progressPercent}%</span>
            <span className="text-sm font-semibold text-foreground">
              سؤال {currentQuestion + 1} من {totalQuestions}
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
            {question.q.ar}
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
                  <span className="font-semibold text-sm md:text-base flex-1">{option.ar}</span>
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
            {isLastQuestion ? "إنهاء الاختبار" : "السؤال التالي"}
          </button>
        </div>
      </div>
    </div>
  );
}

