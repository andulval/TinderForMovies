import { movieData } from "../database/movies/movies.db";

export type Movie = {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
};

export const fetchMovies = async (): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movieData);
    }, 1000);
  });
};
