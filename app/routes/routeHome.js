//Configuração da rota home/index página principal
module.exports = function(app){
    app.get("/", function(req, res){
        res.render("home/index");
    });
}
