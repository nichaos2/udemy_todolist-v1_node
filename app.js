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
    optionsDate ={
        weekday : "long",
        day: "numeric",
        month: "long"
    }
    var day = currentDate.toLocaleDateString("en-US", optionsDate);
    
    return day
}