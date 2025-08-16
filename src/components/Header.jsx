import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Star } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Menu,
  CircleX,
  House,
  SearchSlash,
  PanelsTopLeft,
  UserPen,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [activePage, setActivePage] = useState("all");

  const navItems = [
    { id: "all", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <Info className="w-4 h-4" /> },
    { id: "work", label: "Project", icon: <Briefcase className="w-4 h-4" /> },
    { id: "reviews", label: "Skills", icon: <Star className="w-4 h-4" /> },
  ];

  const handleNavigation = (id) => {
    setActivePage(id);
    // You could also handle real page navigation here with react-router
    // navigate(`/${id}`);
  };


  useEffect (()=> {
    AOS.init({
      duration: 1000,
      once: true
    })

  },[])

  return (
    <>
      <header className="flex justify-between items-center px-5 py-4 lg:px-15 md:px-10">
        {/* Logo Section  */}

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light m-0">
          PORT<span className="text-amber-500">FOLIO</span>
        </h1>

        {/* Desktop Navigation  */}

        <nav className="lg:z-50 hidden md:hidden lg:flex items-center gap-12 text-[16.5px] font-light">
          <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-3xl p-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 hover:scale-110 ${
                  activePage === item.id
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                <span className="text-sm font-sans">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Nav Buttons  */}

        <div data-aos="zoom-out-up" className="lg:z-50 hidden md:hidden lg:flex items-center justify-center gap-5">
          <a
            href=""
            className="w-11 h-11 rounded-2xl bg-white p-[3px] hover:translate-y-[-4px] transition-all duration-300"
          >
            <img
              src={`/Github.png`}
              className="rounded-2xl hover:scale-120 transotion-all duration-300"
            />
          </a>

          <a
            href=""
            className="w-11 h-11 rounded-2xl bg-white p-[3px] hover:translate-y-[-4px] transition-all duration-300"
          >
            <img
              src={`/Instagram.png`}
              className="rounded-2xl hover:scale-120 transotion-all duration-300"
            />
          </a>

          <a
            href=""
            className="w-11 h-11 rounded-2xl bg-white p-[3px] hover:translate-y-[-4px] transition-all duration-300"
          >
            <img
              src={"/LinkedIn.png"}
              className="rounded-2xl hover:scale-120 transotion-all duration-300"
            />
          </a>
        </div>

        {/* Mobile Navigation  */}

        <button
          className="lg:hidden text-gray-200 mr-2 z-30 lg:m-auto md:mb-1 "
          onClick={toggleMenu}
        >
          {!isOpen ? <Menu size={25} className="" /> : <CircleX size={25} />}
        </button>
      </header>

      {/* Mobile Menu  */}

      {isOpen ? (
        <div className="lg:hidden fixed w-full top-0 border-2 border-amber-600 bg-gray-500 text-black">
          <nav className="pt-12 px-8 flex flex-col">
            <a
              href=""
              className="mt-1 mb-4 tracking-wider transition-colors hover:text-grey-300 z-50"
            >
              Home
            </a>

            <a
              href=""
              className="mb-4 tracking-wider transition-colors hover:text-grey-300 z-50"
            >
              About
            </a>

            <a
              href=""
              className="mb-4 tracking-wider transition-colors hover:text-grey-300 z-50"
            >
              Projects
            </a>

            <a
              href=""
              className="mb-4 tracking-wider transition-colors hover:text-grey-300 z-50"
            >
              Contact
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default Header;
