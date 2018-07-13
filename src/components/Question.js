import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Step 1: calling fetchQuestion");
    this.props.fetchQuestion;
  }

  render() {
    console.log("this.props.question:", this.props.question);
    return (
      <div>
        <p>Question</p>
        <p>{this.props.question.category}</p>
      </div>
    );
  }
}

export default Question;
