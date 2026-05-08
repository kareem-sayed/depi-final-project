import { useState } from "react";
import MainButton from "../components/MainButton";
import SecondryButton from "../components/SecondryButton";
import useLanguageDirection from "../hooks/useLanguageDirection";

export default function NotFound() {
  const [lang, setLang] = useState<"AR" | "EN">("AR");

  const toggleLang = () => {
    setLang(prev => (prev === "AR" ? "EN" : "AR"));
  };

  useLanguageDirection(lang);
  
  return (
    <div className="min-h-screen flex flex-col bg-sand-gradient ${}">
      <button
        onClick={toggleLang}
        className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold"
      >
        {lang === "AR" ? "EN" : "AR"}
      </button>

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="container max-w-3xl text-center">

          <h1 className="font-amiri text-7xl md:text-9xl font-bold">
            {lang === "AR"
                ? "٤٠٤"
                : "404"
            }
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold my-5">
            {lang === "AR"
                ? "ضللتَ الطريق في الصحراء"
                : "You lost your way in the desert"}
          </h2>

          <div className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <p className="">
                {lang === "AR"
                ? `يبدو أن الصفحة التي تبحث عنها اختفت بين رمال الصحراء،`
                : "The page you are looking for has vanished in the desert sands,"}
            </p>
            <p className="">
                {lang === "AR"
                ? `لكن لا تقلق — رحلتك في قصص الأنبياء لم تنتهِ بعد.`
                : "but your journey in the stories of the prophets continues."}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <MainButton
              text={lang === "AR" ? "العودة للرئيسية" : "Go Home"}
              icon="fas fa-home"
              to="/"
            />

            <SecondryButton
                text={lang === "AR" ? "تصفح قصص الأنبياء" : "Browse Stories"}
                icon="fas fa-book"
                to="/"
            />
          </div>

        </div>
      </main>
    </div>
  );
}