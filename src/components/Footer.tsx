import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-white/80">
        
        <div className="flex items-center gap-6 md:order-1 w-full md:w-auto justify-center md:justify-start font-semibold">
          <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
          <Link to="/prophets" className="hover:text-white transition-colors">الأنبياء</Link>
          <Link to="/about" className="hover:text-white transition-colors">عن الموقع</Link>
        </div>

        <div className="flex items-center gap-5 text-base md:order-2 w-full md:w-auto justify-center text-white/90">
          <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        <div className="text-center md:text-left md:order-3 w-full md:w-auto justify-center md:justify-end tracking-wide">
          <span>جميع الحقوق محفوظة © 2026 - رحلة عبر قصص الأنبياء</span>
        </div>

      </div>
    </footer>
  );
}