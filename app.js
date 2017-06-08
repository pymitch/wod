const express = require('express');
const path = require('path');
const pug = require('pug');



// initalize app
const app = express();

// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// test word collection
let words = {
    "penchant":"a strong and continued inclination",
    "incoherent":"lacking orderly continuity",
    "catercorner":"in a diagonal or oblique position",
    "adumbrate":"to foreshadow vaguely",
};
randomWord = function(wordsObj) {
    wordsArray = [];
    wordsArray = Object.keys(wordsObj);
    var random = wordsArray[Math.floor(Math.random()*wordsArray.length)];
    def = wordsObj[random]
    
    var obj = {
        word: random,
        definition: def
    }
    return obj
}
console.log(Object.keys(words));

console.log(randomWord(words));

app.use(express.static(path.join(__dirname, 'public')));

// set home route
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

//set app route
app.get('/app', function(req,res){
    res.send()
})

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000');
});
