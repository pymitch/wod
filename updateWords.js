const _ = require('underscore')
//module.exports allows function to be added to app express object

module.exports = function(words){
    //req.tester = ''
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
    
        req.updateWords = newWord
        next()
    }
}