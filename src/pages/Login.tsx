import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { login as loginApi } from "../fetchApi/services/authApi";

const content = {
  ar: {
    welcome: "أهلاً بعودتك",
    subtitle: "سجّل دخولك لتكمل رحلتك مع قصص الأنبياء",
    email: "البريد الإلكتروني",
    emailPlaceholder: "example@email.com",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    rememberMe: "تذكرني على هذا الجهاز",
    login: "تسجيل الدخول",
    or: "أو",
    noAccount: "ليس لديك حساب؟",
    createAccount: "أنشئ حساباً جديداً",
    backHome: "العودة للصفحة الرئيسية",
    loading: "جاري تسجيل الدخول...",
  },
  en: {
    welcome: "Welcome Back",
    subtitle: "Sign in to continue your journey through the Stories of the Prophets",
    email: "Email",
    emailPlaceholder: "example@email.com",
    password: "Password",
    forgotPassword: "Forgot Password?",
    rememberMe: "Remember me on this device",
    login: "Login",
    or: "OR",
    noAccount: "Don't have an account?",
    createAccount: "Create one",
    backHome: "Back to Home",
    loading: "Logging in...",
  },
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { lang } = useLanguage();
  const t = content[lang];
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await loginApi({ email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.user.name);
      navigate("/");
      window.location.reload();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center px-6 py-10 mt-20" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Login Card */}
      <div className="w-full max-w-[520px] bg-card border border-border/30 rounded-3xl p-8 md:p-10 shadow-sm">
        
        {/* Icon & Welcome Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-5">
            <i className="fa-solid fa-book-open text-xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{t.welcome}</h2>
          <p className="text-muted-foreground text-sm">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-semibold text-foreground text-right">
                {t.password}
              </label>
              <Link to="/forgot-password" className="text-xs text-muted-foreground hover:text-primary hover:underline transition-colors">
                {t.forgotPassword}
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
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
                
                <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'} text-base`}></i>
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-end gap-2 pt-1">
            <label htmlFor="rememberMe" className="text-sm text-foreground/70 select-none cursor-pointer">
              {t.rememberMe}
            </label>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-border/60 text-primary focus:ring-primary/20 bg-white accent-primary cursor-pointer"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm font-semibold rounded-lg px-4 py-3 text-center">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 text-base mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? t.loading : t.login}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-6 items-center">
          <div className="flex-grow border-t border-border/60"></div>
          <span className="flex-shrink mx-4 text-muted-foreground/80 text-sm select-none">{t.or}</span>
          <div className="flex-grow border-t border-border/60"></div>
        </div>

        {/* Bottom Redirect */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {t.noAccount}{" "}
            <Link to="/signup" className="text-primary font-bold hover:underline">
              {t.createAccount}
            </Link>
          </p>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-primary hover:underline font-semibold transition-colors inline-flex items-center gap-1 justify-center">
          <span>{t.backHome}</span>
          <span>—</span>
        </Link>
      </div>
    </div>
  );
}

