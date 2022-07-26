function idade(ano) {
    if(2022 - ano < 18) {
        console.log((2022-ano),"anos:",'Menor de idade');
    } else {
        console.log((2022-ano),"anos:",'Maior de idade');
    }
} 

console.log(idade(2005));