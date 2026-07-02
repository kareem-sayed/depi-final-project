import HeroSection from "../components/HeroSection";
import ProphetsPreview from "../components/ProphetsPreview";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div
      className="min-h-screen bg-stone-50 text-slate-800"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <main>
        <HeroSection />
        <ProphetsPreview />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}