import axios from "./_rest";

export async function fetchUser(token) {
  const response = await axios("/api", token)
    .get("/info")
    .catch(res => res);
  return response.data;
}
