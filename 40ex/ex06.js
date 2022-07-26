// Caso os valores estejam preenchidos ao clicar no botão
// inicia a soma dos valores 

/* function soma() {
    let valor1 = parseInt(document.getElementById('soma1').value);
    let valor2 = parseInt(document.getElementById('soma2').value);

    let resultado = document.getElementById('resultado-soma'); 
    

    resultado.innerHTML = `Resultado da soma: ${valor1 + valor2}`
} 

let btn = document.getElementById('btn-soma');
btn.addEventListener('click', soma);  */

/*  (17) Crie uma função que recebe 2 parâmetros e retorna a soma deles, 
porem caso seja passado um parâmetro vazio ela retorne zero.*/ 

/* function soma() {
    let n1 = parseInt(document.getElementById('soma1').value);
    let n2 = parseInt(document.getElementById('soma2').value); 

     let res = document.getElementById('resultado-soma');

     if(!n1 || !n2) {
         res.innerHTML = `0`;
     } else {
        res.innerHTML = `${(n1+n2)}`;
     }
} 

let btn = document.getElementById("btn-soma");
btn.addEventListener('click', soma); */ 

/* Exiba o 'resto' da seguinte divisão: (5 / 2) */ 

function resto() {
    let n1 = parseFloat(document.getElementById('soma1').value);
    let n2 = parseFloat(document.getElementById('soma2').value); 

     let res = document.getElementById('resultado-soma');

     if(!n1 || !n2) {
         res.innerHTML = `0`;
     } else {
        res.innerHTML = `${(n1 % n2)}`;
     }
}  

let btn = document.getElementById("btn-soma");
btn.addEventListener('click', resto);

