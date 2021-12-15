import Link from "next/link";
import Typography from "../Typography";

export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-[#FFF4E6] !bg-transparent">
      <div className="flex items-center justify-between py-5 max-w-[1280px] px-16 mx-auto">
        <div className="uppercase text-lg font-black">resep</div>
        <div className="flex items-center justify-center space-x-14">
          <NavLink href="/">Products</NavLink>
          <NavLink href="/">Features</NavLink>
          <NavLink href="/">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <Typography.Body className="cursor-pointer" size="sm">
        {children}
      </Typography.Body>
    </Link>
  );
}
