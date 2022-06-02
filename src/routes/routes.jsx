import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import About from "../pages/About";

import Challenges from "../pages/Challenges";
import ChallengesDetails from "../pages/ChallengesDetails";

import Quiz from "../pages/Quiz";

import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

function FrontRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/challenges" element={<Challenges />} />
        <Route
          exact
          path="/challenges-details"
          element={<ChallengesDetails />}
        />

        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default FrontRoutes;
