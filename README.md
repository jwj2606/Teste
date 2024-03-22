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

## Layout App]
<img src="https://github.com/jwj2606/desafioTeia_c086047/blob/main/src/imgApp.png" alt="Texto Alternativo">

## Modelo Arquitetura
[![](https://mermaid.ink/img/pako:eNqNkkFu2zAQRa8y4CoBLANtdl4UUCKntRPHAaRuKmUxFkcxAYqjUGSKQvJpusgBegRfLJQMt3WRAJU2xJv_h5_kdKJkSWImKs3fyy1aB1lSGAhfnMdNA9eWjZsb-QBR9Kn_AFFL9lntX7iHRSepxUpx5EjhdCyUNHXtbtR-hAgsPXlqXQ-XZ_H9ArL5Ij5_v3vJdcOGjKMelp1EyW3kcKNp-rsydH-_QdjKeuct9nDTGXzeoP0_9W1XMTs6qi9hEMDV2TJd30ESJ-v0_ID6i_FUbUjTDinhYLgai0ke642vYSEf_sbz_B9wnWfKaTphn_OvVp-QL3m29fXGoNLwp7Yco9f7X9Lr8AarcE0Ox0sKwVbosmGZBJKytyXt3nTddQ0-KoP7l_1PPvjuR-DYvu1Yd2wlnThSti6Ijz-AmIiabI1KhnnqBlIIt6WaCjELS0kVeu0KUZhdkKJ3nP4wpZiFV6CJ8E04CSUKHy3WYlahbgMlqUKm1WFGx1GdiAbNN-ajZvcKGJPrIw?type=png)](https://mermaid.live/edit#pako:eNqNkkFu2zAQRa8y4CoBLANtdl4UUCKntRPHAaRuKmUxFkcxAYqjUGSKQvJpusgBegRfLJQMt3WRAJU2xJv_h5_kdKJkSWImKs3fyy1aB1lSGAhfnMdNA9eWjZsb-QBR9Kn_AFFL9lntX7iHRSepxUpx5EjhdCyUNHXtbtR-hAgsPXlqXQ-XZ_H9ArL5Ij5_v3vJdcOGjKMelp1EyW3kcKNp-rsydH-_QdjKeuct9nDTGXzeoP0_9W1XMTs6qi9hEMDV2TJd30ESJ-v0_ID6i_FUbUjTDinhYLgai0ke642vYSEf_sbz_B9wnWfKaTphn_OvVp-QL3m29fXGoNLwp7Yco9f7X9Lr8AarcE0Ox0sKwVbosmGZBJKytyXt3nTddQ0-KoP7l_1PPvjuR-DYvu1Yd2wlnThSti6Ijz-AmIiabI1KhnnqBlIIt6WaCjELS0kVeu0KUZhdkKJ3nP4wpZiFV6CJ8E04CSUKHy3WYlahbgMlqUKm1WFGx1GdiAbNN-ajZvcKGJPrIw)

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

