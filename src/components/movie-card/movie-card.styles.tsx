import styled from "styled-components";

export const MovieCardContainer = styled.div`
  padding: 1rem;
  text-align: center;
  padding-top: 0;
  padding-bottom: 0.2rem;
`;
export const MovieCardTitle = styled.h3`
  margin-bottom: 0.4rem;
  text-align: center;
`;
export const MovieCardSummary = styled.p`
  font-size: 0.875rem;
  text-align: center;
`;
export const MovieCardImage = styled.img<{ $isLoaded: boolean }>`
  width: 192px;
  height: 280px;
  min-width: 192px;
  min-height: 280px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  // Initial opacity to 0 (invisible) until loaded
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.2s ease-in-out; // Smooth fade-in effect
`;
