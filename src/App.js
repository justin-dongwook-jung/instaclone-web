import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/food"><h1>Home</h1></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
