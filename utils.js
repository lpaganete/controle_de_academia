
module.exports = {

    age: function(timestamp) {
        const today = new Date() //objeto de data de hj
        const birthDate = new Date(timestamp) //data do aniversario
    
        // 2019 - 1984 = 35
        let age = today.getFullYear() - birthDate.getFullYear() //getFull year é um metodo que pega o ano todo
     
        // 11 - 12 = -1
        // 11 - 11 = 0
        const month = today.getMonth() - birthDate.getMonth()
        if ( month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
    
        return age 
    } 

}