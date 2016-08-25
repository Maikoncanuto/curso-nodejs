//importações e configurações
var app = require("./config/express")();

//Importação das rotas
var routeProdutos = require('./app/routes/routeProdutos.js')(app);
var routeHome = require('./app/routes/routeHome')(app);

//Configuraçõa do servidor
var porta = 3000;

//servidor
app.listen(porta, function(){
    console.log("Servidor executando...");
    console.log("Porta: " + porta);
    console.log("IP: localhost");
});
