import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Gaming from '../assets/gaming.png';
import gameCategory from '../components/gameTitle';
import Categories from '../components/Categories';

const Home = () => {
  const [search, setSearch] = useState('');
  const { isLoading } = useSelector((state) => state.details);

  const filterName = Object.values(gameCategory).filter((item) => (
    item.title.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <section className="bg-[#fb5092] text-white flex flex-col">
      {/* first sub-section */}
      <div className="flex items-center justify-center">
        <img src={Gaming} alt="world-map" className="w-48 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[2.654rem] font-semibold capitalize">Game Store</h3>
          <span className="text-[1.254rem]">15 Categories</span>
        </div>
      </div>
      {/* searching sub-section */}
      <div className="flex items-center justify-between bg-[#da2d72] py-3 px-2 md:justify-evenly">
        <h3 className="uppercase">games by categories</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-48 md:w-[30rem] p-1 px-3 outline-none text-black rounded-md"
        />
      </div>
      {/* listing sub-section: fetch from api */}
      <main className="flex flex-row flex-wrap gap-3 justify-center w-full py-4 mb-5">
        {isLoading ? (
          <div className="flex items-center justify-center mt-20 gap-3">
            <div className="border-8 border-white border-t-[#da2d72] w-20 h-20 text-transparent rounded-full animate-spin">100%</div>
            <h2 className="text-4xl text-white">Loading...</h2>
          </div>
        ) : (
          filterName.map((index) => (
            <Categories key={index.title} title={index.title} src={index.src} />
          ))
        )}
      </main>
    </section>
  );
};

export default Home;
