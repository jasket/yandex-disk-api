import axios from "./_rest";

export async function fetchDiskData(token) {
  const response = await axios("/disk", token)
    .get("/")
    .catch(res => res);
  return response.data;
}

export async function fetchDiskFolder(token, path) {
  path = path || "/";
  const response = await axios("/disk", token)
    .get(`/resources?path=${encodeURI(path)}`)
    .catch(res => res);
  return response.data;
}
