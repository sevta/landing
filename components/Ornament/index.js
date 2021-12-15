import classNames from "classnames";

export default function Ornament({ className }) {
  return (
    <div
      className={classNames(
        "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ml-32 rounded-full w-80 h-80 bg-[#FF96D5]/50 blur-[160px]",
        className
      )}
    />
  );
}
