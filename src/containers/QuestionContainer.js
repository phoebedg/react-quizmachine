import { connect } from "react-redux";
import { fetchQuestionFromAPI } from "../actions";
import Question from "../components/Question";

const mapStateToProps = reduxState => {
  return {
    question: reduxState.question
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: dispatch(fetchQuestionFromAPI())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
