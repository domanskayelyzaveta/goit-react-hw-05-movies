import { Routes, Route } from 'react-router-dom';
import { MoviePage } from '../pages/MoviesPage';
import { Layout } from './Layout/Layout';
import HomePage from '../pages/HomePage';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from './NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={NotFoundPage} />
          {/* або через Navigate  */}
        </Route>
      </Routes>
    </>
  );
};
