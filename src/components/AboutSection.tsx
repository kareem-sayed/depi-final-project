import HeadSection from "./HeadSection";

export default function AboutSection() {
  return (
    <section className="py-16 bg-background" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeadSection 
          title="عن الموقع" 
          position="text-center font-serif text-3xl md:text-4xl text-primary font-bold mb-6 w-full flex justify-center" 
        />
        <p className="max-w-4xl mx-auto font-cairo text-base md:text-lg text-muted-foreground leading-loose text-center font-medium">
          يهدف هذا الموقع إلى تقديم قصص الأنبياء بطريقة حديثة وتفاعلية، حيث يمكن للمستخدم استكشاف الأحداث من خلال خط زمني، وفهم الأماكن عبر الخرائط، واختبار معلوماته باستخدام الاختبارات. نسعى إلى جعل التعلم أكثر سهولة ومتعة للجميع.
        </p>
      </div>
    </section>
  );
}