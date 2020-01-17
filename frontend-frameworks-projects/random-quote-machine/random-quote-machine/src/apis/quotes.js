import axios from "axios";

export default axios.create({
  baseURL: "https://type.fit/api/quotes"
});
