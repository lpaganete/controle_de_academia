//importando dependencias
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes") //importando arquivo onde ficam as rotas

const server = express()

//Responsavel por fazer funcionar o req.body(trazer do frontend pelo metodo post os dados do formulario para o backend)
server.use(express.urlencoded({extended: true})) /


servr.use(express.static('public'))  

server.use(routes)

//configurando template engine
server.set("view engine", "njk") 
 
nunjucks.configure("views", {
    
    express: server,
    autoescape: false, 
     noCache: true, 

})

//Setando a porta que o servidor vai rodar e exibindo mensagem caso o ele execute
server.listen(5001, function() {
    console.log("Server is running!")
})





