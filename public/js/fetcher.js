import { URL } from "./url.js";
async function fetcher() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}
export { fetcher };
