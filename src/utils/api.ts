const BASE_URL = "https://sandbox.uberall.com/api";
const PUBLIC_KEY =
  "GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf";

function fetcher(url: RequestInfo, options?: RequestInit | undefined) {
  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: { publicKey: PUBLIC_KEY },
  }).then((response) => response.json());
}

export function get(url: string) {
  return fetcher(url);
}

export function post(url: string, body: any) {
  return fetcher(url, { method: "post", body: JSON.stringify(body) });
}
