export function receiveQuestion(data) {
  console.log("Step 4 - creating RECEIVE_QUESTION question object");
  return {
    type: "RECEIVE_QUESTION",
    question: data.results
  };
}

export function fetchQuestionFromAPI() {
  return function(dispatch) {
    console.log("Step 3: calling fetch");
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
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
