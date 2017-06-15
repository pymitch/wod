const express = require('express')
const path = require('path')
let updateWords = require('./updateWords.js')

// initalize app
const app = express()

// test word collection
let words = {
    "penchant":"a strong and continued inclination",
    "incoherent":"lacking orderly continuity",
    "catercorner":"in a diagonal or oblique position",
    "adumbrate":"to foreshadow vaguely",
}

app.use('/public', express.static( 'public'))

app.use(updateWords())

// set home route
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

//set app route
app.get('/app', function(req,res){
    res.send()
})

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000')
})