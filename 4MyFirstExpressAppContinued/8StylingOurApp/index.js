const path = require('path');
const express = require('express');
const exp = require('constants');
const port=8000;

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded()); //middleware
app.use(express.static('assets'));

// // middleware 1

// app.use(function(req,res,next){
//     // console.log('middleware 1 called');
//     req.myName="Laraib";
//     next();
// });

// // middleware 2

// app.use(function(req,res,next){
//     // console.log('middleware 2 called');
//     console.log("My name from MW2", req.myName);
//     next();
// });

var contactList=[
    {
        name: "Arpan",
        phone: "1234567890"
    },
    {
        name: "SRK",
        phone: "0987654321"
    },
    {
        name: "Laraib",
        phone: "5647839210"
    }
]

app.get('/', function(req,res){
    // console.log("From the get route controller", req.myName);
    return res.render('home', {
        title: "My Contact Lists",
        contact_List: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {title: "Playground is Up!"});
});

app.post('/create-contact', function(req, res){
    // return res.redirect('/practice');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    contactList.push(req.body);
    // return res.redirect('/');
    return res.redirect('back');
});

app.listen(port, function(err){
    if (err){
        console.log('Error in running the server', err);
    }
    console.log('Yup! my server is running on Port:', port);
});