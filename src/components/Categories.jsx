import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';

const Categories = ({
  id, title, name, src,
}) => (
  <NavLink
    to={`details/${name}`}
    className="flex flex-col items-end gap-2 p-2 h-[18rem] rounded-xl bg-[#da2d72] shadow-lg transition-all hover:transition-all hover:shadow-2xl hover:shadow-pink-400"
  >
    <div>
      <FaArrowCircleRight />
      {id}
    </div>
    <div className="flex flex-col items-center gap-2 justify-between">
      <img src={src} alt={title} className=" w-60 h-40" />
      <h3 className="text-xl">{title}</h3>
    </div>
  </NavLink>
);

Categories.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Categories;
