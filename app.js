const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get('/', function (req, res){
    msg = myfunction();
     
    //res.send(msg)
    res.sendFile(__dirname + "/index.html")
});

app.listen(3000), function(){
    console.log("Server started on port 3000")
}


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