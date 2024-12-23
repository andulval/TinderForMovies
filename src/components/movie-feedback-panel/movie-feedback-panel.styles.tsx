import styled from "styled-components";

export const MovieFeedbackPanelContainer = styled.div`
  max-width: 80vw;
  min-width: 320px;
  /* min-height: 600px;
  height: 600px; */
  width: 400px;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const MessageContainer = styled.div<{ $success?: boolean }>`
  position: absolute;
  bottom: 20px; /* You can adjust this to position the message wherever you want */
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 5px 10px;
  background-color: ${({ $success }) =>
    $success ? "#4CAF50" : "#F44336"}; /* Green for success, Red for failure */
  color: white;
  border-radius: 25px; /* For pill shape */
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: opacity 0.5s ease-out;
`;
