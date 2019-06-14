import axios from "axios";

export async function fetchUser(token) {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  const url = "/api/info";
  const response = await axios
    .get(url, {
      headers: {
        Authorization: `OAuth ${token}`
      }
    })
    .catch(res => res);
  console.log(response);
  return response.data;
}
