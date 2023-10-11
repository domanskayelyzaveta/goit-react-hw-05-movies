import React from 'react';
import { Link } from 'react-router-dom';

export const TrendMovieList = ({ list }) => {
  console.log(list);
  return (
    <div>
      <ul>
        {list?.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMovieList;
