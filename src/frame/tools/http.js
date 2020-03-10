import { _ } from "./util";

class Http {
  get(url) {
    return sendRequest("GET", url);
  }
  post(url, headers, data) {
    return sendRequest("POST", url, headers, data);
  }
}

function sendRequest(method, url, headers, data) {
  let inf = { method };
  if (method === "POST") {
    if (_.isUndefined(headers) && _.isEmpty(headers)) {
      throw new Error(`Error in Headers`);
    }

    if (_.isUndefined(data) && _.isEmpty(data)) {
      throw new Error(`Error in Data`);
    }

    inf = {
      method,
      headers,
      body: JSON.stringify(data)
    };
  }
  return fetch(url, inf).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export const http = new Http();
