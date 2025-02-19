import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import {useEffect, useState } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 300px
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <>
          {/* Social Icons Section */}
          <div className="flex gap-10 justify-items-start items-center px-6 py-4 ">
        <span className="text-sm">Follow Microsoft</span>
        <div className="flex space-x-4 text-xl">
          <FaFacebookF className="cursor-pointer hover:text-gray-900" />
          <FaXTwitter className="cursor-pointer hover:text-gray-900" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-900" />
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-end px-6">
        <button onClick={scrollToTop} className="flex items-center space-x-2 border px-4 py-2 text-sm font-semibold hover:bg-gray-200">
          <IoIosArrowUp />
          <span >Back to top</span>
        </button>
      </div>

        <footer className="bg-gray-100 text-gray-700 mt-20">
      {/* Top Links Section (Above Footer) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-6">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
            <ul className="space-y-1 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Bottom Bar */}
      <div className="border-t gap-5 mt-4 px-6 py-4 text-xs flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex  items-center space-x-2">
          <span>🌍 English (Pakistan)</span>
          <input type="checkbox" className="toggle" />
          <span>Your Privacy Choices</span>
        </div>
        <div className="flex text-left gap-5 justify-items-start flex-col md:flex-row space-x-4">
          {["Consumer Health Privacy", "Contact Microsoft", "Privacy", "Terms of use", "Trademarks", "About our ads"].map(
            (item, idx) => (
              <span key={idx} className="cursor-pointer hover:underline">
                {item}
              </span>
            )
          )}
        </div>
        <span>© Microsoft 2025 || Developed by Farheen Malak</span>
      </div>
    </footer></>

  );
};

// Footer Data (For Easy Reusability)
const footerData = [
  {
    title: "What's new",
    links: [
      "Surface Book 3",
      "Surface Pro",
      "Microsoft Copilot",
      "Microsoft 365",
      "Explore Microsoft products",
      "Windows 11 apps",
    ],
  },
  {
    title: "Microsoft Store",
    links: ["Account profile", "Download Center", "Returns", "Order tracking"],
  },
  {
    title: "Education",
    links: [
      "Microsoft in education",
      "Devices for education",
      "Microsoft Teams for Education",
      "Microsoft 365 Education",
      "Office Education",
      "Educator training and development",
      "Deals for students and parents",
      "Azure for students",
    ],
  },
  {
    title: "Business",
    links: [
      "Microsoft Cloud",
      "Microsoft Security",
      "Azure",
      "Dynamics 365",
      "Microsoft 365",
      "Microsoft Advertising",
      "Microsoft 365 Copilot",
      "Microsoft Teams",
    ],
  },
  {
    title: "Developer & IT",
    links: [
      "Microsoft Developer",
      "Documentation",
      "Microsoft Learn",
      "Microsoft Tech Community",
      "Azure Marketplace",
      "AppSource",
      "Microsoft Power Platform",
      "Visual Studio",
    ],
  },
  {
    title: "Company",
    links: ["Careers", "About Microsoft", "Company news", "Privacy at Microsoft", "Investors", "Sustainability"],
  },
];

export default Footer;
