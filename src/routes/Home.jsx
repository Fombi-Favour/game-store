import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/details/detailsSlice';
import World from '../assets/world.png';

const Home = () => {
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const { contents, isLoading } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  useEffect(() => {
    const totalCase = contents?.reduce((prev, curr) => prev + curr.cases, 0);
    setTotal(totalCase);
  }, [contents]);

  const filteredContinent = contents.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <section className="bg-[#fb5092] text-white flex flex-col">
      {/* first sub-section */}
      <div className="flex items-center justify-center">
        <img src={World} alt="world-map" className="w-48 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">The World</h3>
          <span className="text-[1.174rem]">
            {total}
            {' '}
            cases
          </span>
        </div>
      </div>
      {/* searching sub-section */}
      <div className="flex items-center justify-between bg-[#da2d72] py-3 px-2 md:justify-evenly">
        <h3 className="uppercase">cases by continents</h3>
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
          filteredContinent.map((item) => (
            <span key={item.id}>Game Catergories</span>
          ))
        )}
      </main>
    </section>
  );
};

export default Home;
