module.exports.getDate = getDate;

function getDate(){

    let currentDate = new Date();
    optionsDate ={
        weekday : "long",
        day: "numeric",
        month: "long"
    }
    let day = currentDate.toLocaleDateString("en-US", optionsDate);
    
    return day
}

module.exports.getDay = getDay;

function getDay(){

    let currentDate = new Date();
    optionsDate ={
        weekday : "long",
    }
    let day = currentDate.toLocaleDateString("en-US", optionsDate);
    
    return day
}