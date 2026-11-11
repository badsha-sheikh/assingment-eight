import React from 'react';
import { useState } from "react";

const H = () => {
    const [active, setActive] = useState("Home");

  const navLinks = ["Home", "Apps", "About", "Installation", "Contact"];

  return (
    <div className="flex items-center justify-center gap-8 p-5 shadow-sm">

      {navLinks.map((link) => (
        <button
          key={link}
          onClick={() => setActive(link)}
          className={`pb-2 font-medium transition-all duration-200 ${
            active === link
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          {link}
        </button>
      ))}

    </div>
  );


};

export default H;




  
