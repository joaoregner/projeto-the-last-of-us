const botoesCarrossel = document.querySelectorAll ('.botao')
const imagem = document.querySelectorAll ('.imagem')

botoesCarrossel.forEach((botao, indice)=> {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostarImagemDeFundo(indice);
    })
})


function mostarImagemDeFundo(indice) {
    imagem[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
