import React, { useState, useContext } from "react";
import { VersionContext, VERSION } from "./VersionContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";
import { Link } from "react-scroll";

import MobileNav from "./MobileNav";

import resumeV1 from "../files/Kenneth Choi Resume 2023.pdf";
import resumeV2 from "../files/Kenneth Choi CV 2023.pdf";
import sparkle_gif from "../images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif";

import "../styles/Header.css";

function Header() {
  const version = useContext(VersionContext);

  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((s) => !s);
  };

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <motion.div
      className="header_wrapper container relative mx-auto p-6"
      initial={{ opacity: 0, scale: 0.75, y: 200 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      <div className="container relative z-50 mx-auto flex min-w-full flex-row items-center justify-between">
        <div className="flex rounded-full dark:text-white">
          <ul className="m-2 flex flex-row items-center">
            <li className="mr-2 flex flex-row items-center justify-center md:mr-12">
              <img
                src={sparkle_gif}
                alt="bard sparkle"
                className="bard_sparkle mr-2 inline-block max-w-6 "
              />
              <NavLink
                to="/"
                id="home_nav_item"
                className={({ isActive }) =>
                  (isActive ? " " : "") +
                  "mr-1 inline-block rounded-full py-2 text-2xl transition-all duration-150"
                }
              >
                <span className={menuOpen ? "text-white" : ""}>Kenny Choi</span>
              </NavLink>
            </li>
            <li className="hidden py-2 text-gray-500 lg:inline-block dark:text-gray-400">
              <span className="font-light">Software Engineer</span>
            </li>
          </ul>
        </div>
        <div className="header_right flex flex-row items-center justify-center">
          <ul className="nav_menu flex flex-row">
            <li className="mr-12 hidden md:inline-block">
              <Link
                to="about_scroll"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="mr-1 cursor-pointer rounded-full py-2 transition-all duration-150"
              >
                About
              </Link>
            </li>
            <li className="mr-12 hidden md:inline-block">
              <Link
                to="footer_scroll"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="mr-1 cursor-pointer rounded-full py-2 transition-all duration-150"
              >
                Contact
              </Link>
            </li>
            <li className="mr-12 hidden md:inline-block">
              <a
                href={version === VERSION.V1 ? resumeV1 : resumeV2}
                target="_blank"
                rel="noreferrer"
                className="items-center rounded-full py-2 transition-all duration-150 hover:cursor-pointer"
              >
                Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="inline-block w-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <button className="mr-4 rounded-full bg-white p-2 dark:bg-gray-600">
                <DarkModeSwitch
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  size={24}
                />
              </button>
            </li>
            <li className="mt-2 self-center">
              <button
                id="menu-btn"
                className={
                  (menuOpen ? "open " : "") +
                  "hamburger block focus:outline-none md:hidden"
                }
                type="button"
                onClick={handleMenuClick}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
    </motion.div>
  );
}

export default Header;
