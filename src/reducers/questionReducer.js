export function questionReducer(reduxState = {}, action) {
  console.log("Step 5 - setting question in state");
  switch (action.type) {
    case "RECEIVE_QUESTION":
      return action.question;

    default:
      return (reduxState = {});
  }
}
