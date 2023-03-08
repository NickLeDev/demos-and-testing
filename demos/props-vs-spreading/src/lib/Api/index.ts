import config from "../../config/local";

const headers = new Headers([["Content-Type", "text/xml/json"], ["app-id", config.appID]]);

export async function get(path: string) {
  return fetch(path, {
    headers,
  })
}

