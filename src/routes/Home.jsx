import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/details/detailsSlice';
import Gaming from '../assets/gaming.png';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { games, isLoading } = useSelector((state) => state.details);
  console.log(games);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <section className="bg-[#fb5092] text-white flex flex-col">
      {/* first sub-section */}
      <div className="flex items-center justify-center">
        <img src={Gaming} alt="world-map" className="w-48 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">Game Store</h3>
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
      <main className="flex flex-row flew-wrap gap-1 justify-center w-full p-0 mb-5">
        {isLoading ? (
          <div className="flex items-center justify-center mt-20 gap-3">
            <div className="border-8 border-white border-t-[#da2d72] w-20 h-20 text-transparent rounded-full animate-spin">100%</div>
            <h2 className="text-4xl text-white">Loading...</h2>
          </div>
        ) : (
          <span>Game Categories</span>
        )}
      </main>
    </section>
  );
};

export default Home;
