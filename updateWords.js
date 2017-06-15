module.exports = function(){
    // select word to be displayed


    var defs = []
    // add word def to defs array

    // add 3 random def to defs array, inserting in front of or after randomly

    // determine placement of correct def

    // return word, defs, correct index

    return function(req,res, next){
        console.log("opened js file")
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