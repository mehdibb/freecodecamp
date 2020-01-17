import "../types";
import quotesApi from "../../apis/quotes";
import { FETCH_QUOTES } from "../types";

export const fetchQuotes = () => async dispatch => {
  const response = await quotesApi.get("/");

  dispatch({ type: FETCH_QUOTES, payload: response.data });
};
