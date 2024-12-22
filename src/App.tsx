import { lazy, Suspense } from "react";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

const MainPanelContainer = lazy(
  () =>
    import("./components/movie-feedback-panel/movie-feedback-panel.component")
);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <MainPanelContainer />
    </Suspense>
  );
}

export default App;
