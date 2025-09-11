// Gerar um número aleatório de 1 a 100
const numeroRandom = Math.floor(Math.random() * 100 + 1);
let tentativasRestantes = 10;

// Selecionar os elementos do HTML
const inputElement = document.getElementById('tentativa');
const buttonElement = document.getElementById('verificar');
const resultadoDiv = document.getElementById('resultado');
const resetarDiv = document.getElementById('resetar');

// Adicionar um "ouvinte de evento" ao botão
buttonElement.addEventListener('click', verificarChute);

// Verificar se a entrada é um número válido

function verificarChute(){
        const textoDigitado = parseInt(inputElement.value);

if (isNaN(textoDigitado) || textoDigitado < 1 || textoDigitado > 100 ){
        resultadoDiv.textContent = 'Por favor, digite um número entre 1 e 100';
        return
    }
//Diminuir tentativa
tentativasRestantes--;

 // Lógica para verificar o chute

    if (textoDigitado === numeroRandom) {
        resultadoDiv.textContent = `Parabéns! Você acertou! O número era ${numeroRandom}.`;
        // Desabilita o botão para o jogo não continuar
        buttonElement.disabled = true;
    } else {
        if (tentativasRestantes > 0) {
            if (textoDigitado > numeroRandom) {
                resultadoDiv.textContent = `Você errou! O número é menor que ${textoDigitado}. Você tem ${tentativasRestantes} tentativas restantes.`;
            } else {
                resultadoDiv.textContent = `Você errou! O número é maior que ${textoDigitado}. Você tem ${tentativasRestantes} tentativas restantes.`;
            }
        } else {
            resultadoDiv.textContent = `Suas tentativas acabaram! O número era ${numeroRandom}.`;
            // Desabilita o botão para o jogo não continuar
            buttonElement.disabled = true;
        }
    }

}

resetarDiv.addEventListener('click',function(){
    window.location.reload()
})
