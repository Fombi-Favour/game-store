import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../redux/details/detailsSlice';
import GameList from '../components/GameList';

const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { games, isLoading } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchGames(name));
  }, [dispatch, name]);

  return (
    <section className="bg-[#fb5092] text-white">
      {/* title sub-section */}
      <div className="flex items-center justify-center gap-8 p-2">
        <span>image</span>
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">{name}</h3>
          <span className="text-[1.174rem]">{`${games.length} Games`}</span>
        </div>
      </div>
      {/* status sub-section */}
      <div className="flex bg-[#da2d72] p-1">
        <h3 className="uppercase">
          {`status of ${name} games`}
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
