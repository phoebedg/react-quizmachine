import { connect } from "react-redux";
import Answers from "../components/Answers";
import { returnScore, fetchQuestionFromAPI } from "../actions";

const mapStateToProps = reduxState => {
  return {
    question: reduxState.question
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: button => {
      dispatch(returnScore(button));
      dispatch(fetchQuestionFromAPI());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers);
