import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MoviesList({ error, movies, location }) {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <div>
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <ul className={css.list}>
          {movies.length > 0 &&
            movies.map(({ id, title, poster_path, vote_average }) => (
              <li key={id} className={css.card}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width={200}
                    className={css.img}
                  />
                  <div className={css.text}>
                    <p className={css.movieTitle}>{title}</p>
                    <p>Rate: {vote_average}</p>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}