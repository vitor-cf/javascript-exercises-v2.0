// Ao digitar o cpf sem pontuação aparece com a pontuação.

 /* function exibirCpf() {
    let cpf = (document.getElementById('cpf').value);
    let resultado = document.getElementById('resultado-cpf');

    resultado.innerHTML = `<h1>${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}</h1>`;

}

let btn = document.getElementById('btn');
btn.addEventListener('click', exibirCpf);  */

// Ao digita cpf com pontuação ele anula. 

function exibirCpf() {
    let cpf = (document.getElementById('cpf').value);
    let resultado = document.getElementById('resultado-cpf');

    resultado.innerHTML = `<h1>${cpf[0]}${cpf[1]}${cpf[2]}${cpf[4]}${cpf[5]}${cpf[6]}${cpf[8]}${cpf[9]}${cpf[10]}${cpf[12]}${cpf[13]}</h1>`;

}

let btn = document.getElementById('btn');
btn.addEventListener('click', exibirCpf); 