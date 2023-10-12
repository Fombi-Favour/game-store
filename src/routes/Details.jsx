import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../redux/details/detailsSlice';
import gameCategory from '../components/gameTitle';
import GameList from '../components/GameList';

const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { games, isLoading } = useSelector((state) => state.details);

  const current = gameCategory.find((game) => game.name === name);

  useEffect(() => {
    if (current) {
      dispatch(fetchGames(name));
    }
  }, [dispatch, name, current]);

  if (!current) {
    return null;
  }

  return (
    <section className="bg-[#fb5092] text-white">
      {/* title sub-section */}
      <div className="flex items-center justify-center gap-8 p-2">
        <img src={current.src} alt={current.name} className="w-60 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">{current.title}</h3>
          <span className="text-[1.174rem]">{`${games.length} Games`}</span>
        </div>
      </div>
      {/* status sub-section */}
      <div className="flex bg-[#da2d72] p-1">
        <h3 className="uppercase">
          {`status of ${current.title} games`}
        </h3>
      </div>
      {/* games list sub-section */}
      {isLoading ? (
        <div className="flex items-center justify-center mt-20 gap-3">
          <div className="border-8 border-white border-t-[#da2d72] w-20 h-20 text-transparent rounded-full animate-spin">100%</div>
          <h2 className="text-4xl text-white">Loading...</h2>
        </div>
      ) : (
        games.map((item) => (
          <GameList key={item.id} gameList={item} />
        ))
      )}
    </section>
  );
};

export default Details;
