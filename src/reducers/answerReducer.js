export function answerReducer(reduxState = "", action) {
  switch (action.type) {
    case "GET_BUTTON_VALUE":
      return action.buttonValue;

    default:
      return reduxState;
  }
}
