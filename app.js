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

    var currentDay = new Date();
    var day = '';
    
    if (currentDay.getDay() === 6 || currentDay.getDay() === 0 ){
        day = 'weekend';
    }else{
        day = 'weekday :( ';
    }

    return day
}