import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="px-4 md:px-0 md:ml-[180px] mt-10">
      <div className="grid lg:flex justify-between gap-5 lg:gap-0">
        <div className="grid gap-4">
          <img src={logo} alt="" />
          <p className="text-xs text-textSecondary leading-[15.6px]">
            Beautifully designed, expertly crafted Flutter components and
            templates, to jumpstart your projects and speed up your development
            process.
          </p>
          <div className="flex gap-4 items-start">
            <div className="bg-primary text-white p-2 rounded-full">
              <FaXTwitter />
            </div>
            <div className="bg-primary text-white p-2 rounded-full">
              <AiFillLinkedin />
            </div>
            <div className="bg-primary text-white p-2 rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-primary text-white p-2 rounded-full">
              <FaFacebookSquare />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid gap-[10px]">
            <h2 className="text-sm font-semibold leading-[18.2px]">Explore</h2>
            <Link
              to="/"
              className="text-sm text-textPrimary leading-[18.2px] hover:underline dark:text-secondary"
            >
              Blog
            </Link>
            <Link
              to="/"
              className="text-sm text-textPrimary leading-[18.2px] hover:underline dark:text-secondary"
            >
              Templates
            </Link>
            <Link
              to="/"
              className="text-sm text-textPrimary leading-[18.2px] hover:underline dark:text-secondary"
            >
              Screens
            </Link>
          </div>
          <div className="grid gap-[10px]">
            <h2 className="text-sm font-semibold leading-[18.2px]">Support</h2>
            <Link
              to="/"
              className="text-sm text-textPrimary leading-[18.2px] hover:underline dark:text-secondary"
            >
              Pricing
            </Link>
            <Link
              to="/"
              className="text-sm text-textPrimary leading-[18.2px] hover:underline dark:text-secondary"
            >
              Become a sponsore
            </Link>
            <Link
              to="/"
              className="text-sm text-textPrimary leading-[18.2px] hover:underline dark:text-secondary"
            >
              Hire top Flutter Devs
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] my-4 bg-bgSecondary dark:bg-darkSecondary hidden md:flex"></div>
      <div className="text-textSecondary grid py-4 gap-2 md:flex md:gap-0 md:py-0 justify-between text-sm leading-[18.2px]">
        <p>Copyright 2024 Jahid Hasan. All rights reserved</p>
        <div className="flex gap-2">
          <p>Privacy Policy</p> |<p>Terms & Condition</p> |<p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
