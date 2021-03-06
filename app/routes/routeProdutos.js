//Configuração da rota produtos
module.exports = function(app){
    app.get("/produtos", function(req, res){

        //importação do mysql
        var mysql = require('mysql');

        //Configuração do mysql para conexão
        var connection = mysql.createConnection({
            host : 'localhost', //endereço da conexão
            user : 'root', // usuario da conexão
            password : '123456789', //senha da conexão
            database : 'casadocodigo_nodejs' //banco de dados
        });

        //consulta, function(primeiro argumento é o erro, segundo é o resultado)
        connection.query('select * from livros', function(err, results){
            //res.render(caminho da página, JSON)
            //esse JSON está associando os resultados da query com lista da página html
            res.render('produtos/lista', {lista:results});
        });

        //Fecha conexão do mysql
        connection.end();
    });
}
