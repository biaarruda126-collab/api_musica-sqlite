// app.js
const express = require('express');
const app = express();
const port = 3000;
// Middleware para analisar o corpo das requisições em JSON
app.use(express.json());
// Importando as rotas da musica
const musicaRoutes = require('./routes/musicaRoutes');
// Usando as rotas da música com o prefixo '/musica'
app.use('/musica', musicaRoutes);
// Iniciando o servidor na porta especificada
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});