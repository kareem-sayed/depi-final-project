import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center px-6 py-12">
      {/* Login Card */}
      <div className="w-full max-w-[520px] bg-card border border-border/30 rounded-3xl p-8 md:p-10 shadow-sm">
        
        {/* Icon & Welcome Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-5">
            <i className="fa-solid fa-book-open text-xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">أهلاً بعودتك</h2>
          <p className="text-muted-foreground text-sm">سجّل دخولك لتكمل رحلتك مع قصص الأنبياء</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full text-right bg-white border border-border/60 rounded-lg py-3 px-4 pr-11 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                placeholder="example@email.com"
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground/50">
                <i className="fa-regular fa-envelope text-base"></i>
              </span>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-semibold text-foreground text-right">
                كلمة المرور
              </label>
              <Link to="/forgot-password" className="text-xs text-muted-foreground hover:text-primary hover:underline transition-colors">
                نسيت كلمة المرور؟
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-right bg-white border border-border/60 rounded-lg py-3 px-11 pr-11 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                placeholder="********"
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground/50">
                <i className="fa-solid fa-lock text-base"></i>
              </span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 left-3 flex items-center text-muted-foreground/50 hover:text-primary transition-colors focus:outline-none"
              >
                <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-base`}></i>
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-end gap-2 pt-1">
            <label htmlFor="rememberMe" className="text-sm text-foreground/70 select-none cursor-pointer">
              تذكرني على هذا الجهاز
            </label>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-border/60 text-primary focus:ring-primary/20 bg-white accent-primary cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 text-base mt-2 cursor-pointer"
          >
            تسجيل الدخول
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-6 items-center">
          <div className="flex-grow border-t border-border/60"></div>
          <span className="flex-shrink mx-4 text-muted-foreground/80 text-sm select-none">أو</span>
          <div className="flex-grow border-t border-border/60"></div>
        </div>

        {/* Bottom Redirect */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ليس لديك حساب؟{" "}
            <Link to="/signup" className="text-primary font-bold hover:underline">
              أنشئ حساباً جديداً
            </Link>
          </p>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-primary hover:underline font-semibold transition-colors inline-flex items-center gap-1 justify-center">
          <span>العودة للصفحة الرئيسية</span>
          <span>—</span>
        </Link>
      </div>
    </div>
  );
}

