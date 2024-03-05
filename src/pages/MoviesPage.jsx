import { useState, useEffect } from "react";
import Search from "../components/Search/Search";
import MoviesList from "../components/MovieList/MovieList";
import { getSearchResults } from "../apiService/api";
import { Toaster } from "react-hot-toast";
import Loader from "../components/Loader/Loader";
import { useLocation, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (newQuery) => {
    setQuery(newQuery);
  };

  const onSubmit = () => {
    if (!query.trim()) {
      toast.error("Please, enter your request");
      return;
    }

    searchParams.set("query", query);
    setSearchParams(searchParams);

    setQuery("");
  };

  useEffect(() => {
    const fetchResults = async () => {
      const queryFromParams = searchParams.get("query");

      if (!queryFromParams) return;

      setIsLoading(true);
      try {
        const fetchedResults = await getSearchResults(queryFromParams);
        setResults(fetchedResults.results);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchParams]);

  return (
    <div>
      {isLoading && <Loader />}
      <Search query={query} onSubmit={onSubmit} onChange={handleChange} />
      <Toaster />
      <MoviesList movies={results} error={error} location={location} />
    </div>
  );
}
