//convert datetime in to Unix time stamp
let unixTimestamp = Math.floor(new Date("2022-09-15 00:00:00.000").getTime()/1000);
console.log(unixTimestamp);

//using moment.js
const moment = require('moment');
console.log(moment("2022-09-15 00:00:00.000").unix());