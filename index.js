// index.js
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

// schedule tasks to be run on the server
cron.schedule("* * * * *", function () {
    console.log("running a task every minute");
});

// what the above schedule means
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

app.listen(3128);
