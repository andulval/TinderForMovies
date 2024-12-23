import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  width: auto;
  height: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const AcceptButton = styled(BaseButton)`
  background-color: transparent;
  color: green;
  padding: 0px;

  svg {
    width: 50px;
    height: 50px;
    fill: green;
    transition: fill 0.3s ease-in;
  }

  &:hover {
    background-color: transparent;
    border: none;
    svg {
      width: 50px;
      height: 50px;
      fill: #00a800;
    }
  }
`;

export const RejectButton = styled(BaseButton)`
  background-color: transparent;
  color: #c60000;
  border: none;
  padding: 0px;

  svg {
    width: 50px;
    height: 50px;
    fill: #c60000;
    transition: fill 0.3s ease-in;
  }

  &:hover {
    background-color: transparent;
    border: none;
    svg {
      fill: red;
    }
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
