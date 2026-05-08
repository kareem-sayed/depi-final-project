import { useEffect } from "react";

export default function useLanguageDirection(lang: "AR" | "EN") {
  useEffect(() => {
      document.body.style.direction = lang === "AR" ? "rtl" : "ltr";
    }, [lang]);
}