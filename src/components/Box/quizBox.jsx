import Link from "@mui/material/Link";

const quizBox = (props) => {
  return (
    <Link href="/quiz-details">
      <div className="quizBox">
        <img src={props.quizImg} alt="" />
        <p>{props.quizName}</p>
      </div>
    </Link>
  );
};

export default quizBox;
