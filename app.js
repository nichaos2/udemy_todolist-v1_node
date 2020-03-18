// import basic libraries
const express = require("express");
const bodyParser = require("body-parser");

// creating app with express
const app = express();
// import ejs - the view engine will render our templates
// files .ejs in the folder views
app.set('view engine', 'ejs'); 


// -- urls / methods --
app.get('/', function (req, res){
    day = myfunction();

    res.render('list', {kindofDay: day});
});

app.listen(3000), function(){
    console.log("Server started on port 3000")
}

// -- functions --
function myfunction(){

    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var day = '';
    
switch (currentDay) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;

    default:
        console.log("Error: current day is equal to : " + currentDay);
        break;
}

    return day
}