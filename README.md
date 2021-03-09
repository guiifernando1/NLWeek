# NLWeek
<h3 align="center">
    <img width="300px" src="https://i.imgur.com/JkVMEgs.png">
    <br><br>
    <p align="center">
      <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-comandos">Comandos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  </p>
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://i.imgur.com/1o7urkT.png">
  </a>
</p>

## ⤵ Tecnologias

- [Node.js](https://nodejs.org/en/)
- [YARN](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/)
- [Jest](https://jestjs.io/)
- [NodeMailer](https://nodemailer.com/about/)

## ⤵ Comandos 

```bash
- git clone https://github.com/guiifernando1/NLWeek.git
- cd nps-api
```

Dependências

```bash
- npm install
```

ou

```bash
- yarn install
```

Gerar o arquivo de database.sqlite do Sqlite3, onde ficaram armazenados as tabelas da API

```bash
- yarn startTestDB
```

Criando tabela das migrations do Sqlite3 por meio do cli do TypeOrm

```bash
- yarn typeorm migration:run
```

Inicializando uma instância local (Script já no package.json)

```bash
- yarn dev
```

## ⤵ Testes

Para testar se instalou a aplicação corretamente e se passa em todos os testes de integração, utilize o comando:

```bash
- yarn test
```

<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/guilhermefernandodasilva/" target="_blank">Guilherme Fernando</a>
</h4>
