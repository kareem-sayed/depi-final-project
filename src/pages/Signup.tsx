import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const content = {
  ar: {
    welcome: "إنشاء حساب جديد",
    subtitle: "املأ بياناتك للانضمام إلينا",
    description: "أنشئ حسابك المجاني وابدأ تجربة تعليمية ممتعة وتفاعلية مستوحاة من تراثنا الإسلامي.",
    feature1: "تجربة تعليمية ممتعة وتفاعلية",
    feature2: "اختبارات تفاعلية بعد كل نبي",
    feature3: "علّم القصص المفضلة لديك",
    signupTitle: "إنشاء حساب",
    signupDescription: "سجّل بياناتك للانضمام إلينا وابدأ رحلتك التعليمية",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أحمد محمد",
    email: "البريد الإلكتروني",
    emailPlaceholder: "example@email.com",
    password: "كلمة المرور",
    passwordPlaceholder: "********",
    confirmPassword: "تأكيد كلمة المرور",
    confirmPasswordPlaceholder: "********",
    agreeToTerms1: "أوافق على",
    agreeToTerms2: "الشروط والأحكام",
    agreeToTerms3: "و",
    agreeToTerms4: "سياسة الخصوصية",
    signup: "إنشاء الحساب",
    alreadyHaveAccount: "هل لديك حساب بالفعل؟",
    login: "تسجيل الدخول",
    passwordRequirement: "استخدم 8 أحرف على الأقل",
  },
  en: {
    welcome: "Create New Account",
    subtitle: "Fill in your details to join us",
    description: "Create your free account and start an engaging and interactive learning experience inspired by our Islamic heritage.",
    feature1: "Engaging and interactive learning experience",
    feature2: "Interactive quizzes after each prophet",
    feature3: "Teach your favorite stories",
    signupTitle: "Create Account",
    signupDescription: "Register your details to join us and start your learning journey",
    fullName: "Full Name",
    fullNamePlaceholder: "John Doe",
    email: "Email",
    emailPlaceholder: "example@email.com",
    password: "Password",
    passwordPlaceholder: "********",
    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "********",
    agreeToTerms1: "I agree to the",
    agreeToTerms2: "Terms and Conditions",
    agreeToTerms3: "and",
    agreeToTerms4: "Privacy Policy",
    signup: "Sign Up",
    alreadyHaveAccount: "Already have an account?",
    login: "Login",
    passwordRequirement: "Use at least 8 characters",
  },
};

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { lang } = useLanguage();
  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ fullName, email, password, confirmPassword, agreeToTerms });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-12 px-6 py-10 mt-20 max-w-7xl mx-auto"
     dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Right Side: Welcome Info (first in DOM order for RTL so it displays on the right on desktop) */}
      <div className="w-full lg:w-1/2 flex flex-col text-right space-y-6">
        <div className="inline-flex items-center gap-2 bg-secondary/50 text-foreground/80 px-4 py-1.5 rounded-full text-sm font-semibold w-fit mb-2">
          <i className="fa-solid fa-wand-magic-sparkles text-accent"></i>
          <span>{t.welcome}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          {t.subtitle}
        </h1>
        
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
          {t.description}
        </p>
        
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <i className="fa-solid fa-check text-xs"></i>
            </span>
            <span className="text-foreground/90 text-base font-semibold">{t.feature1}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <i className="fa-solid fa-check text-xs"></i>
            </span>
            <span className="text-foreground/90 text-base font-semibold">{t.feature2}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <i className="fa-solid fa-check text-xs"></i>
            </span>
            <span className="text-foreground/90 text-base font-semibold">{t.feature3}</span>
          </div>
        </div>
      </div>

      {/* Left Side: Form Card (second in DOM order for RTL so it displays on the left on desktop) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="w-full max-w-[480px] bg-card border border-border/60 rounded-[2.5rem] p-8 md:p-10 shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">{t.signupTitle}</h2>
            <p className="text-muted-foreground text-sm">{t.signupDescription}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-foreground text-right w-fit">
                {t.fullName}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full
                            ${lang === "ar"
                              ? "text-right pr-11 pl-4"
                              : "text-left pl-11 pr-4"}
                            bg-secondary/15
                            border
                            border-border/80
                            rounded-xl
                            py-3
                            text-foreground
                            placeholder:text-muted-foreground/60
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/20
                            focus:border-primary
                            transition-all
                            text-sm
                            font-medium`}
                  placeholder={t.fullNamePlaceholder}
                />
                <span className={`absolute inset-y-0 ${
                  lang === "ar" ? "right-4" : "left-4"
                } flex items-center pointer-events-none text-muted-foreground/80`}>
                  <i className="fa-regular fa-user text-base"></i>
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-foreground text-right w-fit">
                {t.email}
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full
                            ${lang === "ar"
                              ? "text-right pr-11 pl-4"
                              : "text-left pl-11 pr-4"}
                            bg-secondary/15
                            border
                            border-border/80
                            rounded-xl
                            py-3
                            text-foreground
                            placeholder:text-muted-foreground/60
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/20
                            focus:border-primary
                            transition-all
                            text-sm
                            font-medium`}
                  placeholder={t.emailPlaceholder}
                />
                <span className={`absolute inset-y-0 ${
                  lang === "ar" ? "right-4" : "left-4"
                } flex items-center pointer-events-none text-muted-foreground/80`}>
                  <i className="fa-regular fa-envelope text-base"></i>
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-foreground text-right w-fit">
                {t.password}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full
                            ${lang === "ar"
                              ? "text-right pr-11 pl-4"
                              : "text-left pl-11 pr-4"}
                            bg-secondary/15
                            border
                            border-border/80
                            rounded-xl
                            py-3
                            text-foreground
                            placeholder:text-muted-foreground/60
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/20
                            focus:border-primary
                            transition-all
                            text-sm
                            font-medium`}
                    placeholder={t.passwordPlaceholder}
                />
                <span className={`absolute inset-y-0 ${
                  lang === "ar" ? "right-4" : "left-4"
                } flex items-center pointer-events-none text-muted-foreground/80`}>
                  <i className="fa-solid fa-lock text-base"></i>
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute inset-y-0 ${
                    lang === "ar" ? "left-4" : "right-4"
                  } flex items-center text-muted-foreground/80 hover:text-primary transition-colors focus:outline-none`}                >
                  
                  <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-base`}></i>
                </button>
              </div>
              <span className="text-xs text-muted-foreground/70 text-right block mt-1 w-fit">
                {t.passwordRequirement}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-foreground text-right w-fit">
                {t.confirmPassword}
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full
                            ${lang === "ar"
                              ? "text-right pr-11 pl-4"
                              : "text-left pl-11 pr-4"}
                            bg-secondary/15
                            border
                            border-border/80
                            rounded-xl
                            py-3
                            text-foreground
                            placeholder:text-muted-foreground/60
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/20
                            focus:border-primary
                            transition-all
                            text-sm
                            font-medium`}
                  placeholder={t.confirmPasswordPlaceholder}
                />
                <span className={`absolute inset-y-0 ${
                  lang === "ar" ? "right-4" : "left-4"
                } flex items-center pointer-events-none text-muted-foreground/80`}>
                  <i className="fa-solid fa-lock text-base"></i>
                </span>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute inset-y-0 ${
                    lang === "ar" ? "left-4" : "right-4"
                  } flex items-center text-muted-foreground/80 hover:text-primary transition-colors focus:outline-none`}
                >
                  <i className={`fa-regular ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} text-base`}></i>
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center gap-2 pt-1 text-right">
              <input
                type="checkbox"
                id="agreeToTerms"
                required
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-4 h-4 rounded border border-border/80 text-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 transition-all cursor-pointer"
              />
              <label htmlFor="agreeToTerms" className="text-sm font-semibold text-foreground/80 select-none cursor-pointer w-fit">
                {t.agreeToTerms1}{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  {t.agreeToTerms2}
                </Link>{" "}
                {t.agreeToTerms3}{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  {t.agreeToTerms4}
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 text-base mt-4 shadow-sm cursor-pointer"
            >
              {t.signup}
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {t.alreadyHaveAccount}{" "}
              <Link to="/login" className="text-primary font-bold hover:underline">
                {t.login}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

