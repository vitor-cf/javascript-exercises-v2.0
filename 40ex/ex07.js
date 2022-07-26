function saudacao() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value; 

    alert(`Olá ${nome} ${sobrenome}`);
} 

let btn = document.getElementById('btn');
btn.addEventListener('click', saudacao);

    