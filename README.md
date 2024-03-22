# Desafio Teia - Desenvolvedor FrontEnd 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE) 

# Sobre o projeto

[https://wmazoni-sds1.netlify.app](http://desafio-teia-frontend.s3-website-sa-east-1.amazonaws.com/)

Desafio Teia - Desenvolvedor FrontEnd é uma aplicação frontend construída em resposta à fase de desafio do projeto TEIA.

A aplicação consiste em consumir uma api (https://jsonplaceholder.typicode.com/photos/) disponibilizada para o desafio, e a partir dela disponibilizar os dados de forma dinâmica na interface do usuário.

A partir dessa interface, o usuário poderá realizar as seguintes ações:
- Navegação via paginação dos dados
- Possibilidade de alteração da quantidade de registros visíveis
- Ordenamento dos dados através de todos os campos disponibilizados
- Pesquisa livre de texto em todos os campos disponibilizados
- Possibilidade de testar a exclusão de todos os dados, assim como carregar novamente os dados
- Possibilidade de exportação dos dados nos formatos excel, csv, json e txt

## Layout mobile
![Mobile 1](https://github.com/acenelio/assets/raw/main/sds1/mobile1.png) ![Mobile 2](https://github.com/acenelio/assets/raw/main/sds1/mobile2.png)

## Layout web
![Web 1](https://github.com/acenelio/assets/raw/main/sds1/web1.png)

![Web 2](https://github.com/acenelio/assets/raw/main/sds1/web2.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/acenelio/assets/raw/main/sds1/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Wellington Mazoni de Andrade

https://www.linkedin.com/in/wmazoni

