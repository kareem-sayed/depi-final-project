import MainButton from "./MainButton";
import heroBg from "../assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative flex h-[500px] items-center justify-center bg-cover bg-center md:h-[550px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-background/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight text-emerald-900 sm:text-5xl md:text-6xl">
          رحلة عبر قصص الأنبياء
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-foreground/80 sm:text-lg">
          استكشف حياة الأنبياء بطريقة تفاعلية وجذابة
        </p>
        <div className="mt-8 flex justify-center">
          <MainButton text="ابدأ الاستكشاف" to="/prophets" />
        </div>
      </div>
    </section>
  );
}