import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.thumb}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p className={css.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};