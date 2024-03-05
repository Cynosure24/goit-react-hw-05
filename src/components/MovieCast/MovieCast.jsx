import { useEffect, useState } from "react";
import { getCast } from "../../apiService/api";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const fetchedCast = await getCast(movieId);
        setCast(fetchedCast.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <div>
          {cast && cast.length > 0 ? (
            <ul className={css.list}>
              {cast.map(({ id, name, profile_path, character }) => (
                <li key={id} className={css.card}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : defaultImg
                    }
                    alt={name}
                    width={150}
                  />
                  <div className={css.textWrap}>
                    <p className={css.name}>{name}</p>
                    <p className={css.role}>
                      {character ? "as " : ""}
                      {character}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data yet</p>
          )}
        </div>
      )}
    </div>
  );
}

// "id": 550,
// "cast": [
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 819,
//     "known_for_department": "Acting",
//     "name": "Edward Norton",
//     "original_name": "Edward Norton",
//     "popularity": 26.99,
//     "profile_path": "/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
//     "cast_id": 4,
//     "character": "The Narrator",
//     "credit_id": "52fe4250c3a36847f80149f3",
//     "order": 0
//   },
