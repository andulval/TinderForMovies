import styled from "styled-components";

// Wrapper for the main component that will contain the overlay
export const MainComponentWrapper = styled.div`
  position: relative;
`;

// Overlay to gray out only the main component
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border-radius: 10px;
`;
