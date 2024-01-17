import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VersionContext, VERSION } from "./VersionContext";
import { motion, AnimatePresence } from "framer-motion";

import resumeV1 from "../files/Kenneth Choi Resume 2023.pdf";
import resumeV2 from "../files/Kenneth Choi CV 2023.pdf";
import { Link } from "react-scroll";

const MobileNav = ({ setMenuOpen }) => {
  const version = useContext(VersionContext);
  return (
    <AnimatePresence>
      <motion.div
        className="container fixed bottom-0 left-0 right-0 top-0 z-40 bg-black  p-6 pt-20 text-white"
        initial={{ opacity: 0, scale: 0.75, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <ul className="">
            <li className="text-center">
              <NavLink
                to="/"
                id="home_nav_item"
                className="mr-1 cursor-pointer rounded-full py-2 transition-all duration-150"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="text-center">
              <Link
                to="about_scroll"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mr-1 cursor-pointer rounded-full py-2 transition-all duration-150"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="footer_scroll"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mr-1 cursor-pointer rounded-full py-2 transition-all duration-150"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="text-center">
              <a
                href={version === VERSION.V1 ? resumeV1 : resumeV2}
                target="_blank"
                rel="noreferrer"
                className="mr-1 cursor-pointer rounded-full py-2 transition-all duration-150"
                onClick={() => setMenuOpen(false)}
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
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
