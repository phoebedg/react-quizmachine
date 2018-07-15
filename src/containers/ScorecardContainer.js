import { connect } from "react-redux";
import Scorecard from "../components/Scorecard";

const mapStateToProps = reduxState => {
  return {
    question: reduxState.question,
    buttonValue: reduxState.buttonValue
  };
};

export default connect(
  mapStateToProps,
  null
)(Scorecard);
