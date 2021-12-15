import classNames from "classnames";
import Link from "next/link";

export default function Button({
  as,
  href = "",
  rightIcon,
  leftIcon,
  variant,
  color = "primary",
  children,
  ...rest
}) {
  const _className = classNames(
    "px-6 rounded-lg py-3 capitalize font-medium",
    "focus:ring active:scale-90 transition duration-150",
    {
      "bg-main-cyan-600  text-white": color === "primary",
      "bg-main-cyan-100  text-main-cyan-600": color === "secondary",
      "bg-main-pink-500 text-white focus:ring focus:ring-main-pink-200":
        color === "tertiary",
    },
    {
      "text-main-cyan-600 !bg-transparent focus:ring-0":
        variant === "ghost" && color === "primary",
      "text-main-pink-500 !bg-transparent focus:ring-0":
        variant === "ghost" && color === "tertiary",
    }
  );

  function renderButton() {
    switch (as) {
      case as === "link":
        return (
          <Link href={href} passHref>
            <button className={_className} {...rest}>
              <ButtonInner leftIcon={leftIcon} rightIcon={rightIcon}>
                {children}
              </ButtonInner>
            </button>
          </Link>
        );

      case as === "a":
        return (
          <a className={_className} {...rest}>
            <ButtonInner leftIcon={leftIcon} rightIcon={rightIcon}>
              {children}
            </ButtonInner>
          </a>
        );
      case as === "div":
        return (
          <div className={_className} {...rest}>
            <ButtonInner leftIcon={leftIcon} rightIcon={rightIcon}>
              {children}
            </ButtonInner>
          </div>
        );
      default:
        return (
          <button className={_className} {...rest}>
            <ButtonInner leftIcon={leftIcon} rightIcon={rightIcon}>
              {children}
            </ButtonInner>
          </button>
        );
    }
  }

  return renderButton();
}

function ButtonInner({ children, leftIcon, rightIcon }) {
  return (
    <div className="flex items-center justify-center space-x-3">
      {leftIcon && <span className="text-lg">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="text-lg">{rightIcon}</span>}
    </div>
  );
}
