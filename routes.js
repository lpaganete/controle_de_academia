const express = require('express')
const routes = express.Router()
const  instructors =  require('./instructors')

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

//Rota para CRIAR instrutor
routes.get('/instructors/create', function(req, res) {
    return res.render("instructors/create")
})

//Criando rota para LISTAR (show)
routes.get('/instructors/:id', instructors.show)

//Rota para EDITAR instrutor
routes.get('/instructors/:id/edit', instructors.edit)

//Configurando rota para trazer os dados do formulário para o backend
routes.post("/instructors", instructors.post) //chando metodo post 

routes.get('/members', function(req, res) {
    return res.send("members")
})

module.exports = routes 