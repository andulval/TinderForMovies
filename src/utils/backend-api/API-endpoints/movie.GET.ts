import { movieData } from "../database/movies/movies.db";

export type Movie = {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
};

export const fetchMovies = async (): Promise<Movie[]> => {
  //mock .fetch() API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("GET movie called");
      resolve(movieData);
    }, 1000);
  });
};
