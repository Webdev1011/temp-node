const fs = require("fs");

fs.writeFileSync("text.txt", "This is a testing file2 write");

fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log(data);
});
