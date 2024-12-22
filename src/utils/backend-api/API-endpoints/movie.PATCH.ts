
export enum MOVIE_STATUS_SET {
  accept = "accepted",
  reject = "rejected",
}

export const changeMovies = async (
  id: string,
  status: MOVIE_STATUS_SET
): Promise<void> => {
  //mock .fetch() PATCH API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Movie with id: ${id}, get status: ${status}`);
      resolve();
    }, 700);
  });
};
