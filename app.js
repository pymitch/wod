const express = require('express');
const path = require('path');
const updateWords = require('./updateWords.js')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')

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
app.use('/public', express.static('public'))

// set vew engine
app.engine('handlebars', handlebars({defaultLayout:'layout'}))
app.set('view engine', 'handlebars')

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
    // change to database wordlist update
    if (req.data=="true"){
        console.log("got it right")
    }
    if (req.data=="false"){
        console.log("got it wrong")
    }
})

//start server
app.listen(8080, function(){
    console.log('Server started on port 8080');
});

