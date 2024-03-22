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

## Layout App
<img src="https://github.com/jwj2606/desafioTeia_c086047/blob/main/src/imgApp.png" alt="Texto Alternativo">

## Modelo Arquitetura
[![](https://mermaid.ink/img/pako:eNqNkkFu2zAQRa8y4CoBLAPJ0osCSuQ0dus4gNRNpSzG4igmQHFUikxRSD5NFzlAj-CLlZLhJg4SoNKGePP_8JOcTpQsScxEpflnuUXrIEsKA-GL87hp4MaycXMjHyCKPvUt2Se1f-YeFp2kFivFkSOF07FQ0tS1u1F4ARFY-uGpdT1cncX3C8jmi_j849Yl1w0bMo56WHYSJbeRw42m6b_K0P3jBmEr65232MOXzuDTBu3_qb92FbOjo_oKBgFcny3T9R0kcbJOzw-ovxxP1YY07ZASDobrsZjksd74Ghby4TWe52_ATZ4pp-mEfc6_WX1CbvNs6-uNQaXhpbYco9f7P9Lr8AarcE0Ox0sKwVbosmGZBJKytyXt3nXddQ0-KoP75_1vPvjuR-DYvu9Yd2wlnThSti6Ijz-AmIiabI1KhmHqBlIIt6WaCjELS0kVeu0KUZhdkKJ3nP4ypZiFV6CJ8E04CSUKHy3WYlahbgMlqUKm1WFAxzmdiAbNd-ajZvcXourqow?type=png)](https://mermaid.live/edit#pako:eNqNkkFu2zAQRa8y4CoBLAPJ0osCSuQ0dus4gNRNpSzG4igmQHFUikxRSD5NFzlAj-CLlZLhJg4SoNKGePP_8JOcTpQsScxEpflnuUXrIEsKA-GL87hp4MaycXMjHyCKPvUt2Se1f-YeFp2kFivFkSOF07FQ0tS1u1F4ARFY-uGpdT1cncX3C8jmi_j849Yl1w0bMo56WHYSJbeRw42m6b_K0P3jBmEr65232MOXzuDTBu3_qb92FbOjo_oKBgFcny3T9R0kcbJOzw-ovxxP1YY07ZASDobrsZjksd74Ghby4TWe52_ATZ4pp-mEfc6_WX1CbvNs6-uNQaXhpbYco9f7P9Lr8AarcE0Ox0sKwVbosmGZBJKytyXt3nXddQ0-KoP75_1vPvjuR-DYvu9Yd2wlnThSti6Ijz-AmIiabI1KhmHqBlIIt6WaCjELS0kVeu0KUZhdkKJ3nP4ypZiFV6CJ8E04CSUKHy3WYlahbgMlqUKm1WFAxzmdiAbNd-ajZvcXourqow)

# Tecnologias utilizadas
## Front end
- HTML / CSS / JS / TypeScript
- Angular CLI
- NodeJs 12.18.1
- Git versão 2.16
- Visual Studio Code 1.76.1

## Implantação em produção
- Front end web: AWS S3

# Como executar o projeto

## Front end web
Pré-requisitos: npm, git

# inicialização git
Na pasta desejada, executar o comando git init, antes de clonar o repositorio

# clonar repositório
git clone https://github.com/jwj2606/desafioTeia_c086047.git

# entrar na pasta do projeto 
cd desafioTeia_c086047

# instalar dependências
npm install

# instalar atualizações
npm update

# executar o projeto
npm start

# Como fazer a build do projeto
Execute ng build (ou em caso de falha npm run-script build) para construir o projeto. 
Os artefatos de construção serão armazenados no diretório dist/. Use o sinalizador --prod para uma compilação de produção.

# Como executar testes unitários
Execute ng test para executar os testes unitários via Karma.

# Como executar testes ponta a ponta
Execute ng e2e para executar os testes ponta a ponta via Protactor.


```




# Autor
Jonathan Barroso Félix


