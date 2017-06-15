const express = require('express');
const path = require('path');
const updateWords = require('./updateWords.js')
const fs = require('fs')

// initalize app
const app = express();

// load words dictionary
let wordList = require('./dictionary.json')

// set updateWords route
//app.use(updateWords(wordList))

app.use('/public', express.static('public'))

// set home route
app.get('/', function(req,res){
    //console.log(a)
    html = path.join(__dirname,'index.html')
    //res.sendFile(path.join(__dirname,'words.json'),)
    res.sendfile(path.join(__dirname,'index.html'))
});

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000');
});

