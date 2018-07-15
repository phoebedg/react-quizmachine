export function questionReducer(reduxState = [], action) {
  switch (action.type) {
    case "RECEIVE_QUESTION":
      return action.question;

    default:
      return reduxState;
  }
}
