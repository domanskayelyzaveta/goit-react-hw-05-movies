import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'service/API';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import styles from './pages.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams({});
  const location = useLocation();

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
      <Form onSubmit={handleSubmit} className={styles.containerInput}>
        <InputGroup className={styles.myInput}>
          <FormControl type="text" name="inputQuery" placeholder="Search" />
          <Button
            className={styles.myButton}
            type="submit"
            style={{
              backgroundColor: 'rgba(1, 13, 113, 0.483)',
              color: 'rgb(236, 253, 3)',
              border: 'none',
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Form>
      <ul className={styles.myMovieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              className={styles.myMovieLink}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
