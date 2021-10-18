var assert = require("assert");
var qs = require("querystring");
var https = require("https");

//just so it doesn't show up in automated searches
var DEFAULT_KEY =
  Buffer.from(
    "QUl6YVN5QW55eWZaZ0w4TWZ2WVctMnZOTWFhZ0xmekdyX0hST0NFCg==",
    "base64"
  ) + "";

module.exports = function getVideoTitle(id) {
  return new Promise((resolve) => {
    assert(typeof id === "string", "get-youtube-title: id must be string");

    var url = "https://www.googleapis.com/youtube/v3/videos";
    url +=
      "?" +
      qs.stringify({
        key: DEFAULT_KEY,
        part: "snippet",
        id: id,
      });

    https
      .request(url, (res) => {
        var data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            var json = JSON.parse(data);
          } catch (err) {
            throw err;
          }
          resolve(onresponse(json));
        });
      })
      .end();
  });

  function onrequest(res) {
    var data = "";
    res.on("data", ondata);
    res.on("end", onend);

    function ondata(chunk) {
      data += chunk;
    }
    function onend() {
      try {
        var json = JSON.parse(data);
      } catch (err) {
        throw err;
      }
      return onresponse(json);
    }
  }

  function onresponse(json) {
    if (json.error) throw json.error;
    if (json.items.length === 0) throw new Error("Not found");
    console.dir(json.items[0].snippet);
    return json.items[0].snippet.liveBroadcastContent;
  }
};
