//takes two date objects arrival dateTime and departure dateTime
function dateTimeCompare(date1, date2){
    return Date.parse(date1)<=Date.parse(date2);
}
module.exports = {
    dateTimeCompare,
}