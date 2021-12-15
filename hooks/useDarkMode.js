import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("__darkmode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("__darkmode", "false");
    }
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode,
  };
}
