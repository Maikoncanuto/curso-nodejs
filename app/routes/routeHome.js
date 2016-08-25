//Configuração da rota home/index
module.exports = function(app){
    app.get("/", function(req, res){
        res.render("home/index");
    });
}
