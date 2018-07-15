import React from "react";
import Title from "../components/Title";
import QuestionContainer from "../containers/QuestionContainer";
import AnswersContainer from "../containers/AnswersContainer";
import ScorecardContainer from "../containers/ScorecardContainer";
// import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <div className="main">
          <QuestionContainer />
          <AnswersContainer />
          <ScorecardContainer />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
