// import basic libraries; first install them with npm i
const express = require("express");
const bodyParser = require("body-parser");

// creating app with express integrated
const app = express();

// integrate the body parser
app.use(bodyParser.urlencoded({extended: true}));

// integrate static files -> these are located in the folde public by convention
app.use(express.static('public'))

// import ejs - the view engine will render our templates files .ejs in the folder views
app.set('view engine', 'ejs'); 


// -- variables -- 

let items = ["Buy Food", "Cook Food", "Eat Food"];
let itemsWork = [];

// -- urls / methods --
app.get('/', function (req, res){
    day = myfunction();

    res.render('list', {listType : day, 
                        newItemList : items});
});


app.post('/', function(req, res){

    let newItem = req.body.newItem;
    if (req.body.listButton === 'Work'){
        itemsWork.push(newItem);
        res.redirect('/work');
    }else{
        items.push(newItem);
        res.redirect('/'); 
    }
});

//
app.get('/work', function (req, res){
    res.render('list', {listType : "Work List", 
                        newItemList : itemsWork});
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