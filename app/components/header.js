"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../../public/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full h-20 flex items-center justify-between p-3 bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div>
        <Link href="/">
          <span>
            <Image src={logo} width={200} alt="Logo" />
          </span>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isMenuOpen ? (
            <FiX />
          ) : (
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`absolute md:relative bg-white w-full md:w-auto md:bg-transparent left-0 md:left-auto top-20 md:top-auto transform ${
          isMenuOpen
            ? "translate-x-0 shadow-2xl md:shadow-none"
            : "-translate-x-full"
        } md:transform-none flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 p-4 justify-center items-center`}
      >
        <ActiveLink href="/">Inicio</ActiveLink>
        <ActiveLink href="/about">Sobre mí</ActiveLink>
        <ActiveLink href="/projects-sm">Proyectos</ActiveLink>
        <ActiveLink href="/contact">Contacto</ActiveLink>

        <div className="md:hidden flex justify-center space-x-4 p-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black text-3xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black text-3xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-black text-3xl" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeStyle = isActive ? "text-[#db2777] underline underline-offset-8 decoration-4" : "text-black md:text-white";

  return (
    <Link href={href}>
      <span
        className={`${activeStyle} hover:text-[#db2777] cursor-pointer hover:transition hover:duration-300`}
      >
        {children}
      </span>
    </Link>
  );
};
