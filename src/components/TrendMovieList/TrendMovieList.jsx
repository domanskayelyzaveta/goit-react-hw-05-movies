import React from 'react';
import { Link } from 'react-router-dom';
import styles from './trendMovie.module.css';

export const TrendMovieList = ({ list }) => {
  console.log(list);
  return (
    <div>
      <ul className={styles.myTrendMovieList}>
        {list?.map(movie => (
          <li key={movie.id}>
            <Link
              className={styles.myTrendMovieLink}
              to={`/movies/${movie.id}`}
              key={movie.id}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMovieList;
