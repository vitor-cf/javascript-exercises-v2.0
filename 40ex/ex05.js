function luzAcesa() { 
    // 'document.getElementById('id') - pega os dados do id informado no HTML 
    // 'style' - conseguimos manipular o css com o javascript 

    document.getElementById("acesa").style = 'display: block';
    document.getElementById("apagada").style = 'display: none';
}  

function luzApagada() {
    document.getElementById('acesa').style = 'display: none';
    document.getElementById('apagada').style = 'display: block';
}

let acender = document.getElementById('apagada'); 
// 'click' - executar ao clicar
acender.addEventListener('click', luzAcesa); 

// 'mouseover' - executar ao passar o mouse por cima 
// acender.addEventListener('mouseover', luzAcesa); 

let apagar = document.getElementById('acesa');  
// 'click' - executar ao clicar
apagar.addEventListener('click', luzApagada); 

// 'mouseover' - executar ao passar o mouse por cima 
// apagar.addEventListener('mouseover', luzApagada); 



