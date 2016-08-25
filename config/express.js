//Importação do express
var app = require('express')();

//Configuração do Express e modulos
app.set('view engine', 'ejs');

//Retorna express configurado
module.exports = function(){
    return app;
}
