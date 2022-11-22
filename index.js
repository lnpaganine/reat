const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use("/api/foods", require("./routes/api/foods"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`));