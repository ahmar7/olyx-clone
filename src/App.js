import "./assets/css/style.css";
import { Route } from "react-router-dom";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <div className="App">
            <Route exact path={"/"} component={Home} />
      <Route path={"/dashboard"} component={Dashboard} />
    </div>
  );
}

export default App;
