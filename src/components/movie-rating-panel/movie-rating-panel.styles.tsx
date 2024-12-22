import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const MoviePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
`;
