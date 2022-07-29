/*  1 - Escreva	 um	 programa	 para	 ler	 2	 valores	 
(considere	que não	serão informados valores iguais)	
 e	escrever	o	maior	deles.  */

function maiorValor (n1,n2) {
    
    if(n1 > n2 ) {
        // return 'O número ' + n1 + ' é MAIOR que o número ' + n2;
    } 
    if (n1 === n2) {
        // return 'O número ' + n1 + ' é IGUAL o número ' + n2;
    }
    else {
        // return 'O número ' + n2 + ' é MENOR que o número ' + n1;
    }
    
}

/* Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
(não	é	necessário	considerar	o	mês	em	que	ela	nasceu). */ 

function idadeVotar(ano) {

    let idade = 2022 - ano;

    if(2022 - ano < 18) {
        // return 'Essa pessoa não tem idade para votar ainda. ' + 'Idade: ' +  idade;
    } else {
        // return 'Essa pessoa tem idade para votar. ' + 'Idade: ' +  idade;
    }
    
}

/* Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
seguintes	mensagens:	
ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
ACESSO	NEGADO	caso	a	senha	seja	inválida */ 

function verificaSenha(senha) {

    let senhaValida = 1234;

    if(senha !== senhaValida) {
        // return 'ACESSO NEGADO';
    } else {
        // return 'ACESSO PERMITIDO';
    }
}

/* As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
valor	total	da	compra */ 

function qtdMacas(quantidade) {

    let numeroMacas = quantidade;

    let calculo1 = (quantidade * 0.30);
    let calculo2 = (quantidade * 0.25);
    
    let total1 = calculo1.toFixed(2);
    let total2 = calculo2.toFixed(2);
    
    if(quantidade < 12) {
        // return 'Quantidade de maçãs: ' + numeroMacas + ' | ' + 'Valor total da compra: ' + 'R$ ' + total1;
    } 
    if (quantidade >= 12) {
        // return 'Quantidade de maçãs: ' + numeroMacas + ' | ' + 'Valor total da compra: ' + 'R$ ' + total2;
    }

} 

/* Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros (considere	que não	
serão lidos valores	iguais)	e	escrevê-los	em	ordem	crescente. */ 

function lerValores(n1,n2,n3) {
    
    if(n1 > n2 && n1 > n3) {
        // return n1 + ' ' + n2 + ' ' + n3 ;

    } 
    if (n2 > n1 && n2 > n3) {
        // return n2 + ' ' + n1 + ' ' + n3 ;
    } 
    if (n3 > 1 && n3 > n2) {
        // return n3 + ' ' + n1 + ' ' + n2 ;
    }

}



/* Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
Fórmulas:	
- para	homens:	(72.7	*	Altura)	– 58	
- para	mulheres:	(62.1	*	Altura)	– 44.7 */ 

function pesoIdeal (altura,sexo) {

    let pesoIdealMulher = (62.1	* altura) - 44.7;
    let pesoIdealHomem = (72.7	*	altura)	- 58;

    if(sexo === 1) {
        return '1: feminino' + ' peso: ' + pesoIdealMulher;
    }
    if(sexo ===2) {
        return '2: masculino' + ' peso: ' + pesoIdealHomem;
    }
    if(sexo !== 1 || sexo !== 2) {
        return 'Opção inválida';
    }
} 

/* Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
− Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
área
− Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
sua	área.	
− Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO. */ 



function triangulo (base,altura) { 
    
    let areaTriangulo = (base * altura) / 2 ;

    return areaTriangulo;

} 

function quadrado (lados) {

    let areaQuadrado = lados * 4; 

    return areaQuadrado;
    
}

function pentagono (base1,altura1) {

    let areaPentagono = (0.5 * base1 * altura1) * 5;

    return areaPentagono;
} 

function poligonos (lados) {

    if (lados === 3) {
        return triangulo(10,10);
    } 
    if(lados === 4) {
        return quadrado(10);
    } 
    if(lados === 5) {
        return pentagono(10,10)
    }

} 

console.log(poligonos(5));
    
