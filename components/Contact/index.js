/* eslint-disable @next/next/no-img-element */
import Card from "../Card";
import Typography from "../Typography";

export default function Contact() {
  return (
    <div>
      <img src="/images/contact-image.png" alt="" />
      <div className="flex ">
        <Card
          type="shadow"
          className="bg-white max-w-4xl mx-auto -mt-36 z-10 relative p-12"
        >
          <div className="flex">
            <div className="w-4/5">
              <Typography.Overline>Contact us</Typography.Overline>
              <div className="">
                <Typography.Heading type="h2">
                  You have a new project? or want to say hello...
                </Typography.Heading>
                <Typography.Heading
                  type="h2"
                  className="text-main-grayscale-900/40 dark:text-white/50 mt-4"
                >
                  info@email.com
                </Typography.Heading>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
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
                className="text-main-grayscale-900/50 dark:text-white mt-7"
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
