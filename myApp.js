let express = require('express');
let app = express();

console.log("Hello World");

absolutePath = __dirname + '/views/index.html';

app.get('/',function(req,res){
    res.sendFile(absolutePath);
    console.log("Hello Express")
})

































 module.exports = app;
