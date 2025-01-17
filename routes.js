const express = require('express')
const routes = express.Router()
const  instructors =  require('./controler/instructors')
const  members =  require('./controler/members')


routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

//== INSTRUCTORS ==

routes.get('/instructors', instructors.index)

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

routes.put("/instructors", instructors.put )

//deletar
routes.delete("/instructors", instructors.delete)


//-----------------------------------------------------------------------------------------
//== MEMBERS ==

routes.get('/members', function(req, res) {
    return res.render("members/index")
})

//Rota para CRIAR 
routes.get('/members/create', function(req, res) {
    return res.render("members/create")
})

//Criando rota (show)
routes.get('/members/:id', members.show)

//Rota para EDITAR 
routes.get('/members/:id/edit', members.edit)

//Configurando rota para trazer os dados do formulário para o backend
routes.post("/members", members.post) //chando metodo post 

routes.put("/members", members.put )

//deletar
routes.delete("/members", members.delete)

module.exports = routes 