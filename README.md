<h1 align="center">
    <img alt="NLW4" title="" src="./logo.png" width="250px" />
</h1>

<h4 align="center">
    :computer: Teste prático de programação
</h4>

<p align="center">
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#user-content-clipboard-instruções">Instruções</a></p>

<img alt="Interface" src="https://github.com/jeanoliveira92/smarkio-teste-pratico-de-programacao/blob/main/screenshot.png?raw=true" width="100%" align="center">
<br/>

## 💻 Projeto

Desenvolver uma aplicação web em Node.js com banco de dados MySQL. A aplicação consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executará um áudio de leitura do comentário

<br>

## :rocket: Tecnologias

- [Node.js](https://nodejs.org/) 
- [Expressjs](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [Mysql](https://www.mysql.com/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [SCSS/SASS](https://sass-lang.com/)
- [NextJS](https://nextjs.org/)


## :clipboard: Instruções

### API - BACKEND

- Abra o terminal e navegue até o diretorio "backend". Execute `$ npm install` para instalar todas as dependencias.
- Após todas as dependencias serem instaladas, abra o arquivo `.env` e preencha com as respectivas informações.
```
## PORTA DA API
API_PORT = 4000

## BANCO DE DADOS
BDHOST = 
BDUSERNAME = 
BDPASS = 
BD = 

## IBM Text to Speech
apikey = 
serviceUrl = 
```

- Depois das informações preenchidas, volte para o terminal e rode o codigo abaixo para criar o banco de dados

 `yarn sequelize db:create`

- Em seguida, execute o codigo abaixo para a criação das tabelas

 `yarn sequelize db:migrate`

- Pronto! Todas as dependências foram instaladas. Basta executar  `yarn dev` para iniciar a API.

----
### INTERFACE - FRONTEND

- Abra o terminal e navegue até o diretorio "frontend". Execute `$ npm install` para instalar todas as dependencias.
- Caso tenha alterado o endereço da API backend, navegue até  `frontend\src\services` a abra o arquivo  `api.ts`. Em  `export const apiAddr = "http://localhost:4000";`, coloque o novo endereço. 
- Após todas as dependencias serem instaladas, Pronto! Basta executar  `yarn dev` para iniciar a interface frontend.
