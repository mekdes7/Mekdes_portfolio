import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-50 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {/* Close Button */}
      <button
        onClick={() => {
          console.log("Close button clicked");
          setMenuOpen(false);
        }}
        className="absolute top-4 right-4 text-white text-2xl sm:text-3xl focus:outline-none cursor-pointer z-50"
        aria-label="close-menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-amber-500 text-lg sm:text-xl md:text-2xl font-semibold my-2 sm:my-4 transition-transform duration-300 cursor-pointer
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
          }`}
      >
        Home
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-amber-500 text-lg sm:text-xl md:text-2xl font-semibold my-2 sm:my-4 transition-transform duration-300 cursor-pointer
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
          }`}
      >
        Projects
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-amber-500 text-lg sm:text-xl md:text-2xl font-semibold my-2 sm:my-4 transition-transform duration-300 cursor-pointer
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
          }`}
      >
        About
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-amber-500 text-lg sm:text-xl md:text-2xl font-semibold my-2 sm:my-4 transition-transform duration-300 cursor-pointer
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
          }`}
      >
        Contact
      </a>
    </div>
  );
};