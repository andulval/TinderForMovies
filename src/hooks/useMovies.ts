import { useState, useEffect, useRef } from "react";
import {
  fetchMovies,
  Movie as TMovie,
} from "../utils/backend-api/API-endpoints/movie.GET";

const useMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allRated, setAllRated] = useState(false);
  const moviesRef = useRef<TMovie[]>([]); // Store the movie list in a ref to persist it without causing re-renders

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const fetchedMovies =
          await fetchMovies(); /*From backend API:  Add paging parameters for optimization */
        moviesRef.current = fetchedMovies;
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const nextMovie = () => {
    if (currentIndex + 1 >= moviesRef.current.length) {
      setAllRated(true); //to track if all movies are rated
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    loading,
    movies,
    currentIndex,
    nextMovie,
    allRated,
  };
};

export default useMovies;
