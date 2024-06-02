const path = require('path');
const express = require('express');
const port=8000;

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
    return res.render('home', {
        title: "My Contact Lists",
        contact_List: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {title: "Playground is Up!"});
});

app.listen(port, function(err){
    if (err){
        console.log('Error in running the server', err);
    }
    console.log('Yup! my server is running on Port:', port);
});