<<<<<<< HEAD
//Importa express
var app = require('express')();

//Configura EJS
app.set('view engine', 'ejs');

=======
//Importação do express
var app = require('express')();

//Configuração do Express e modulos
app.set('view engine', 'ejs');

//Retorna express configurado
>>>>>>> dev
module.exports = function(){
    return app;
}
