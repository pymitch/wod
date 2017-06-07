const express = require('express');
const path = require('path');

// initalize app
const app = express();

// set home route
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000');
});
