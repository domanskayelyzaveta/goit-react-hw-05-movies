import { TrendMovieList } from 'components/TrendMovieList/TrendMovieList';
import React, { useEffect, useState } from 'react';
import { fetchHomeTrending } from 'service/API';

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetchHomeTrending();
        setList(response.results);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <TrendMovieList list={list} />
    </>
  );
};

export default HomePage;
