function quantidadeLetras() {
    let nome = document.getElementById('nome').value;
    
    alert(nome.length); 
    
} 
let btn = document.getElementById('btn');
btn.addEventListener('click', quantidadeLetras); 


