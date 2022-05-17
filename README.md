# KPIs Challenge - Research Feature

- Projeto para o case de seleção da KPIs. Na plataforma, você consegue responder perguntas de clima e visualizar o compilado geral das respostas. Todas as respostas são vinculadas a um email específico. Identidade visual baseada na companhia Natura &co, atual cliente da KPIs.
- O backend foi criado usando Node.js, Typescript e PostgreSQL, com o apoio das tecnologias Express.js, Docker e Sequelize. O deploy do backend, tanto o banco de dados como a API, foi feito no Heroku e está rodando como esperado.
- O frontend foi criado usando React.js, com apoio das bibliotecas MUI e Styled Components para estilização, e Nivo.Rocks para visualização de dados em charts. O deploy do frontend foi feito usando o Surge.
- Foi um desafio muito enriquecedor: pude desenvolver conhecimentos em PostgreSQL, que ainda não tinha tido contato, e aprofundar meus conhecimentos nas bibliotecas sugeridas.
- Por conta do deadline, alguns recursos extras ficaram faltando: um chart que une as duas informações da pesquisa e traz uma análise relacional; uma funcionalidade para enviar os resultados como PDF no email do respondente (essa feature já está em andamento)


# 🧑🏼‍💻 Deploy

http://kpis-challenge.surge.sh/


## 📓 Planejamento

https://leorigotto.notion.site/KPIs-Challenge-2dff024a743148248363ac697eb5b44c



## 🚀 Começando

### 📋 Pré-requisitos

Para instalar a aplicação é necessário ter instalado na sua máquina

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/en/)

### 🔧 Instalação

Para rodar o projeto execute os comandos abaixo no seu terminal:

Para clonar o projeto 
`git clone https://github.com/larrygotto/kpis-challenge.git`

Para rodar o back-end entre na pasta do projeto e execute:

* `cd server`
* `npm install`
* `npm build`
* `npm start`

Para rodar o front-end abra outra janela de terminal no diretório raiz do projeto e execute:

* `cd research-feature`
* `npm install`
* `npm start` 

## 🛠️ Construído com

O projeto foi criado com as seguintes tecnologias

* [NodeJs](https://nodejs.org/en/) - Usado para o back-end da aplicação;
* [Express](https://expressjs.com/) - Usado para construir a API da aplicação;
* [ReactJs](https://pt-br.reactjs.org) - Framework usado para o front-end da aplicação;
* [Styled components](https://styled-components.com/) - Ferramenta de componentização de estilos;
* [React router DOM](https://www.npmjs.com/package/react-router-dom) - Ferramenta que possui atalhos para utilizar React Router em aplicações web;
* [PostgreSQL](https://www.postgresql.org) - Banco de dados usado para aplicação;
* [Sequelize](https://sequelize.org) - Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. 
* [Heroku](https://www.heroku.com) - Usado para hospedagem do back-end do projeto
* [Material UI](https://mui.com) - Design system usado para alguns componentes interativos
* [Nivo.Rocks](https://www.nivo.rocks) - Ferramenta para criação de charts responsivos em React

## 🛠️ Próximas Features

* Enviar restultados parciais como PDF para email
* Chart relacional das duas perguntas
* Melhorias de estilo

## ✒️ Autor

* **Leo Rigotto** - ([Github](www.github.com/larrygotto), [Linkedin](https://www.linkedin.com/in/leorigotto/))

