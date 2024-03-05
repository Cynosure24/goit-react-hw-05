import MoviesList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import { useEffect, useState } from 'react';
import { getTrending } from "../apiService/api";
import { useLocation } from "react-router-dom";
import css from "../components/MovieList/MovieList.module.css";

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const fetchedTrending = await getTrending();
        setTrending(fetchedTrending.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList error={error} movies={trending} location={location} />
      {isLoading && <Loader />}
    </div>
  );
}
