import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Attendance, MainPage } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MainPage} exact />
      <Route path="/attendance" component={Attendance} exact />
    </BrowserRouter>
  );
}

export default App;
