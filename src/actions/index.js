export function receiveQuestion(data) {
  return {
    type: "RECEIVE_QUESTION",
    question: data.results
  };
}

export function fetchQuestionFromAPI() {
  return function(dispatch) {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986")
      .then(response => response.json())
      .then(data => {
        console.log("data:", data);
        dispatch(receiveQuestion(data));
      })
      .catch(function(error) {
        console.log("something went wrong");
      });
  };
}

export function returnScore(button) {
  console.log("Button:", button);
  return {
    type: "GET_BUTTON_VALUE",
    buttonValue: button
  };
}
