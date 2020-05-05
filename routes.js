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

// HTTP VERBS
// GET : Receber RESOURCE
// POST : Criar ou salvar
// PUT : Atualizar
// DELETE : Deletar

routes.put("/instructors", instructors.put )

//deletar
routes.delete("/instructors", instructors.delete)

routes.get('/members', function(req, res) {
    return res.send("members")
})

module.exports = routes 