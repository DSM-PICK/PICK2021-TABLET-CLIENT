import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Attendance, MainPage, Calendar, FirstPage, Login } from "./components";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer />
        <Route path="/" component={FirstPage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/home" component={MainPage} exact />
        <Route path="/attendance" component={Attendance} exact />
        <Route path="/calendar" component={Calendar} exact />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
