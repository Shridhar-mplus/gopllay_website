import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Challenges from "../pages/Challenges";
import Quiz from "../pages/Quiz";

function FrontRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/challenges" element={<Challenges />} />
        <Route exact path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default FrontRoutes;
