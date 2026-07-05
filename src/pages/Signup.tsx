import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ fullName, email, password, confirmPassword, agreeToTerms });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-12 px-6 py-12 max-w-7xl mx-auto">
      {/* Right Side: Welcome Info (first in DOM order for RTL so it displays on the right on desktop) */}
      <div className="w-full lg:w-1/2 flex flex-col text-right space-y-6">
        <div className="inline-flex items-center gap-2 bg-secondary/50 text-foreground/80 px-4 py-1.5 rounded-full text-sm font-semibold w-fit mb-2">
          <i className="fa-solid fa-wand-magic-sparkles text-accent"></i>
          <span>ابدأ رحلتك مجاناً</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          انضم إلى رحلة عبر <br />
          <span className="text-primary">قصص الأنبياء</span>
        </h1>
        
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
          أنشئ حسابك المجاني وابدأ تجربة تعليمية ممتعة وتفاعلية مستوحاة من تراثنا الإسلامي.
        </p>
        
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <i className="fa-solid fa-check text-xs"></i>
            </span>
            <span className="text-foreground/90 text-base font-semibold">احفظ تقدمك في كل قصة</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <i className="fa-solid fa-check text-xs"></i>
            </span>
            <span className="text-foreground/90 text-base font-semibold">اختبارات تفاعلية بعد كل نبي</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <i className="fa-solid fa-check text-xs"></i>
            </span>
            <span className="text-foreground/90 text-base font-semibold">علّم القصص المفضلة لديك</span>
          </div>
        </div>
      </div>

      {/* Left Side: Form Card (second in DOM order for RTL so it displays on the left on desktop) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="w-full max-w-[480px] bg-card border border-border/60 rounded-[2.5rem] p-8 md:p-10 shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">إنشاء حساب جديد</h2>
            <p className="text-muted-foreground text-sm">املأ بياناتك للانضمام إلينا</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-foreground text-right">
                الاسم الكامل
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-right bg-secondary/15 border border-border/80 rounded-xl py-3 px-4 pr-11 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                  placeholder="أحمد محمد"
                />
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground/80">
                  <i className="fa-regular fa-user text-base"></i>
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-foreground text-right">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-right bg-secondary/15 border border-border/80 rounded-xl py-3 px-4 pr-11 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                  placeholder="example@email.com"
                />
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground/80">
                  <i className="fa-regular fa-envelope text-base"></i>
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-foreground text-right">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-right bg-secondary/15 border border-border/80 rounded-xl py-3 px-11 pr-11 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                  placeholder="********"
                />
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground/80">
                  <i className="fa-solid fa-lock text-base"></i>
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-4 flex items-center text-muted-foreground/80 hover:text-primary transition-colors focus:outline-none"
                >
                  <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-base`}></i>
                </button>
              </div>
              <span className="text-xs text-muted-foreground/70 text-right block mt-1">
                استخدم 8 أحرف على الأقل
              </span>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-foreground text-right">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full text-right bg-secondary/15 border border-border/80 rounded-xl py-3 px-11 pr-11 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                  placeholder="********"
                />
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground/80">
                  <i className="fa-solid fa-lock text-base"></i>
                </span>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 left-4 flex items-center text-muted-foreground/80 hover:text-primary transition-colors focus:outline-none"
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
                className="h-4 w-4 rounded border-border/80 text-primary focus:ring-primary/20 bg-secondary/15 accent-primary cursor-pointer"
              />
              <label htmlFor="agreeToTerms" className="text-sm font-semibold text-foreground/80 select-none cursor-pointer">
                أوافق على{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  الشروط والأحكام
                </Link>{" "}
                و{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  سياسة الخصوصية
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 text-base mt-4 shadow-sm cursor-pointer"
            >
              إنشاء الحساب
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" className="text-primary font-bold hover:underline">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

