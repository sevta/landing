import useDarkMode from "hooks/useDarkMode";
import Button from "../Button";
import Typography from "../Typography";
import { BiMoon } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-[#FFF4E6] !bg-transparent">
      <div className="flex items-center justify-between py-5 container">
        <div className="uppercase text-xl font-black dark:text-white">
          resep
        </div>
        <div className="flex items-center justify-center space-x-3">
          <NavLink href="/">Products</NavLink>
          <NavLink href="/">Features</NavLink>
          <NavLink href="/">Contact</NavLink>
          <Button variant="ghost" onClick={() => toggleDarkMode()}>
            <Typography.Body className="cursor-pointer" size="lg">
              {darkMode ? <BsSunFill /> : <BiMoon />}
            </Typography.Body>
          </Button>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Button as="link" href={href} variant="ghost">
      <Typography.Body className="cursor-pointer" size="sm">
        {children}
      </Typography.Body>
    </Button>
  );
}
