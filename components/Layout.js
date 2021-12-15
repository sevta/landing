import classNames from "classnames";
import { Scrollbar } from "smooth-scrollbar-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ className, children }) {
  return (
    <div
      className={classNames(
        "font-poppins w-full min-h-screen bg-[#FFF4E6] bg-slate-100 dark:bg-black",
        className
      )}
    >
      <Navbar />
      <Scrollbar>
        <div className="w-full h-screen">
          {children}
          <Footer />
        </div>
      </Scrollbar>
    </div>
  );
}
