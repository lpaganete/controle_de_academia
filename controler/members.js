
const fs = require('fs') //importando a funcionalidade  fs
const data = require("../data.json") //pegando o arquivo data.json 
const { age, date } = require('../utils') //importando o objeto age que trata as datas

// *** CREATE ****/
exports.post = function (req, res) {

    //=== VALIDAÇÂO ===
    const keys = Object.keys(req.body) //pega as chaves do array

    for (key of keys) {
        //req.body.avatar_url = ""
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    //desestruturando o req.body. O req.bory são os campos que vieram do form no front-end
    let{ avatar_url, birth, name, services, gender} = req.body //usei a variavel let pois ela pode mudar


    //=== TRATAMENTO DOS DADOS ===//
    birth = Date.parse(req.body.birth) //Mudando o formato da hr para milisegundos e trazendo para o data.json
    const created_at = Date.now() //trazendo a data da hr de criação do cadastro do instrutorpois (não existe no front)
    const id = Number(data.members.length + 1) //criando id para cada objeto. (não existe no front)


    //=== ENVIANDO DADOS PARA DENTRO DO DATA ===//
    //A cada vez que eu salvar ele irá armazenar os objetos dentro do data.json dentro de um array de objetos
    data.members.push({//usando o objeto JSON como um objeto JS
        
        id,
        avatar_url,
        name,
        birth,
        gender, 
        services,
        created_at,
        
    }) 

    //Depois de verificar se os campos estão preenchidos ele irá salvar os dados em um arquivo json
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) { //Formatando arquivo data.json
        if (err) return res.send("Write file error!")

        return res.redirect("/members") //Depois de tudo salvo dentro do data.json, ele retorna para página members
    }) 
    
}

// *** SHOW ****/
exports.show = function (req, res) { 
    //req.query.id seria com o ?=...
    //req.body
    //req.params utilizando agr

    const {id} = req.params //retirando o id e fazendo com que ele seja uma variável

    const foundMember = data.members.find(function(member) {
        return member.id == id
    }) 

    if (!foundMember) { //se nao tiver o id que foi solicitado 
        return res.send("Member not found!")
    }

           

    //=== Tratando dados para mandar para o front ===//
    const member = {
        ...foundMember,
        age: age(foundMember.birth),
        //split transforma a string em array
        services: foundMember.services.split(","),  
        created_at: new Intl.DateTimeFormat("pt-br").format(foundMember.created_at), //formatando a data para formato do Brasil
    }

    return res.render("members/show", {member: member})
    


}

 
//*** EDIT (Página para editar) ****/
exports.edit = function(req,res) {

    //reaproveitando estre trecho do show
    const {id} = req.params 

    const foundMember = data.members.find(function(member) {
        return member.id == id
    }) 

    if (!foundMember) { //se nao tiver o id que foi solicitado 
        return res.send("Member not found!")
    }

    //
    // member.birth = 814665600000
    // date(member.birth)
    // return yyy-mm-dd

    const member = {
        ...foundMember,
        birth: date(foundMember.birth) 
    }
     
    return res.render("members/edit", {member})
}

//*** PUT (salvar as alterações no back-end) ****/
exports.put = function(req, res) {
    //reaproveitando estre trecho do edit
    const {id} = req.body
    let index = 0

    //verificando se o instrutor foi cadastrado
    const foundMember = data.members.find(function(member, foundIndex ) {
        if (id == member.id){ //adicionando um index ao objeto
            index = foundIndex
            return true
        }
    }) 
    //se o instrutor não foi cadastrado, ele retorn uma mensagems
    if (!foundMember)   return res.send("Member not found!")
    
    //espalhando dentro do objeto todos os dados que estão no data e todos os dados que estão no req.body (front-end)
    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth)
    }

    //agora meus  dados estão ok para serem colocados dentro do objjeto de data.js

    data.members[index] = member //adicionando no data somente o member que eu alterei

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write error!")

        return res.redirect(`/members/${id}`) //quando salvar o arquivo ele redireciona para a pagina do instrutor que foi alterado
    })
}

//*** DELETE ****/
exports.delete = function(req, res) {
    const {id} = req.body //pegando o id de dentro do body
    
    const filteredMembers  = data.members.filter(function(member) { 
        //filter funciona como uma estrutura de repetição. Para cada instrutor, ele vai rodar a function e vai enviar para dentro o member. tudo que a função retornar true, ela vai colocar dentro do novo array filteredMembers. tudo que for falso ele retira de dentro do novo array.
        return member.id != id  //se o id for diferente do que o que esta desmembrado, ele vai colocar dentro do novo array (true)
    })

    data.members = filteredMembers //recebendo os dados atualizados do novo array
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2 ), function(err) {
        if (err) return res.send("Write file error!")
        return res.redirect("/members")
    })
}
