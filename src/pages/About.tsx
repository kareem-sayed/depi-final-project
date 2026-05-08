import Box from "../components/Box";
import HeadPage from "../components/HeadPage";
import HeadSection from "../components/HeadSection";
import IconBox from "../components/IconBox";
import MainButton from "../components/MainButton";
import Sbox from "../components/SBox";

export default function About() {
  return (
    <> 
        {/* <NavBar /> */}
        <main className="flex-1 pt-28 pb-16 px-4">
            <div className="container mx-auto max-w-5xl">
                <header className="text-center mb-16">
                    <IconBox Icon="fa-regular fa-lightbulb" position="mx-auto"></IconBox>
                    <HeadPage title="عن المشروع" />
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                      "رحلة عبر قصص الأنبياء" هو موقع تفاعلي يهدف إلى تقديم قصص الأنبياء بأسلوب حديث يجمع بين المعرفة والمتعة.
                      نسعى إلى تحويل التجربة من مجرد قراءة تقليدية إلى رحلة بصرية وتفاعلية تساعد المستخدم على فهم الأحداث واستيعاب الدروس بشكل أعمق.
                    </p>
                </header>
                <section className="rounded-3xl border border-border bg-card p-8 md:p-12 mb-10 shadow-sm relative">
                    <HeadSection title="فكرة المشروع" />
                    <p className="text-base md:text-lg text-foreground">
                      انطلقت فكرة المشروع من الحاجة إلى تقديم المحتوى الديني بشكل يناسب العصر الرقمي.
                      بدلًا من عرض القصص كنصوص طويلة فقط، نوفر تجربة متكاملة تشمل:
                    </p>
                    <span className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5">
                        <Sbox icon="fa-solid fa-book" text="قصص منظمة" />
                        <Sbox icon="fa-solid fa-clock" text="خط زمني" />
                        <Sbox icon="fa-solid fa-book-quran" text="آيات قرآنية" />
                        <Sbox icon="fa-solid fa-brain" text="اختبارات" />
                    </span>
                </section>
                <section className="mb-10">
                  <HeadSection title="ليه عملنا الموقع؟" position="text-center" />
                  <span className="grid md:grid-cols-3 gap-5">
                    <Box icon="fa-solid fa-bullseye" HeadLine="الهدف من المشروع" text="تقديم قصص الأنبياء بطريقة حديثة وتفاعلية" />
                    <Box icon="fa-solid fa-lightbulb" HeadLine="الفائدة من الموقع" text="تسهيل الفهم والتذكر" />
                    <Box icon="fa-solid fa-cube" HeadLine="التميز بالمشروع" text="التجربة البصرية والتفاعلية" />
                  </span>
                </section>
                <section className="mb-10">
                  <IconBox Icon="fa-solid fa-users" position="mx-auto mb-6"></IconBox>
                  <HeadSection title="فريق العمل" position="text-center" />
                  <p className="text-muted-foreground text-center">
                    الأشخاص اللي ورا هذا المشروع
                  </p>
                  <span className="grid md:grid-cols-3 gap-5 pt-5 text-center">
                    <Box icon="./src/assets/team/Mohamed Hasabo.jpeg" HeadLine="محمد أحمد حسبو" text="مطور Front-End" position="mx-auto" img={true} />
                    <Box icon="./src/assets/team/Mostafa Sobhy.jpg" HeadLine="مصطفى صبحي فتحي" text="مطور Front-End" position="mx-auto" img={true} />
                    <Box icon="./src/assets/team/Mohamed Raafat.jpg" HeadLine="محمد أحمد رأفت" text="مطور Front-End" position="mx-auto" img={true} />
                    <Box icon="./src/assets/team/Kareem Sayed.jpeg" HeadLine="كريم سيد محمد" text="مطور Front-End" position="mx-auto" img={true} />
                    <Box icon="./src/assets/team/Ahmed Ala'a.jpg" HeadLine="أحمد علاء عبد الوهاب" text="مطور Front-End" position="mx-auto" img={true} />
                  </span>
                </section>
                <section className="rounded-3xl border border-border bg-card p-8 md:p-12 text-center mb-10 shadow-sm relative">
                    <HeadSection title="جاهز تبدأ الرحلة؟" />
                    <p className="text-muted-foreground md:text-lg mb-6">استكشف قصص الأنبياء واختبر معلوماتك الآن</p>
                    <MainButton text={"ابدأ الاستكشاف"} to="/prophets"></MainButton>
                </section>
            </div>
        </main>
        {/* <Footer /> */}
    </>
  );
}