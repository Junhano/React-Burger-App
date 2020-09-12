import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-94a36.firebaseio.com/",
});

export default instance;
