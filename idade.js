document.querySelector('button').addEventListener('click', exibirconteudo);

function exibirconteudo(){
    let nome = document.getElementById('nome').value
    
    fetch('https://api.agify.io?name='+ nome).then(function(resultado){
        return resultado.json();
    }).then(function(conteudo){
        document.getElementById('exibirconteudo').innerText = conteudo['age']
    });
};