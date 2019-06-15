import axios from "axios";

let _axios = (baseURL, token) =>
  axios.create({
    baseURL,
    headers: {
      Authorization: `OAuth ${token}`
    }
  });

export default _axios;
