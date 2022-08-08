/* Escrever um programa para exibir os números de 1 até 50 na tela. */ 
// Utilizando o for 

for(var i = 1; i <= 50; i++) {
    // console.log(i);
}

/* Fazer um programa para encontrar todos os números pares entre 1 e 100. */ 

for(var i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

/* Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. */ 

function tabuada (numero) {
    
    for (var i = 1; i <= 10; i++) {
        console.log(i * numero);
    }
} 

// console.log(tabuada(5)); 

// contador do numero de opções

function howMany(selectObject) {
    var numeroSelecionados = 0;

    for(var i = 0; i < selectObject.options.length; i++) {
        
        if(selectObject.options[i].selected) {
            numeroSelecionados++;
        }
    }
    return numeroSelecionados;
} 

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    alert('Total de opções selecionadas: ' + 
    howMany(document.selectForm.tipoMusica)) 
});