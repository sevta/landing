import Button from "../Button";
import Typography from "../Typography";
import useResponsive from "hooks/useResponsive";

export default function Header({ title, subtitle }) {
  const { md } = useResponsive();

  return (
    <div className="w-full min-h-screen md:py-40 md:min-h-full  relative backdrop-blur-3xl flex items-center justify-center md:px-5">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ml-52 md:ml-32 mt-16 rounded-full w-80 h-80 md:w-40 md:h-40 bg-[#FF96D5]/50 dark:bg-[#FF96D5]/20 blur-[120px]"></div>
      <div className="z-10 relative space-y-5 w-[800px] selection:bg-pink-500 selection:text-white group">
        <Typography.Display type={2} className="text-center md:hidden block">
          {title}
        </Typography.Display>
        <Typography.Heading type="h3" className="text-center md:block hidden">
          {title}
        </Typography.Heading>
        <Typography.Body size={md ? "sm" : "lg"} className="text-center">
          {subtitle}
        </Typography.Body>
        <div className="flex items-center justify-center space-x-3">
          <Button color="primary">Explore</Button>
          <Button variant="ghost" color="primary">
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}
