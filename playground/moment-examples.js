var moment = require('moment');

//console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

//var now = moment();

//console.log('Current timestamp', now.unix());

// var timestamp = 1570442239;
// var currentMoment = moment.unix(timestamp);
// console.log('Current moment', currentMoment.format('D - MMM - YYYY @ h:mm:ss a'));

// January 3rd, 2016 @ 12:13 AM
var now = moment();
var currentTimestamp = now.unix();
var currentMoment = moment.unix(currentTimestamp);
console.log(currentMoment.format('MMMM Do, YYYY @ h:mm A'));