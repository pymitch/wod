const express = require('express');
const path = require('path');
const updateWords = require('./updateWords.js')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

// connect to db
mongoose.connect('mongodb://localhost/wod')
let db = mongoose.connection

// check connection
db.once('open',function(){
    console.log('connected to database')
    //console.log(db.collections)
})
db.on('error',function(err){
    console.log(err)
})

// initalize app
const app = express();

//bring in user model
let User = require('./models/user')
//*Currently User schema not doing anything

//using a test user for now
var testUser = function(req,res,next){
    var user = {
        name: "mitch",
        bins:{
            bin1:[],
            bin2:[],
            bin3:[],
            bin4:[],
            bin5:[]
        },
        password: "1234"
    }
    req.testUser = user
    next()
}
app.use(testUser)

// load words dictionary
let wordList = require('./dictionary.json')

// set updateWords route
app.use(updateWords(wordList))

// set vew engine
app.engine('handlebars', handlebars({defaultLayout:'layout'}))
app.set('view engine', 'handlebars')

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Express Validator Middleware
//**goes here **

// set static public foler
app.use('/public', express.static('public'))

// set home route
app.get('/', function(req,res){
    User.find({"user":"User1"}, function(err,User){
        console.log(User);
        if(err){
            console.log(err)
        } else {
            let newWord = req.updateWords
            let user = req.testUser
            res.render('layout', {
                word: newWord.word,
                
                def0: newWord.definitions[0],
                def1: newWord.definitions[1],
                def2: newWord.definitions[2],
                def3: newWord.definitions[3],
                position: newWord.position,
                user: user.name
            })
        }
    })
});

// set post route
app.post('/', function(req,res){
    console.log('test')
    console.log(req.body)
    // change to database wordlist update
    if (req.body.answer=="correct"){
        console.log("got it right")
    }
    if (req.body.answer=="wrong"){
        console.log("got it wrong")
    }
})

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000');
});