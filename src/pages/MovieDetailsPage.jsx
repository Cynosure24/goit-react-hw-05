import MovieCard from "../components/MovieCard/MovieCard";
import Loader from "../components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import { getMovieById, getReviews } from "../apiService/api";
import { useParams, Outlet, useLocation } from "react-router-dom";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import css from "../components/MovieCard/MovieCard.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from) ?? "/";

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);

        const fetchedReviews = await getReviews(movieId);
        setReviews(fetchedReviews.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <div className={css.btnWrap}>
        <GoBackButton location={location} backLink={backLink.current} />
        <MovieCard error={error} movie={movie} />
      </div>
      {isLoading && <Loader />}
      <AdditionalInfo />
      <Outlet />
    </div>
  );
}
