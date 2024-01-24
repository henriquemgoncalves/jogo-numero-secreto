let listaDeNumeroSorteado = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Número Secreto (Jogo)';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemIniciar();

function exibirMensagemIniciar() {
    exibirTextoNaTela('h1', 'Número Secreto (Jogo);');
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
}


function verificarChute(){
    chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Descobriu o Número Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é Menor.');
        } else {
            exibirTextoNaTela('p', 'O número é Maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumeroSorteado = [];
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIniciar();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}