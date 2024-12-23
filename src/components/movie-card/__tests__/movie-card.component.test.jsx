import {render, screen, fireEvent  } from '@testing-library/react';
import MovieCardComponent from "../movie-card.component";
import { describe, it, expect } from 'vitest';

describe('MovieCard tests', () => {
    it('should render the movie title', () => {
        const movie = {
          title: 'Inception',
          summary: 'A mind-bending thriller',
          rating: 5,
          imageURL: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
        };
      
        render(<MovieCardComponent movie={movie} />);
      
        const titleElement = screen.getByText(movie.title);
        expect(titleElement).toBeInTheDocument();
      });
    
      it('should render the movie image correctly', () => {
        const movie = {
          title: 'Inception',
          summary: 'A mind-bending thriller',
          rating: 4,
          imageURL: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
        };
      
        render(<MovieCardComponent movie={movie} />);
      
        const imageElement = screen.getByAltText(movie.title); // Assuming the image has an alt text
        expect(imageElement).toHaveAttribute('src', movie.imageURL);
      });

      it('should display fallback image if image fails to load', () => {
        const movie = {
          title: 'Inception',
          summary: 'A mind-bending thriller',
          rating: 4,
          imageURL: '/invalid/path/to/image.jpg', // Invalid image path to simulate load failure
        };
      
        render(<MovieCardComponent movie={movie} />);
      
        const imageElement = screen.getByAltText(movie.title);
      
        // Initially, the image should try to load with the invalid imageURL
        expect(imageElement).toHaveAttribute('src', movie.imageURL);
      
        // Simulate the image error by triggering the onError event
        fireEvent.error(imageElement);
      
        // Now, after the image fails to load, it should show the fallback image
        expect(imageElement).toHaveAttribute('src', '/assets/no-image.png');
      });
})