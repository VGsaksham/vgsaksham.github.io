import React from 'react';
import { Link } from 'react-router-dom';

const HireButton = () => {
  return (
    <Link 
      to="/hire-me" 
      className="inline-block bg-neonGreen hover:bg-opacity-90 transition-all text-black font-bold py-4 px-10 text-lg mt-8 transform hover:-translate-y-1 duration-300 font-montserrat"
    >
      HIRE ME
    </Link>
  );
};

export default HireButton;
