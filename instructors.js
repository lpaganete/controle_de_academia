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
        return res.send(req.body) //esta variavel foi configurada no server.js
    
}
//update

//delete
