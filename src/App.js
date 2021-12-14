import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/Login";

function App() {
  const isLoggedIn = false;

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route
            path="/nomad-coders"
            element={
              <div>
                <h1>Nomad Coders</h1>
                <h1>{!isLoggedIn ? "Please Log in..." : null}</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
