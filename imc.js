const SUBMIT = document.getElementById('calcula');

SUBMIT.addEventListener('click', function(){
    let peso = document.getElementById('kilos');
    let altura = document.getElementById('metros');

    const SUB = (peso.value / (altura.value**2)) * 10000

    let resultado = document.getElementById('resultado');

    
    resultado.textContent = SUB.toFixed(1)

    peso.value ='';
    altura.value = '';
})