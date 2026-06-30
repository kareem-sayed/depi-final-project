import { Link } from "react-router-dom";
import HeadSection from "./HeadSection";
import IconBox from "./IconBox";

const prophetsData = [
  { id: "1", name: "سيدنا آدم", brief: "أول إنسان وأول نبي خلقه الله، عاش في الجنة ثم نزل إلى الأرض ليبدأ حياة البشر، وعلم الناس عبادة الله." },
  { id: "2", name: "سيدنا نوح", brief: "أرسل لقومه يدعوهم لعبادة الله، لكنهم كذبوه، فكانت النهاية بطوفان عظيم نجا منه هو ومن آمن معه." },
  { id: "3", name: "سيدنا إبراهيم", brief: "يُعرف بأبو الأنبياء، دعا إلى التوحيد وكسر الأصنام، وابتلي بعدة اختبارات عظيمة ونجح فيها." },
  { id: "4", name: "سيدنا موسى", brief: "أرسل إلى فرعون لدعوته إلى الله، وحدثت معه معجزات عظيمة مثل شق البحر وإنقاذ بني إسرائيل." },
  { id: "5", name: "سيدنا يوسف", brief: "قصة حياته مليئة بالأحداث، من إلقائه في البئر إلى أن أصبح عزيز مصر، ويُعرف بالصبر والحكمة." },
  { id: "6", name: "سيدنا يونس", brief: "ترك قومه غاضبًا فابتلاه الله بأن ابتلعه الحوت، ثم دعا الله فنجاه، وتعلم الصبر والرجوع إلى الله." }
];

export default function ProphetsPreview() {
  return (
    <section className="py-16 bg-background" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <HeadSection 
          title="الأنبياء" 
          position="text-center font-serif text-3xl md:text-4xl text-primary font-bold mb-12 w-full flex justify-center" 
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {prophetsData.map((prophet) => (
            <Link 
              key={prophet.id} 
              to={`/prophetstory/${prophet.id}`} 
              className="group flex flex-col justify-between h-full bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 p-8 text-center items-center"
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-center w-full mb-4">
                  <IconBox Icon="fa-solid fa-book-open text-primary text-xl" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-foreground mb-2">
                  {prophet.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prophet.brief}
                </p>
              </div>
              
              <div className="mt-6 w-full flex justify-center">
                <span className="bg-emerald-800 text-white text-xs px-6 py-2.5 rounded-md font-semibold shadow-sm group-hover:bg-emerald-700 transition-colors inline-block">
                  ابدأ القصة
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}