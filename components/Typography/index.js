import classNames from "classnames";

/* eslint-disable react/display-name */
export default function Typography({ children }) {
  return <div>{children}</div>;
}

Typography.Display = ({ className, children, type = 1 }) => (
  <div
    className={classNames(
      " text-[#070E25] font-bold  dark:text-white",
      type === 1 && "text-[64px] leading-[140%]",
      type === 2 && "text-[56px]  leading-[120%]",
      className
    )}
  >
    {children}
  </div>
);

Typography.Body = ({ className, children, size = "xl" }) => (
  <div
    className={classNames(
      " text-[#070E25]/70 dark:text-white",
      size === "xl" && "text-[20px] leading-[180%]",
      size === "lg" && "text-[18px] leading-[180%]",
      size === "md" && "text-[16px] leading-[180%]",
      size === "sm" && "text-[14px] leading-[180%]",
      size === "xs" && "text-[12px] leading-[180%]",
      className
    )}
  >
    {children}
  </div>
);

Typography.Heading = ({ className, children, type = "h1" }) => (
  <div
    className={classNames(
      " text-[#070E25] font-bold dark:text-white",
      type === "h1" && "text-[44px] leading-[140%]",
      type === "h2" && "text-[40px] leading-[140%]",
      type === "h3" && "text-[32px] leading-[140%]",
      type === "h4" && "text-[24px] leading-[140%]",
      type === "h5" && "text-[16px] leading-[140%]",
      className
    )}
  >
    {children}
  </div>
);

Typography.Overline = ({ className, children, size = "lg" }) => (
  <div
    className={classNames(
      " text-main-indigo-500 tracking-[0.8px] font-semibold uppercase dark:text-white",
      size === "lg" && "text-[14px] leading-[170%]",
      size === "sm" && "text-[12px] leading-[170%]",

      className
    )}
  >
    {children}
  </div>
);

Typography.Caption = ({ className, children, size = "lg" }) => (
  <div
    className={classNames(
      " text-main-grayscale-900 font-semibold dark:text-white",
      size === "lg" && "text-[12px] leading-[190%]",
      size === "md" && "text-[16px] leading-[180%]",
      size === "sm" && "text-[11px] leading-[180%]",

      className
    )}
  >
    {children}
  </div>
);
