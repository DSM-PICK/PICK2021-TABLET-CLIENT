import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Attendance, MainPage, Calendar, FirstPage, Login } from "./components";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Route path="/" component={FirstPage} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/home" component={MainPage} exact />
      <Route path="/attendance" component={Attendance} exact />
      <Route path="/calendar" component={Calendar} exact />
    </BrowserRouter>
  );
}

export default App;
