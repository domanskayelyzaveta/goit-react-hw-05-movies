import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'service/API';

export const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams({});
  console.log(params);

  const handleSubmit = async event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.inputQuery.value;
    setParams({ query: inputValue });

    if (inputValue) {
      try {
        const response = await fetchSearch(inputValue);
        setMovies(response.results);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const inputValue = params.get('query');

  useEffect(() => {
    if (inputValue) {
      const fetchSearchMovie = async () => {
        try {
          const response = await fetchSearch(inputValue);
          setMovies(response.results);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchSearchMovie();
    } else {
      setMovies([]);
    }
  }, [inputValue]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="inputQuery"></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
