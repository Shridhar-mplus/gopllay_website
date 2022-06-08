import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import Challenges from "../pages/Challenges";
import ChallengesDetails from "../pages/ChallengesDetails";
import Quiz from "../pages/Quiz";
import QuizDetails from "../pages/QuizDetails";
import Contact from "../pages/Contact";
import TermsConditions from "../pages/TermsConditions";
import PageNotFound from "../pages/PageNotFound";

function FrontRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/events" element={<Events />} />
        <Route exact path="/event-details" element={<EventDetails />} />

        <Route exact path="/challenges" element={<Challenges />} />
        <Route
          exact
          path="/challenges-details"
          element={<ChallengesDetails />}
        />

        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/quiz-details" element={<QuizDetails />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/terms-conditions" element={<TermsConditions />} />

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default FrontRoutes;
