import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFullInfo } from 'service/API';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

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
      <button>go back</button>
      {movieInfo ? (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
          </div>
          <div>
            <h2>{movieInfo.title}</h2>
            <p>User score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{movieInfo.overview}</p>
            <h3>Genre</h3>
            <p>{genres}</p>
          </div>
        </div>
      ) : null}
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
    </div>
  );
};
export default MovieDetails;
