import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => (
  <SpinnerOverlay data-testid="spinner-overlay">
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
