import Spinner from "../spinner/spinner.component";
import {
  OverlayBackground,
  MainComponentWrapper,
} from "./processing-overlay.styles";

const ProcessingOverlay = ({ isProcessing }: { isProcessing: boolean }) => {
  return (
    <MainComponentWrapper>
      {isProcessing && (
        <OverlayBackground>
          <Spinner /> {/* The spinner */}
        </OverlayBackground>
      )}
    </MainComponentWrapper>
  );
};

export default ProcessingOverlay;
