//importações e configurações
var express = require("./config/express")();
var porta = 3000;

//rotas
express.get("/", function(req, res){
    res.end("<html><body>Home do site</body></html>");
});
express.get("/produtos", function(req, res){
    res.render("produtos/lista");
});

//servidor
express.listen(porta, function(){
    console.log("Servidor executando...");
    console.log("Porta: " + porta);
    console.log("IP: localhost");
});
