import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out transform
        ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
    
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer z-50"
        aria-label="close-menu"
      >
        &times;
      </button>

   
      <nav className="flex flex-col space-y-6 text-center">
        {["Home", "Projects", "About", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`text-amber-500 text-2xl font-semibold transition-transform duration-300 cursor-pointer 
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};
