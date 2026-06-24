import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F8F5]/80 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-[#D4AF37]">
          Priyanka G
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-semibold">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#internships">Internships</a>
          <a href="#education">Education</a>
          <a href="#connect">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-8 text-lg font-medium bg-[#F8F8F5]">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#internships">Internships</a>
          <a href="#education">Education</a>
          <a href="#connect">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;