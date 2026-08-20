const apiUrl = 'https://api.disneyapi.dev/character';

let paginaAtual = 1;
const limitePorPagina = 50;
let totalPersonagens = 0;

const botaoCarregar = document.getElementById('botaoCarregar');
const mensagem = document.getElementById('mensagem');
const resultado = document.getElementById('resultado');
const pagina = document.getElementById('pagina');


// FUNÇÃO PARA CARREGAR OS PERSONAGENS

function carregarPersonagens() {

    botaoCarregar.disabled = true;

    mensagem.textContent = 'Carregando personagens...';

    let url = `${apiUrl}?page=${paginaAtual}&pageSize=${limitePorPagina}`;

    fetch(url)

        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (dados) {

            // Mostra os dados recebidos no console
            console.log(dados);

            // Cria os cards
            dados.data.forEach(function (personagem) {

                resultado.innerHTML += criarCard(personagem);

            });

            // Atualiza a quantidade
            totalPersonagens += dados.data.length;

            mensagem.textContent =
                `${totalPersonagens} personagens carregados`;

            // Mostra a página
            pagina.textContent =
                `Página ${paginaAtual}`;

            // Próxima página
            paginaAtual++;

            botaoCarregar.disabled = false;

        })

        .catch(function (erro) {

            console.log('Erro:', erro);

            mensagem.textContent =
                'Erro ao carregar os personagens.';

            botaoCarregar.disabled = false;

        });
}


// FUNÇÃO PARA CRIAR O CARD

function criarCard(personagem) {

    return `
        <div class="card">

            <img
                src="${personagem.imageUrl}"
                alt="${personagem.name}"
            >

            <h2>${personagem.name}</h2>

        </div>
    `;
}


// BOTÃO PARA CARREGAR MAIS 50

botaoCarregar.addEventListener('click', function () {

    carregarPersonagens();

});


// CARREGA OS PRIMEIROS 50 AUTOMATICAMENTE
carregarPersonagens();