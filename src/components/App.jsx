import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

//use lazy loading so 
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const CastList = lazy(() => import('./CastList/CastList'));
const ReviewList = lazy(() => import('./ReviewList/ReviewList'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));


export const App = () => {
  console.log("App");
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* A special index props is passed, which tells the React Router that the route index and must be rendere to the same address as its parent*/}
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviePage />} />
        <Route path='movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<CastList />} />
          <Route path='reviews' element={<ReviewList />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
