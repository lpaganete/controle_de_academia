
const fs = require('fs') //importando a funcionalidade  fs
const data = require("./data.json") //pegando o arquivo data.json 
//exportando functions do crud
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
    const id = Number(data.instructors.length + 1) //criando id para cada objeto. (não existe no front)


    //=== ENVIANDO DADOS PARA DENTRO DO DATA ===//
    //A cada vez que eu salvar ele irá armazenar os objetos dentro do data.json dentro de um array de objetos
    data.instructors.push({//usando o objeto JSON como um objeto JS
        
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

        return res.redirect("/instructors") //Depois de tudo salvo dentro do data.json, ele retorna para página instructors
    }) 


    
}


//*** UPDATE ****/

//*** DELETE ****/
