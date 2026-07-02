import { useEffect } from "react";

export default function useLanguageDirection(lang: ("ar" | "en") | ("AR" | "EN")) {
  useEffect(() => {
    document.documentElement.dir = lang === "ar" || lang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);
}