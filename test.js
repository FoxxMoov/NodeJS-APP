const test = require("ava");
const request = require("request");

function requestAsPromise(url, param) {
  return new Promise((resolve, reject) => {
    if (param) {
      request.post(url, { form: param }, function (error, response, body) {
        if (error) reject(error);
        else resolve(body);
      });
    } else {
      request(url, function (error, response, body) {
        if (error) reject(error);
        else resolve(body);
      });
    }
  });
}

test("check if form is here", async (t) => {
  const body = await requestAsPromise("http://localhost:3000/");
  const isFormPresent = body.includes("<form");
  t.is(isFormPresent, true);
});

test("check get /ville", async (t) => {
  const body = await requestAsPromise("http://localhost:3000/ville", {
    nom_ville: "paris",
  });
  t.is(body.includes("paris"), true);
});
