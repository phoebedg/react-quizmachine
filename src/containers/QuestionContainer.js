import { connect } from "react-redux";
import { receiveQuestion, fetchQuestionFromAPI } from "../actions";
import Question from "../components/Question";

const mapStateToProps = reduxState => {
  console.log("Step 6 - calling mapStateToProps in QuestionContainer");
  return {
    question: reduxState.question
  };
};

const mapDispatchToProps = dispatch => {
  console.log("Step 2: getting action creator");
  return {
    fetchQuestion: dispatch(fetchQuestionFromAPI())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
