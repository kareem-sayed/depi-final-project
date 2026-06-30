import HeadSection from "./HeadSection";
import Box from "./Box";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-background/40" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <HeadSection 
          title="المميزات" 
          position="text-center font-serif text-3xl md:text-4xl text-primary font-bold mb-12 w-full flex justify-center" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          <Box 
            icon="fa-solid fa-clock text-primary text-xl" 
            HeadLine="Timeline تفاعلي" 
            text="استعرض قصة كل نبي من خلال خط زمني تفاعلي يساعدك على متابعة الأحداث خطوة بخطوة." 
          />

          <Box 
            icon="fa-solid fa-book text-primary text-xl" 
            HeadLine="آيات من القرآن" 
            text="كل حدث مدعوم بآيات من القرآن الكريم لزيادة الفهم والتأكد من صحة المعلومات." 
          />

          <Box 
            icon="fa-solid fa-square-check text-primary text-xl" 
            HeadLine="اختبارات (Quiz)" 
            text="اختبر فهمك بعد كل قصة من خلال أسئلة بسيطة تساعدك على تثبيت المعلومات." 
          />

          <Box 
            icon="fa-solid fa-chart-simple text-primary text-xl" 
            HeadLine="تتبع التقدم" 
            text="تابع تقدمك أثناء استكشاف القصص واعرف نسبة إنجازك في كل قصة." 
          />

        </div>

      </div>
    </section>
  );
}