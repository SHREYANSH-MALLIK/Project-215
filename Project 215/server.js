const express = require("express");
const app = express();
const server = require("http").Server(app);
app.set("view engine", "ejs");
app.use(express.static("public"));

const button = document.createElement('button');

button.textContent = 'Click me!';
button.addEventListener('click', () => {
  alert('Cannot Get !');
});

server.listen(3030);