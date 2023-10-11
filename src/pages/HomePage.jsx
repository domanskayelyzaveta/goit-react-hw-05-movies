import { TrendMovieList } from 'components/TrendMovieList/TrendMovieList';
import React, { useEffect, useState } from 'react';
import { fetchHomeTrending } from 'service/API';

const HomePage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        // setIsLoading(true);
        const response = await fetchHomeTrending();
        setList(response.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setIsLoading(false);
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
