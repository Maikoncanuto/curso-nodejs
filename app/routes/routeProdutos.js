//Importação dos modulos
var connectionFactory = require('../infra/connectionFactory');

//Configuração da rota produtos
module.exports = function(app){
    app.get("/produtos", function(req, res){
        //Criando uma conexão
        var connection = connectionFactory();

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
