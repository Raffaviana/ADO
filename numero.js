document.querySelector('button').addEventListener('click', exibirconteudo);

function exibirconteudo(){
    let numero = document.getElementById('numero')
    
    fetch('http://numbersapi.com/random/math').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
        
        numero.textContent= conteudo
        console.log(curiosidade)
    });
};