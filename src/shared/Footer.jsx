import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="ml-[180px]">
      <div className="flex justify-between">
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
        <div className="grid gap-[10px]">
          <h2 className="text-sm font-semibold leading-[18.2px]">Explore</h2>
          <p className="text-sm text-primary leading-[18.2px]">Blog</p>
          <p className="text-sm text-primary leading-[18.2px]">Templates</p>
          <p className="text-sm text-primary leading-[18.2px]">Screens</p>
        </div>
        <div className="grid gap-[10px]">
          <h2 className="text-sm font-semibold leading-[18.2px]">Support</h2>
          <p className="text-sm text-primary leading-[18.2px]">Pricing</p>
          <p className="text-sm text-primary leading-[18.2px]">
            Become a sponsore
          </p>
          <p className="text-sm text-primary leading-[18.2px]">
            Hire top Flutter Devs
          </p>
        </div>
      </div>
      <hr className="my-4 bg-secondary" />
      <div className="text-textSecondary flex justify-between text-sm leading-[18.2px]">
        <p>Copyright 2024 Jahid Hasan. All rights reserved</p>
        <div className="flex gap-2">
          <p>Privacy Policy</p> |<p>Terms & Condition</p> |<p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;