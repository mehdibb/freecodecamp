import { FETCH_QUOTES } from "../types";

export default (
  state = [{ text: "No quotes yet", author: "No author yet" }],
  action
) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    default:
      return state;
  }
};
