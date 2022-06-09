const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.status(200).send(`Your bot is alive! :D`);
});
 
function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is Ready!");
  });
}

module.exports = keepAlive;