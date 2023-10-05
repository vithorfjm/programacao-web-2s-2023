const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/dados', (req, res) => {
    const {nome, endereco, telefone, dataAgendamento} = req.body;
    res.render('dados.html', {nome, endereco, telefone, dataAgendamento});
});

app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
});