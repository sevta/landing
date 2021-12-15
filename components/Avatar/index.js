import classNames from "classnames";

/* eslint-disable @next/next/no-img-element */
export default function Avatar({ className, src }) {
  return (
    <div
      className={classNames(
        "rounded-full w-[120px] h-[120px] overflow-hidden",
        className
      )}
    >
      <img
        src={src}
        alt=""
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
}
