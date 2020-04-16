const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {
    return res.render("instructors/create")
})

//configurando rota para trazer os dados do formulário para o backend
routes.post("/instructors", function(req, res) {
    //req.query funciona com get
    //req.body funciona com post
    //esta variavel foi configurada no server.js
    return res.send(req.body) 
})

routes.get('/members', function(req, res) {
    return res.send("members")
})

module.exports = routes 