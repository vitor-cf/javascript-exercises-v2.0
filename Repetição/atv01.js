// Faça um programa que peça uma nota, entre zero e dez. 
// Mostre uma mensagem caso o valor seja inválido e continue 
// pedindo até que o usuário informe um valor válido.  

 function advinhaNumero () {

 let numero = parseInt(document.getElementById('numero').value);

 if (numero == 8) {
    alert('Você acertou!!')
 } 
 while (numero != 8) {
    alert('Número errado, tente novamente') ;
    break;
 }

 } 


//  let botao = document.getElementById('btn');
//  botao.addEventListener('click', advinhaNumero);  

//  Faça um programa que leia um nome de usuário e a sua senha e 
//  não aceite a senha igual ao nome do usuário, 
//  mostrando uma mensagem de erro e voltando 
//  a pedir as informações.  


function lerUsuario () {
    
     var user = document.getElementById('user').value;
     var password = parseInt(document.getElementById('senha').value);

    if ( user == 'king' && password == 1234) {
         alert('Login efetuado');
     } 
    
      // Usando FOR  

    for (user, password; user != 'king' || password != 1234; password++) {
        alert('Tente novamente');
        break
    }
    
      // Usando WHILE

        // while (user != 'king' || password != 1234) {
        //     alert('Usuário ou senha incorreta.')
        //     break;
        // } 
    } 
  
    // let botao = document.getElementById('btn');
    // botao.addEventListener('click', lerUsuario); 


    
    


    
    
    
    
   
