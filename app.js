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
    msg = myfunction();
     
    //res.send(msg)
    res.sendFile(__dirname + "/index.html")
});

app.listen(3000), function(){
    console.log("Server started on port 3000")
}

// -- functions --
function myfunction(){

    var today = new Date();
    var msg = '';
    
    if (today.getDay() === 6 ||  today.getDay() === 0 ){
        msg = 'It is the weekend';
    }else{
        msg = 'It is a work day :( ';
    }

    return msg
}