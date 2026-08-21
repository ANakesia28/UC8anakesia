// URL da API que fornece os personagens da Disney
const apiUrl = 'https://api.disneyapi.dev/character';

// Guarda o número da página atual
let paginaAtual = 1;

// Define que serão carregados 50 personagens por página
const limitePorPagina = 50;

// Guarda o total de personagens carregados
let totalPersonagens = 0;

// Seleciona o botão "Carregar mais 50" pelo ID
const botaoCarregar = document.getElementById('botaoCarregar');

// Seleciona o elemento que mostra a mensagem
const mensagem = document.getElementById('mensagem');

// Seleciona o local onde os cards dos personagens serão exibidos
const resultado = document.getElementById('resultado');

// Seleciona o elemento que mostra o número da página
const pagina = document.getElementById('pagina');


// FUNÇÃO PARA CARREGAR OS PERSONAGENS
function carregarPersonagens() {

    // Desativa o botão enquanto os personagens estão sendo carregados
    botaoCarregar.disabled = true;

    // Mostra uma mensagem informando que os personagens estão carregando
    mensagem.textContent = 'Carregando personagens...';

    // Monta a URL da API usando a página atual e o limite de 50 personagens
    let url = `${apiUrl}?page=${paginaAtual}&pageSize=${limitePorPagina}`;

    // Faz uma requisição para a API
    fetch(url)

        // Converte a resposta da API para JSON
        .then(function (resposta) {
            return resposta.json();
        })

        // Recebe os dados enviados pela API
        .then(function (dados) {

            // Mostra os dados recebidos no console do navegador
            console.log(dados);

            // Percorre cada personagem recebido pela API
            dados.data.forEach(function (personagem) {

                // Cria o card do personagem e adiciona na página
                resultado.innerHTML += criarCard(personagem);
            });

            // Atualiza a quantidade total de personagens carregados
            totalPersonagens += dados.data.length;

            // Mostra na tela a quantidade de personagens carregados
            mensagem.textContent =
                `${totalPersonagens} personagens carregados`;

            // Mostra o número da página atual
            pagina.textContent =
                `Página ${paginaAtual}`;

            // Aumenta o número da página para a próxima busca
            paginaAtual++;

            // Ativa novamente o botão
            botaoCarregar.disabled = false;
        })

        // Executa caso aconteça algum erro na requisição
        .catch(function (erro) {

            // Mostra o erro no console
            console.log('Erro:', erro);

            // Mostra uma mensagem de erro para o usuário
            mensagem.textContent =
                'Erro ao carregar os personagens.';

            // Ativa novamente o botão
            botaoCarregar.disabled = false;
        });
}


// FUNÇÃO PARA CRIAR O CARD
function criarCard(personagem) {

    // Retorna o HTML do card de cada personagem
    return `
        <div class="card">

            <!-- Imagem do personagem -->
            <img
                src="${personagem.imageUrl}"
                alt="${personagem.name}"
            >

            <!-- Nome do personagem -->
            <h2>${personagem.name}</h2>

        </div>
    `;
}


// BOTÃO PARA CARREGAR MAIS 50

// Quando o botão for clicado, chama a função carregarPersonagens
botaoCarregar.addEventListener('click', function () {
    carregarPersonagens();
});


// CARREGA OS PRIMEIROS 50 AUTOMATICAMENTE

// Chama a função assim que o site é aberto
carregarPersonagens();