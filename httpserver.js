const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>this is codewithgirish</h1><p>this is a basic application</p>");
});

server.listen(port, () => {
  console.log(`Server is listing to port ${port}`);
});
