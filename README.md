# Mundo Disney — Integração com API

## Autor

* **Nome:** Ana kesia de oliveira da costa
* **Ano:** 2026

## 1. Identificação do projeto

* **Nome do projeto:**Missao117-Meu Disney.
* **Instituição de ensino:** Senac Es.
* **Unidade curricular:** UC8 - Desenvolver Aplicações Mobile.
* **Professor(a):** Rafaela Pessin.

---

## 2. Sobre o projeto

> O Meu Disney é um site interativo que apresenta personagens da Disney de forma organizada. O usuário pode visualizar os personagens e carregar mais 50 personagens através de um botão. O site possui um visual inspirado na Disney, com imagens, cores e a fonte Waltograph.

## 3. Estrutura do projeto

Apresente a organização dos arquivos e pastas do seu projeto.

**Exemplo:**

```text
mundo-disney/
│
├── index.html
├── style.css
├── script.js
└── README.md
|__ fonts.waltograph42.otf
|__ img.disney.simbolo.png
|__ manifest.json
```

### Descrição dos arquivos

| Arquivo      | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| `index.html` |  Estrutura do site.                                              |
| `style.css`  |  Estilo e aparência do site.                                     |
| `script.js`  |  Funcionalidades e carregamento dos personagens                  |
| `README.md`  |  descricão do meu site                                           |
| `fonts/`     |  fonte para o site da disney                                     |
| `img`        |  imagem da logo da disney                                        | 
| `manifest.json` | é um arquivo que configura e identifica um aplicativo ou site, contendo informações como nome, ícone e versão. |
> **Caso seu projeto possua outras pastas ou arquivos, apresente-os também na estrutura acima.**

---

## 💻 4. Tecnologias utilizadas

Liste as tecnologias utilizadas no desenvolvimento do projeto.

* Item 1- HTML
* Item 2- CSS
* Item 3- JavaScript
* Item 4- JSON


---

## 5. API utilizada

### Nome da API

**Disney API**

### Endpoint utilizado

```text
https://api.disneyapi.dev/character
```

### Para que a API foi utilizada?

> A API foi utilizada para buscar personagens da Disney,e inserir automaticamente no site.

### Quais informações foram consumidas?

>As imagens e os nomes dos personagens.

---

##  6. Como executar o projeto

### Pré-requisitos

e necessario ter o google,chorme ou safari(OIS) isntalador no celular ou computador, desse modo entrar no link do site e desfrutar do site e dos personagens.

### Passo a passo

* Passo 1: abaixar no aparelho celular ou cumputador os navegadores.
* Passo 2: entrar no link do site.
* Passo 3: desfrutar do site e dos personagens.

---

## 7. Como funciona a integração

Explique de forma objetiva e em até 10 passos como sua aplicação se comunica com a API.

1. O usuário acessa o site Meu Disney.
2. O script.js inicia a aplicação.
3. O JavaScript faz uma requisição para a API.
4. A API recebe a solicitação.
5. A API busca os dados dos personagens.
6. Os dados são enviados de volta para o site.
7. O JavaScript recebe os dados em formato JSON
8. Os personagens são exibidos em cards na página.
9. Ao clicar em “Carregar mais 50”, uma nova requisição é realizada.
10. Os novos personagens são adicionados à página sem precisar recarregá-la.

## 8. Desafios encontrados

Registre pelo menos um problema ou dificuldade que você encontrou durante o desenvolvimento e como resolveu

### Desafios encontrados

**Problema:**

> 1.Entender como fazer a conexão com a API.
> 2.Fazer o botão “Carregar mais 50” funcionar corretamente.

**Como identifiquei o problema:**

> 1.Pesquisei e estudei como funciona uma API.
> 2.Pesquisei como fazer novas requisições à API e consegui configurar o botão para carregar mais 50 personagens na página.

**Como resolvi:**

> 1.Configurei o JavaScript para fazer novas requisições à API e adicionar mais 50 personagens à página ao clicar no botão.
> 2.estudei sobre e API e fiz a requisição para a API.

---

## 9. Aprendizados

>Aprendi a fazer uma conexão com uma API para buscar informações dos personagens.

---