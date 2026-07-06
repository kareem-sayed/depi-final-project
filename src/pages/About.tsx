import Box from "../components/Box";
import HeadPage from "../components/HeadPage";
import HeadSection from "../components/HeadSection";
import IconBox from "../components/IconBox";
import MainButton from "../components/MainButton";
import Sbox from "../components/SBox";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      pageTitle: "عن المشروع",
      description:
        '"رحلة عبر قصص الأنبياء" هو موقع تفاعلي يهدف إلى تقديم قصص الأنبياء بأسلوب حديث يجمع بين المعرفة والمتعة.',
      ideaTitle: "فكرة المشروع",
      ideaText:
        "انطلقت فكرة المشروع من الحاجة إلى تقديم المحتوى الديني بشكل يناسب العصر الرقمي.",
      features: ["قصص منظمة", "خط زمني", "آيات قرآنية", "اختبارات"],
      whyTitle: "ليه عملنا الموقع؟",
      boxes: [
        {
          title: "الهدف من المشروع",
          text: "تقديم قصص الأنبياء بطريقة حديثة وتفاعلية",
          icon: "fa-solid fa-bullseye",
        },
        {
          title: "الفائدة من الموقع",
          text: "تسهيل الفهم والتذكر",
          icon: "fa-solid fa-lightbulb",
        },
        {
          title: "التميز بالمشروع",
          text: "التجربة البصرية والتفاعلية",
          icon: "fa-solid fa-cube",
        },
      ],
      teamTitle: "فريق العمل",
      teamDesc: "الأشخاص اللي ورا هذا المشروع",
      teamMempers: [
        {
          Name: "محمد أحمد حسبو",
          Jop: "مطور Back-End",
          icon: "Mohamed Hasabo.jpeg",
        },
        {
          Name: "مصطفى صبحي فتحي",
          Jop: "مطور Front-End",
          icon: "Mostafa Sobhy.jpg",
        },
        {
          Name: "محمد أحمد رأفت",
          Jop: "مطور Front-End",
          icon: "Mohamed Raafat.jpg",
        },
        {
          Name: "كريم سيد محمد",
          Jop: "مطور Front-End",
          icon: "Kareem Sayed.jpeg",
        },
        {
          Name: "أحمد علاء عبد الوهاب",
          Jop: "مطور Front-End",
          icon: "Ahmed Alaa.jpeg",
        },
      ],
      startTitle: "جاهز تبدأ الرحلة؟",
      startText: "استكشف قصص الأنبياء واختبر معلوماتك الآن",
      button: "ابدأ الاستكشاف",
    },
    en: {
      pageTitle: "About The Project",
      description:
        "A Journey Through the Stories of Prophets is an interactive platform designed to present stories in a modern and engaging way.",
      ideaTitle: "Project Idea",
      ideaText:
        "The idea started from the need to present religious content in a way that fits the digital age.",
      features: ["Organized Stories", "Timeline", "Quran Verses", "Quizzes"],
      whyTitle: "Why did we build this?",
      boxes: [
        {
          title: "Project Goal",
          text: "Presenting prophetic stories in a modern interactive way",
          icon: "fa-solid fa-bullseye",
        },
        {
          title: "Benefit",
          text: "Making understanding and memorization easier",
          icon: "fa-solid fa-lightbulb",
        },
        {
          title: "Uniqueness",
          text: "Visual and interactive experience",
          icon: "fa-solid fa-cube",
        },
      ],
      teamTitle: "Our Team",
      teamDesc: "The people behind this project",
      teamMempers: [
        {
          Name: "Mohamed Ahmed Hasabo",
          Jop: "Back-End Developer",
          icon: "Mohamed Hasabo.jpeg",
        },
        {
          Name: "Mostafa Sobhy Fathy",
          Jop: "Front-End Developer",
          icon: "Mostafa Sobhy.jpg",
        },
        {
          Name: "Mohamed Ahmed Raafat",
          Jop: "Front-End Developer",
          icon: "Mohamed Raafat.jpg",
        },
        {
          Name: "Kareem Sayed Mohamed",
          Jop: "Front-End Developer",
          icon: "Kareem Sayed.jpeg",
        },
        {
          Name: "Ahmed Alaa Abdelwahab",
          Jop: "Front-End Developer",
          icon: "Ahmed Alaa.jpeg",
        },
      ],
      startTitle: "Ready to start the journey?",
      startText: "Explore and test your knowledge now",
      button: "Start Exploring",
    },
  };

  const cont = content[lang];

  return (
    <>
      <main className="flex-1 pt-10 mt-20 pb-16 px-4" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <header className="text-center mb-16">
            <IconBox Icon="fa-regular fa-lightbulb" position="mx-auto" />
            <HeadPage title={cont.pageTitle} />
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {cont.description}
            </p>
          </header>

          {/* Idea */}
          <section className="rounded-3xl border p-8 mb-10">
            <HeadSection title={cont.ideaTitle} />
            <p>{cont.ideaText}</p>
            <span className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5">
              <Sbox icon="fa-solid fa-book" text={cont.features[0]} />
              <Sbox icon="fa-solid fa-clock" text={cont.features[1]} />
              <Sbox icon="fa-solid fa-book-quran" text={cont.features[2]} />
              <Sbox icon="fa-solid fa-brain" text={cont.features[3]} />
            </span>
          </section>

          {/* Why */}
          <section className="mb-10">
            <HeadSection title={cont.whyTitle} position="text-center" />
            <span className="grid md:grid-cols-3 gap-5">
              {cont.boxes.map((box) => (
                <Box icon={box.icon} HeadLine={box.title} text={box.text} />
              ))}
            </span>
          </section>

          {/* Team */}
          <section className="mb-10 text-center">
            <IconBox Icon="fa-solid fa-users" position="mx-auto mb-6" />
            <HeadSection title={cont.teamTitle} position="text-center" />
            <p className="text-muted-foreground text-center">{cont.teamDesc}</p>
            <span className="grid md:grid-cols-3 gap-5 pt-5 text-center">
              {cont.teamMempers.map((member) => (
                <Box
                  icon={`./src/assets/team/${member.icon}`}
                  HeadLine={member.Name}
                  text={member.Jop}
                  position="mx-auto"
                  img={true}
                />
              ))}
            </span>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border p-8 text-center">
            <HeadSection title={cont.startTitle} />
            <p className="mb-6">{cont.startText}</p>
            <MainButton text={cont.button} to="/prophets" />
          </section>
        </div>
      </main>
    </>
  );
}
