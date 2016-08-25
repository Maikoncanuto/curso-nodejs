//Importa express
var app = require('express')();

//Configura EJS
app.set('view engine', 'ejs');

module.exports = function(){
    return app;
}
