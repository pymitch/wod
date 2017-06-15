const _ = require('underscore')
module.exports = function(words){
    
    return function(req, res, next){
        // select word to be displayed
        
        var defs = []

        var randomWords=_.sample(words, 4)
        
        // add word def to defs array
        for (var i in randomWords) {
            defs.push(randomWords[i].definition)
        }
        
        // determine correct def 
        var position = Math.floor(Math.random()*4)
        // placement of correct def
        var word = randomWords[position].word

        // return word, defs, correct index
        var newWord = {
            "word": word,
            "definitions": defs,
            "position": position
        }
        console.log("opened js file")
        console.log(newWord)
        const jsonfile = require('jsonfile')
        let file = './public/js/newWord.json'
        let fileServer = './newWord.json'
        jsonfile.writeFile(file, newWord,function(err){
            console.error(err)
        })
        jsonfile.writeFile(fileServer, newWord,function(err){
            console.error(err)
        })
        //let document = require('./index.html')
        //console.log(document.getElementById("1").innerHTML)
        next()
    }
}

// // **review and update **
// randomWord = function(wordsObj) {
//     wordsArray = [];
//     wordsArray = Object.keys(wordsObj);
//     var random = wordsArray[Math.floor(Math.random()*wordsArray.length)];
//     def = wordsObj[random]
    
//     var obj = {
//         word: random,
//         definition: def
//     }
//     return obj
// }