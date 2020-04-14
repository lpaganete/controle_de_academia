
// o objeto document consegue manipular todos os elementos e  tags do html transformando cada tag em objeto 
// O querySelector vai selecionar qualquer elemento baseado em classe, id, ou no proprio nome da tag. (Baseado no CSS )

/*ABRINDO O MODAL*/
const modalOverlay = document.querySelector('.modal-overlay') //Aqui estou selecionando a classe moda-overlay do css. Quando ele achar, ele vai adicionar na variavel modalOverlay que foi criada. 
const  cards =  document .querySelectorAll ('.card') //com o all, ele irá pegar todos os elementos com classe card 

//Para cada card dentro da variavel cards. qundo "ouvir" um click. chame a classe CSS: modal-overlay.active 
for (let card of cards) {
    //addEventListener é um ouvidor de eventos. O evento que vou querer ouvir é um click
     card.addEventListener("click", function() {
        
        const videoId = card.getAttribute("id") //! getAttribute, permite pegar qualquer atributo dentro da div 

        //Dizendo para que página que eu quero que vá quando clicar no card
        window.location.href = `/video?id=${videoId}`  
 
     }) 
} 
