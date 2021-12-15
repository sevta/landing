/* eslint-disable @next/next/no-img-element */
import Card from "../Card";
import Typography from "../Typography";
import useResponsive from "../../hooks/useResponsive";

export default function Contact() {
  const { md } = useResponsive();

  return (
    <div>
      <img src="/images/contact-image.png" className="md:hidden block" alt="" />
      <img
        src="/images/contact-image-mobile.png"
        className="md:block hidden"
        alt=""
      />
      <div className="flex md:px-5">
        <Card
          type="shadow"
          className="bg-white max-w-4xl w-full mx-auto -mt-36 z-10 relative p-12 md:p-10"
        >
          <div className="flex md:flex-col">
            <div className="w-4/5 md:w-full">
              <Typography.Overline>Contact us</Typography.Overline>
              <div className="">
                <Typography.Heading type={md ? "h4" : "h2"} className="md:mt-2">
                  You have a new project? or want to say hello...
                </Typography.Heading>
                <Typography.Heading
                  type={md ? "h4" : "h2"}
                  className="!text-main-grayscale-900/40 dark:!text-white/50 mt-4 md:mt-7"
                >
                  info@email.com
                </Typography.Heading>
              </div>
            </div>
            <div className="flex-1 md:mt-8 flex flex-col items-start justify-center">
              <Typography.Heading
                type="h6"
                className="text-main-grayscale-900 mb-2"
              >
                Offices
              </Typography.Heading>
              <Typography.Body size="sm" className="text-main-grayscale-900/50">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </Typography.Body>
              <Typography.Body
                size="sm"
                className="text-main-grayscale-900/50 dark:text-white mt-7 md:mt-3"
              >
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </Typography.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
