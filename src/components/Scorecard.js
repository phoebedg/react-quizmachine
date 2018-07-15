import React from "react";

class Scorecard extends React.Component {
  render() {
    const { question, buttonValue } = this.props;
    const correct = question.map(el => el.correct_answer);
    const correctAnswer = decodeURIComponent(correct);
    console.log("buttonValue:", buttonValue);
    let score = 0;
    if (correctAnswer === buttonValue) {
      score++;
    } else {
      score = 0;
    }
    return (
      <div className="scorecard">
        <img
          className="scorecard__image"
          src="./pat-kwon-603556-unsplash.jpg"
        />
        <p>Score: {score}</p>
      </div>
    );
  }
}

export default Scorecard;
