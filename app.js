// import basic libraries; first install them with npm i
const express = require("express");
const bodyParser = require("body-parser");

// creating app with express integrated
const app = express();

// integrate the body parser
app.use(bodyParser.urlencoded({extended: true}));

// import ejs - the view engine will render our templates
// files .ejs in the folder views
app.set('view engine', 'ejs'); 


// -- variables -- 

let items = ["Buy Food", "Cook Food", "Eat Food"];

// -- urls / methods --
app.get('/', function (req, res){
    day = myfunction();

    res.render('list', {kindofDay : day, 
                        newItemList : items});
});


app.post('/', function(req, res){
    let newItem = req.body.newItem;
    items.push(newItem);

    res.redirect('/'); 
});


// -- port listen -- 
app.listen(3000), function(){
    console.log("Server started on port 3000")
}




// -- functions --
function myfunction(){

    let currentDate = new Date();
    optionsDate ={
        weekday : "long",
        day: "numeric",
        month: "long"
    }
    let myday = currentDate.toLocaleDateString("en-US", optionsDate);
    
    return myday
}