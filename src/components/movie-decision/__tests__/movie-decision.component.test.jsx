import { render, screen, fireEvent } from '@testing-library/react';
import MovieDecision from '../movie-decision.component'; 
import { MOVIE_STATUS_SET } from '../../../utils/backend-api/API-endpoints/movie.PATCH';
import { describe, it, expect } from 'vitest';

describe('MovieDecision tests', () => {
    it('should call onDecision with "accept" when the accept button is clicked', () => {
        const mockOnDecision = vi.fn();  // Mocking the onDecision function
    
        render(<MovieDecision onDecision={mockOnDecision} />);
    
        // Query both buttons based on style
        const buttons = screen.getAllByRole('button'); // This will get both buttons
    
        // Check if the accept button has the color green (rgb(0, 128, 0))
        const acceptButton = buttons.find(button => {
          const style = window.getComputedStyle(button);
          return style.color === 'rgb(0, 128, 0)'; // Green color
        });
    
        // Check if we actually found the accept button
        expect(acceptButton).toBeInTheDocument();
    
        // Simulate a click on the accept button
        fireEvent.click(acceptButton);
    
        // Assert that the onDecision function was called with "accept"
        expect(mockOnDecision).toHaveBeenCalledWith(MOVIE_STATUS_SET.accept);
      });
    

});
