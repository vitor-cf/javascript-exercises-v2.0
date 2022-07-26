function corVerde () {
    document.getElementById('verde').style = "background-color: green; border:none; padding:10px;"
}  

function corVermelha () {
    document.getElementById('vermelho').style = "background-color: red; border:none; padding:10px;"
}
 
let btnVerde = document.getElementById('verde');
btnVerde.addEventListener('click', corVerde) 

let btnVermelho = document.getElementById('vermelho');
btnVermelho.addEventListener('click',corVermelha);