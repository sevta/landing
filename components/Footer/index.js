import Typography from "../Typography";
import { BsFacebook } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import Button from "../Button";

export default function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-black">
      <div className="container flex items-center justify-between">
        <Typography.Body size="sm">
          © 2021 Resep, Inc. All rights reserved
        </Typography.Body>
        <div className="flex items-center space-x-8">
          <BsFacebook className="text-main-grayscale-600 dark:text-white" />
          <AiOutlineTwitter className="text-main-grayscale-600 dark:text-white text-lg" />

          <AiOutlineInstagram className="text-main-grayscale-600 dark:text-white text-lg" />
          <AiFillGithub className="text-main-grayscale-600 dark:text-white text-lg" />
        </div>
      </div>
    </footer>
  );
}
