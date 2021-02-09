  # curso-protractor-tat

  ![Lint and tests](https://github.com/anacosantos/test_architecture/workflows/Lint%20and%20tests/badge.svg)
  
  Projeto para o curso de Protractor da Escola TAT

  ## Pré-requisitos

  É necessário que os seguintes sistemas estejam instalados para execução dp projeto.

  - Node.js (`14.15.4`) e NPM (`6.14.10`)
  - Navegadores Google Chrome e Firefox (`88.0.4324.146`) e Mozila Firefox (`85.0`)
  
  ## Instalação

  Após clonar o projeto, acesse o diretório do mesmo e execute o `npm install` para instalar as dependências de desenvolvimento.

  ## Executando os testes

  Execute `npm run pretest:local && npm test` para executar os testes me modulo _headless_ em ambos os navegadores Chrome e Firefox

  ### Executando os testes `npm run pretest:local && npm test` em um navegador específico

  #### Chrome

  Execute `npm run pretest:local && npm run test:chrome` para executar os testes em modo _headless_ somente no navegador Chrome.

  #### Firefox

  Execute `npm run pretest:local && npm run test:firefox` para executar os testes em modo _headless_ somente no navegador Firefox.

