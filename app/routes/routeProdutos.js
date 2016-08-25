//Configuração da rota produtos
module.exports = function(app){
    app.get("/produtos", function(req, res){
        res.render("produtos/lista");
    });
}
