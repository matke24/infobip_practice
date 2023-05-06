function initServer() {
  let http = require("http");
  let url = require("url")
  http
    .createServer(function (req, res) {
      res.writeHead(200, { "Content-Type": "text/html" });
      let q = url.parse(req.url, true).query;
      let txt =  q.month + "." + q.year
      res.end(txt);
    })
    .listen(8080);
}

initServer();
//module.exports = initServer
