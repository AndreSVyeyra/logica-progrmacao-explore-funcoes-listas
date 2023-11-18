
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// função chama as tag h1 e p e passa o valor para elas
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial(){

    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');

}

exibirMensagemInicial();





function verificarChute() {
    let chute = document.querySelector('input').value; // pega somente o valor digitado
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou! ');
        let palaTentativa = tentativas > 1 ? 'tentivas': 'tentativa';
        let mensagemTentativas = ` Você descobriu o número secreto com  ${tentativas} ${palaTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número é maior');
        }
        
        tentativas++;
        limparCampo(); 
    }
   
}



function gerarNumeroAleatorio() {
   return parseInt (Math.random() * 10 + 1);
}


function limparCampo(){
       chute = document.querySelector('input');
       chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}