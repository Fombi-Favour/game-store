import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaMicrophone, FaRegSun, FaAngleLeft } from 'react-icons/fa';
import gameCategory from './gameTitle';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = useParams();

  const current = gameCategory.find((game) => game.name === name);

  return (
    <nav className="bg-[#ec4c8b] flex items-center justify-between p-3 md:justify-around text-white">
      {location.pathname === '/' && (
        <>
          <span className="font-bold">All Games</span>
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-16" />
            <span className="text-lg font-medium">Game Market</span>
          </div>
        </>
      )}

      {location.pathname !== '/' && (
        <>
          <div className="flex items-center gap-3">
            <FaAngleLeft onClick={() => navigate(-1)} size={23} className="cursor-pointer" />
            <span className="font-bold text-xl invisible md:visible">{current.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-10 md:w-12" />
            <span className="font-semibold text-xl">{`${current.title} Games`}</span>
          </div>
        </>
      )}
      <div className="flex items-center gap-3 md:text-xl">
        <FaMicrophone className="cursor-pointer" />
        <FaRegSun className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
