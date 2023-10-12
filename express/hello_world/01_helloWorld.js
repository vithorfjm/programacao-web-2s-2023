const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('<h1>APP WEB Revisão</h1>');
});

app.get('/hello/:n', (req, res) => {
    res.send(`<h1>Olá, mundo! Saudações do(a) ${req.params.n}</h1>`);
});

app.listen(port, () => {
    console.log(`App rodando em htttp://localhost:${port}`);
});
