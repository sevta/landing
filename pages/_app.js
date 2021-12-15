import "../styles/globals.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import { useEffect, useState } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <div className="md:overflow-x-hidden">
      <Component {...pageProps} />
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
    </div>
  );
}

export default MyApp;
