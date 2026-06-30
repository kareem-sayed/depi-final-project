import HeroSection from '../components/HeroSection';
import ProphetsPreview from '../components/ProphetsPreview';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans" dir="rtl">
      <main>
        <HeroSection />
        <ProphetsPreview />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
        <Footer/>
      </main>
      
    </div>
  );
}