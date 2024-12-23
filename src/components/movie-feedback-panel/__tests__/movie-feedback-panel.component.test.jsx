import { render, screen } from '@testing-library/react';
import MovieFeedbackPanel from '../movie-feedback-panel.component';
import { vi } from 'vitest';
import { fetchMovies } from '../../../utils/backend-api/API-endpoints/movie.GET';

// Mock the fetchMovies function
vi.mock('../../../utils/backend-api/API-endpoints/movie.GET', () => ({
  __esModule: true,
  fetchMovies: vi.fn(),
}));

describe('MovieFeedbackPanel tests', () => {
  it('should render movie title when movie data is available', async () => {
    // Mock the return value of fetchMovies
    const mockMovieData = [
      { id: '1', title: 'Inception', summary: 'A mind-bending thriller', rating: 5 },
    ];
    fetchMovies.mockResolvedValueOnce(mockMovieData); // Simulate the API response

    // Render the component
    render(<MovieFeedbackPanel />);

    // Check if the movie title is rendered
    const movieTitle = await screen.findByText(/Inception/i); // Wait for the movie title to appear
    expect(movieTitle).toBeInTheDocument();
  });
});