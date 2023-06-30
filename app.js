const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello from les cigales");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
