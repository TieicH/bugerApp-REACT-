import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-c6e49.firebaseio.com/"
});

export default instance;
