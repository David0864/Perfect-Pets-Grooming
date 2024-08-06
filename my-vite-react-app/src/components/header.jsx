import React from "react";

const Header = ({ setActiveSection }) => {
  return (
    <header className='flex flex-wrap justify-between py-8 md:px-20'>
      <div>
        <h1 className="text-green-400 text-4xl">Sample Text</h1>
      </div>
      <nav>
        <ul className="text-green-400 inline-flex space-x-6 text-2xl">
          <li onClick={() => setActiveSection("about")} className="hover:underline cursor-pointer">Text</li>
          <li onClick={() => setActiveSection("portfolio")} className="hover:underline cursor-pointer">Text</li>
          <li onClick={() => setActiveSection("contact")} className="hover:underline cursor-pointer">Text</li>
          <li onClick={() => setActiveSection("resume")} className="hover:underline cursor-pointer">Text</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
