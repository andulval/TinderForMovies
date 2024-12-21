import { lazy, Suspense } from "react";
import "./App.css";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

const MainPanelContainer = lazy(
  () =>
    import("./components/main-panel-container/main-panel-container.component")
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
