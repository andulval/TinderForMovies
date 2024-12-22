import { useRef } from "react";
import { MOVIE_STATUS_SET } from "../utils/backend-api/API-endpoints/movie.PATCH";

export const useSwipeToReject = (
  handleDecision: (movieId: string, decision: MOVIE_STATUS_SET) => void,
  currentMovieId: string
) => {
  const startTouch = useRef<{ x: number; y: number } | null>(null);

  const handleSwipe = (e: React.TouchEvent) => {
    if (!startTouch.current) return;

    const touchEnd = e.changedTouches[0]; // Get the final touch position
    const diffX = touchEnd.pageX - startTouch.current.x; // Calculate horizontal distance
    const diffY = touchEnd.pageY - startTouch.current.y; // Calculate vertical distance
    const minSwipeDistance = 50;

    if (Math.abs(diffX) > Math.abs(diffY) && diffX > minSwipeDistance) {
      // If horizontal swipe is greater than vertical swipe and swipe is right
      handleDecision(currentMovieId, MOVIE_STATUS_SET.reject); // Call handleDecision with "reject"
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.touches[0];
    startTouch.current = { x: touchStart.pageX, y: touchStart.pageY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleSwipe(e);
    startTouch.current = null; // Reset after swipe
  };

  return {
    handleTouchStart,
    handleTouchEnd,
  };
};
