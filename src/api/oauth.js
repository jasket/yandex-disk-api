const OAUTH_ID = "f3f6c5f3cb464384b4b6307b987909c0";

export function getOauthToken() {
  const url = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${OAUTH_ID}`;
  window.open(url, "_self");
}
