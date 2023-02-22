# Fullstack App

# Índice

- [Início] (#título)
- [Descrição do projeto] (#descrição-do-projeto)
- [Status do projeto] (#status-do-projeto)
- [Tecnologias] (#tecnologias)
- [Funcionalidades] (#funcionalidades)
- [Como rodar] (#como-rodar)
- [Conclusão] (#conclusão)

# Descrição do projeto

O projeto se baseia em chamadas em API's, tanto externas quanto internas, para consumo dos dados retornados e renderização em tela. O projeto era processo seletivo no qual não tive tempo de finalizar por estar viajando, então resolvi finalizar o projeto e disponibilizar aqui no github como portfólio.

# Status do projeto

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

Quase finalizado, faltando somente a parte visual do CRUD de clientes realizado pelo back-end desenvolvido por mim e integrar o sistema de login com o sistema.

# Tecnologias

![Typescript](https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript)&nbsp;
![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)&nbsp;
![React.js](https://img.shields.io/badge/-React.js-05122A?style=flat&logo=react)&nbsp;
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)&nbsp;
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;

# :hammer:  Funcionalidades

- `1`: Página inicial com consumo de API com usuários aleatórios (randomuser.me)
- `2`: CRUD de clientes com listagem de clientes
- `3`: Consumo da API HTTPCats, no qual consiste em uma busca do código HTTP e caso o código não exista, a imagem da Gargantua irá aparecer
- `4`: Consumo da API Random Dogs, um botão que retorna a imagem de um cachorro



# Como Rodar
- 1 Com o projeto em mãos, rodar as instâncias do back-end:
```
docker-compose up
```
```
yarn-dev
```
- 2 Após a conexão com o banco de dados, iniciar o front-end:
```
yarn dev
```

# Problemas

O maior problema encontrado foi no consumo da API do random dogs, pois algumas responses vem com um vídeo em mp4, no qual altera a tag HTML existente no projeto, o que me trouxe dificuldades de identificar a tag de vídeo e renderizá-la em meu site.

# Conclusão

Por ser o meu primeiro contato com React, consegui enxergar como essa ferramenta é incível e traz muito valor para os projetos pelo fato de ser uma tecnologia de fácil aprendizagem e trazer rapidez em quesitos de entregas, visando que estamos em um período em que as entregas precisam ser ágeis e entregar valor para o cliente. Tenho muito a caminhar ainda, entender patterns e bons usos da linguagem para manter seu ciclo de vida e integridade em um projeto com essa ferramenta.