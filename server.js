const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('/artigos', (req, res) => {
// res.sendFile(path.join(__dirname, 'public', 'artigos.html'));
// });

app.get('/guias', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guias.html'));
});

app.get('/forum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'forum.html'));
});

app.get('/adocao', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'adocao.html'));
});

app.get('/doacoes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'doacoes.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado! Estamos investigando o problema.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Ambiente de execução: ${process.env.NODE_ENV || 'desenvolvimento'}`);
});
