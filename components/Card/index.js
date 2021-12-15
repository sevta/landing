import classNames from "classnames";

export default function Card({ type, className, children }) {
  return (
    <div
      className={classNames(
        "p-8 rounded-xl bg-white outline-slate-50 dark:bg-slate-900 dark:shadow-slate-800/20",
        {
          "shadow-xl shadow-slate-500/10": type === "shadow",
          "outline-slate-500": type === "outline",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
