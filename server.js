const express = require("express");
const path = require("path");
const app = express();
// app.use(express.static(__dirname + "/dist/admin"));
// app.get("/*", function (req, res) {
//   //res.sendFile(path.join(__dirname + "/dist/<app-name>/index.html"));
//   const index = path.join(__dirname, "dist/<app-name>/", "index.html");
//   res.sendFile(index);
// });

app.use(express.static(path.join(__dirname, "dist/admin")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/admin", "index.html"));
});

app.listen(process.env.PORT || 8080);
