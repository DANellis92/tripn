export const environment = {
  production: true
};

export let APIURL = "";

switch (window.location.hostname) {
  case "https://tripn-client.herokuapp.com/":
    APIURL = "https://tripn-server.herokuapp.com/";
    break;
  default:
    APIURL = "http://localhost:4200";
}
