import MainButton from "../components/MainButton";
import SecondryButton from "../components/SecondryButton";
import { useLanguage } from "../context/LanguageContext";

const content = {
  ar: {
    errorCode: "٤٠٤",
    title: "ضللتَ الطريق في الصحراء",
    description1: "يبدو أن الصفحة التي تبحث عنها اختفت بين رمال الصحراء،",
    description2: "لكن لا تقلق — رحلتك في قصص الأنبياء لم تنتهِ بعد.",
    homeButton: "العودة للرئيسية",
    prophetsButton: "تصفح قصص الأنبياء",
  },

  en: {
    errorCode: "404",
    title: "You Lost Your Way in the Desert",
    description1: "The page you are looking for has vanished in the desert sands,",
    description2: "but your journey through the Stories of the Prophets continues.",
    homeButton: "Go Home",
    prophetsButton: "Browse Prophets Stories",
  },
};

export default function NotFound() {
    const { lang } = useLanguage();
    const t = content[lang];
  
  return (
    <div className="min-h-screen flex flex-col bg-sand-gradient ${}">
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="container max-w-3xl text-center">

          <h1 className="font-amirvci text-7xl md:text-9xl font-bold">
            {t.errorCode}
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold my-5">
            {t.title}
          </h2>

          <div className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <p className="">
                {t.description1}
            </p>
            <p className="">
                {t.description2}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <MainButton
              text={t.homeButton}
              iconornot={true}
              icon="fas fa-home"
              to="/"
            />

            <SecondryButton
                text={t.prophetsButton}
                icon="fas fa-book"
                to="/prophets"
            />
          </div>

        </div>
      </main>
    </div>
  );
}