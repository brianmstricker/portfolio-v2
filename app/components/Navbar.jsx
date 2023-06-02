"use client";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="w-full h-20 fixed flex items-center justify-between text-white px-4 md:px-16">
      <div>
        <h1 className="text-5xl font-fancy">Brian</h1>
      </div>
      <ul className="hidden sm:flex gap-4">
        {links.map((link) => (
          <li className="cursor-pointer" key={`nav-${link}`}>
            <Link
              to={link}
              onClick={() => setMenu(!menu)}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden z-10" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes size={32} /> : <FaBars size={32} />}
      </div>
      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/90 to-gray-900/90 gap-8 text-4xl sm:hidden backdrop-blur-md">
          {links.map((link) => (
            <li className="cursor-pointer" key={`nav-${link}`}>
              <Link
                to={link}
                onClick={() => setMenu(!menu)}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
