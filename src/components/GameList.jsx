import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';

const GameList = ({ gameList }) => {
  const { title, image, deal } = gameList;

  return (
    <div className="flex items-center gap-12 justify-between px-2 py-3 bg-[#fb5092] even:bg-[#da2d72]">
      <div className="flex items-center gap-2">
        <img src={image} alt={title} className="w-28 md:w-40" />
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <div className="flex items-center gap-3 md:gap-9">
        <span className="font-bold">{`$${deal}`}</span>
        <FaArrowCircleRight />
      </div>
    </div>
  );
};

GameList.propTypes = {
  gameList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deal: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameList;
