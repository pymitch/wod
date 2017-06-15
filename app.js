const express = require('express');
const path = require('path');
const updateWords = require('./updateWords.js')
const handlebars = require('express-handlebars')

// initalize app
const app = express();


// load words dictionary
let wordList = require('./dictionary.json')

// set updateWords route
//app.use(updateWords(wordList))

app.use('/public', express.static('public'))

// set vew engine
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

// set home route
app.get('/', function(req,res){
    res.render(path.join(__dirname,'layout'))
    //res.sendfile(path.join(__dirname,'index.html'))
});

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000');
});

