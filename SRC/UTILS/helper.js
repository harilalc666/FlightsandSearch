function compareTime(timestr1,timestr2){
    let arrivalTime = new Date(timestr1);
    let departureTime = new Date(timestr2);

    return arrivalTime > departureTime;
}

module.exports = {
    compareTime
}