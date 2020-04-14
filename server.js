//importando dependencias
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes") //importando arquivo onde ficam as rotas

const server = express()

 
//Configurando o express para renderizar o css
//abaixo dizemos para o express ler arquivos statics e que eles estão na pasta public
server.use(express.static('public'))  

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





