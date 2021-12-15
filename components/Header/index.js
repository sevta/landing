import Button from "../Button";
import Typography from "../Typography";

export default function Header({ title, subtitle }) {
  return (
    <div className="w-full min-h-screen  relative backdrop-blur-3xl flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ml-32 rounded-full w-80 h-80 bg-[#FF96D5]/50 blur-[200px]"></div>
      <div className="z-10 relative space-y-5 w-[800px] selection:bg-pink-500 selection:text-white group">
        <Typography.Display type={2} className="text-center">
          {title}
        </Typography.Display>
        <Typography.Body size="lg" className="text-center">
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
