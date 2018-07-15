import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion;
  }

  render() {
    const { question } = this.props;
    console.log("this.props.question:", this.props.question);
    return (
      <div>
        {question.map(el => {
          const plainCategory = decodeURIComponent(el.category);
          const plainQuestion = decodeURIComponent(el.question);
          return (
            <div className="question">
              <p>Category: {plainCategory}</p>
              <p>{plainQuestion}</p>
              <p>(Difficulty level: {el.difficulty})</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Question;
