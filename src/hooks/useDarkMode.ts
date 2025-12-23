import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return { dark, toggle: () => setDark(!dark) };
};