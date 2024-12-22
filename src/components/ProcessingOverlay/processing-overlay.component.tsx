import Spinner from "../spinner/spinner.component";
import { Overlay, MainComponentWrapper } from "./processing-overlay.styles";

const ProcessingOverlay = ({
  isProcessing,
  children,
}: {
  isProcessing: boolean;
  children: React.ReactNode;
}) => {
  if (!isProcessing) return <>{children}</>;

  return (
    <MainComponentWrapper>
      <Overlay>
        <Spinner />
      </Overlay>
      {children}
    </MainComponentWrapper>
  );
};

export default ProcessingOverlay;
