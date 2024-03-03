import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from '../components/Navigation/Navigation.jsx';

const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage.jsx'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews.jsx'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Navigation />
      
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
    
      </Suspense>
    </div>
  );
}

