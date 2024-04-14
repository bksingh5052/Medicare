import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const socialLinks = [
    {
      path: "https://www.youtube.com/channel/UCpMD0rnCHGPJirF4o8LbYzA",
      icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    },
    {
      path: "https://www.youtube.com/channel/UCpMD0rnCHGPJirF4o8LbYzA",
      icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    },
    {
      path: "https://www.youtube.com/channel/UCpMD0rnCHGPJirF4o8LbYzA",
      icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
    },
    {
      path: "https://www.youtube.com/channel/UCpMD0rnCHGPJirF4o8LbYzA",
      icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    },
  ];

  const quickLinks01 = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/",
      display: "About Us",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/",
      display: "Blogs",
    },
  ];

  const quickLinks02 = [
    {
      path: "/find-a-doctor",
      display: "Find a Doctor",
    },
    {
      path: "/",
      display: "Request an Appointment",
    },
    {
      path: "/",
      display: "Find Location",
    },
    {
      path: "/",
      display: "Get an Openion",
    },
  ];

  const quickLinks03 = [
    {
      path: "/",
      display: "Donate",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-[30px] flex-wrap justify-between">


          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Copyright © 2023 developed by Muhibur Rahman all rights reserved.</p>
            <div className="flex mt-4 items-center gap-3">
              {
                socialLinks.map((link, index)=><Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E] flex items-center justify-center rounded-full group hover:bg-primaryColor hover:border-none">{link.icon}</Link>)
              }
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6">Quick Links</h2>
            <ul>
              {
                quickLinks01.map((item, index)=>( <li key={index} className="mb-4"> 
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                </li>))
              }
            </ul>
          </div>
           <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6">I want to:</h2>
            <ul>
              {
                quickLinks02.map((item, index)=>( <li key={index} className="mb-4"> 
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                </li>))
              }
            </ul>
          </div>
           <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6">Support</h2>
            <ul>
              {
                quickLinks03.map((item, index)=>( <li key={index} className="mb-4"> 
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                </li>))
              }
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
