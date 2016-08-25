//Importação do express
var app = require('express')();

//Configuração do Express e modulos
app.set('view engine', 'ejs');
app.set('views', './app/views'); //configura o express a procurar a pasta views

//Retorna express configurado
module.exports = function(){
    return app;
}
