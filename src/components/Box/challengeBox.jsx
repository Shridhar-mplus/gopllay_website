import Link from "@mui/material/Link";
import { AnimatePresence, motion } from "framer-motion";

const challengeBox = (props) => {
  return (
    <div className="new-challenges-box ">
      <Link href="/challenges-details">
        <div className="challeges-img-box">
          <img src={props.challengeImg} alt="" />
          {props.isChallengeAccepted === "true" ? (
            <div className="trophy-icon">
              <i className="fa fa-trophy" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="challeges-details">
          <p>{props.challengeName}</p>
          <p className="no-of-participates">{props.challengeParticipates}</p>
          {props.isChallengeAccepted === "true" ? (
            <AnimatePresence>
              <motion.div whileHover={{ scale: 0.9 }}>
                <Link className="view-dashboard-btn">
                  <i className="fa fa-dashboard" />
                  View Dashboard
                </Link>
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div whileHover={{ scale: 0.9 }}>
                <Link className="view-dashboard-btn take-a-challenge-btn">
                  Take A Challenge
                </Link>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </Link>
    </div>
  );
};

export default challengeBox;
