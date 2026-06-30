import HeadSection from "./HeadSection";
import MainButton from "./MainButton";

export default function CTASection() {
  return (
    <section className="py-16 bg-background" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <HeadSection 
          title="ابدأ رحلتك الآن" 
          position="text-center font-serif text-3xl md:text-4xl text-foreground font-bold mb-8 w-full flex justify-center" 
        />
        <div className="w-full flex justify-center transform scale-110 md:scale-125 origin-center my-4">
          <MainButton text="ابدأ رحلتك الآن" to="/prophets" />
        </div>
      </div>
    </section>
  );
}