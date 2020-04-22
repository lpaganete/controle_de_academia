
const fs = require('fs') //importando a funcionalidade 
const data = require("./data.json") //pegando o arquivo data.json 
//exportando functions do crud
//create
exports.post = function (req, res) {
   
        //req.query funciona com get
        //req.body funciona com post

        //Object é um constructor todos os campos são obrigatórios
        const keys = Object.keys(req.body) //pega as chaves do array
    
        for (key of keys) {
            //req.body.avatar_url = ""
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
    
        }

        //a cada vez que eu salvar ele irá armazenar os objetos dentro do data.json dentro de um array de objetos
        data.instructors.push(req.body) //usando o objeto JSON como um objeto JS
        //depois de verificar se os campos estão preenchidos ele irá salvar os dados em um arquivo json
        fs.writeFile("data.json", JSON.stringify(data), function(err) { //definindo o arquivo, dps como ele ira salvar no arquivo, tratando erro caso não salve
            if (err) return res.send("Write file error!")

            return res.redirect("/instructors")
        }) //callback function é uma função que se passa dentro de uma função


        //return res.send(req.body) //esta variavel foi configurada no server.js  
}


//update

//delete