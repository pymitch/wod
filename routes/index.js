var express = require('express')
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

// router.get('/', function(req,res){
//     res.render('index',{
//         user: req.user
//     })
// })

// set home route
router.get('/', function(req,res){
    User.find({"user":"User1"}, function(err,User){
        console.log(User);
        if(err){
            console.log(err)
        } else {
            let newWord = req.updateWords
            let user = req.testUser
            res.render('main', {
                word: newWord.word,
                def0: newWord.definitions[0],
                def1: newWord.definitions[1],
                def2: newWord.definitions[2],
                def3: newWord.definitions[3],
                position: newWord.position,
                user: user.name
            })
        }
    })
});

// set home post route
router.post('/', function(req,res){
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

router.get('/register',function(req, res) {
    res.render('register', {
    })
})

router.post('/regeister',function(req,res){
    User.register( new User({
        username: req.body.username
    }),
    req.body.password, function(err, user){
        if (err) {
            return res.render('register', {
                user : user
            })
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/')
        })
    })
})

router.get('/login', function(req, res){
    res.render('login', {
        user : req.user
    })
})

router.post('/login',passport.authenticate('local'), function(req, res){
    res.redirect('/')
})

router.get('/logout', function(req, res){
    req.logout()
    res.redirect('/')
})

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router