import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MainPage } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MainPage} exact />
    </BrowserRouter>
  );
}

export default App;
