import classNames from "classnames";

export default function Card({ type, className, children }) {
  return (
    <div
      className={classNames(
        "p-8 rounded-xl bg-white",
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
