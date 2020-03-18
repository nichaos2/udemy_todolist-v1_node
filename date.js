exports.getDate = function(){

    let currentDate = new Date();
    optionsDate ={
        weekday : "long",
        day: "numeric",
        month: "long"
    }
    let day = currentDate.toLocaleDateString("en-US", optionsDate);
    return day
}

exports.getDay = function(){

    let currentDate = new Date();
    optionsDate ={
        weekday : "long",
    }
    let day = currentDate.toLocaleDateString("en-US", optionsDate);
    
    return day
}