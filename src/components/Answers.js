import React from "react";
import Button from "./Button";

class Answers extends React.Component {
  render() {
    const { question, handleClick } = this.props;
    const correctAnswer = question.map(el => el.correct_answer);
    console.log("Correct Answer:", correctAnswer);
    const incorrectAnswers = question.map(el => el.incorrect_answers);
    const combined = incorrectAnswers.concat(correctAnswer);
    const answers = [].concat.apply([], combined);
    const plainAnswers = decodeURIComponent(answers).split(",");
    const buttons = plainAnswers.sort(function() {
      return 0.5 - Math.random();
    });

    return (
      <div className="answers">
        {buttons.map(button => {
          return <Button button={button} handleClick={handleClick} />;
        })}
      </div>
    );
  }
}

export default Answers;
