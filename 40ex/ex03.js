function mostraNome() {
    let nome = document.getElementById('nome').value;
    
    alert(nome);
}

let btn = document.getElementById('btn');

btn.addEventListener('click', mostraNome);
     
