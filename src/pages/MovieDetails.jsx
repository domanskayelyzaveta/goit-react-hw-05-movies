import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFullInfo } from 'service/API';
import styles from './pages.module.css';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchDetails = async () => {
      try {
        const response = await fetchFullInfo(movieId);
        setMovieInfo(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetails();
  }, [movieId]);

  const userScore = Math.floor(movieInfo?.vote_average * 10);
  const genres = movieInfo?.genres
    ?.map(genre => {
      return genre.name;
    })
    ?.join(',');

  return (
    <div>
      <Link to={location?.state?.from || '/'} className={styles.myGoBackBtn}>
        Go back
      </Link>
      {movieInfo ? (
        <div className={styles.myContainer}>
          <div>
            <img
              className={styles.myPoster}
              src={`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
          </div>
          <div className={styles.myFilmContainer}>
            <h2>{movieInfo.title}</h2>
            <p className={styles.myFilmScore}>User score: {userScore}%</p>
            <h3>Overview</h3>
            <p className={styles.myFilmParagraph}>{movieInfo.overview}</p>
            <h3>Genre</h3>
            <p>{genres}</p>
          </div>
        </div>
      ) : null}
      <div className={styles.myFilmDiv}>
        <Link className={styles.myFilmLink} to="cast">
          Cast
        </Link>
        <Link className={styles.myFilmLink} to="reviews">
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>{<Loader />}</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
