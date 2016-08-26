//importação do mysql
var mysql = require('mysql');

//exporta uma conexao com mysql
module.exports = function(){
    //Configuração do mysql para conexão
    return mysql.createConnection({
        host : 'localhost', //endereço da conexão
        user : 'root', // usuario da conexão
        password : '123456789', //senha da conexão
        database : 'casadocodigo_nodejs' //banco de dados
    });
}
