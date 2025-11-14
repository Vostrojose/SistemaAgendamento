/**
 *  * Projeto PI Senac 2025 - v1 "backend" 
 * Autor: [grupo 31]
 * Descrição: Server simples usando Express.js
 * Data: [11-11-2025]
 * Guia oficial.
 * Documentação: https://expressjs.com/pt-br/guide/routing.html
 * 
 * Definição de rotas 
 */

const express = require('express');
const app = express();

// Corrigido: caminho relativo para a pasta src/routes
const agendaRoutes = require('../src/routes/agenda');

app.use(express.json()); // Recebe JSON
app.use('/agenda', agendaRoutes); // Conecta as rotas

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});