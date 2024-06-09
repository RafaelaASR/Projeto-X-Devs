//passo 1 -dar um jeito de pegar o elemento HTML da seta avançar 
const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
//passo 1 -dar um jeito de pegar o elemento HTML da seta voltar 
const btnVoltar = document.getElementById("btn-voltar");

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    console.log("cliquei");
}


function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

//passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === cartoes.length - 1;
    if(ehPrimeiroCartao){
        return;
    }
    console.log(cartoes.length);
    //passo 4 - buscar o cartao que esteja selecionado e esconder
    esconderCartaoSelecionado();

    //passo 3 - fazer aparecer o próximo cartão da lista
  
    cartaoAtual++;
    mostrarCartao();
});

//passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0){
        return 0;
    }
     //passo 4 - buscar o cartao que esteja selecionado e esconder
    esconderCartaoSelecionado();

    //passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    mostrarCartao();
}
);


