const { addDays } = require("date-fns");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let todayDate = new Date();
  result = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
app.listen(3000);
