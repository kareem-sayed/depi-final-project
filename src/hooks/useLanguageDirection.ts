import { useEffect } from "react";

export default function useLanguageDirection(lang: "ar" | "en") {
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);
}