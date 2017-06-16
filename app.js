const express = require('express');
const path = require('path');
const updateWords = require('./updateWords.js')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
// initalize app
const app = express();

// define article schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    user: String, 
    bins:[],
    lastLogin: Date
})

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

// set static public foler
app.use('/public', express.static('public'))

// set home route
app.get('/', function(req,res){
    let newWord = req.updateWords
    res.render('layout', {
        word: newWord.word,
        def0: newWord.definitions[0],
        def1: newWord.definitions[1],
        def2: newWord.definitions[2],
        def3: newWord.definitions[3],
        position: newWord.position
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

