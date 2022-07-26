// Sem utilizar um botão 
/* 

function load() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `Esse texto foi inserido pelo JavaScript...`; 

} 


// onload Inicia ao abrir a página.
window.onload = load; */ 

// Utilizando um botao 

function load() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `Esse texto foi inserido pelo JavaScript...`; 

    window.onload = load;
}  

let btn = document.getElementById('btn');
btn.addEventListener('click', load);



