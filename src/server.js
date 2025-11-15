/**
 * Projeto PI Senac 2025 - v1 "backend" 
 * Autor: [grupo 31]
 * Descrição: Server simples usando Express.js
 * Data: [11-11-2025]
 */

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Middlewares para interpretar JSON e dados de formulários HTML
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// servir arquivos estáticos da pasta public (pasta está em ...\SistemaAgendamento\public)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Importação das rotas
const usuariosRoutes = require('./routes/usuarios');
const agendaRoutes = require('./routes/agenda');

// Rota raiz
app.get('/', (req, res) => {
  res.send('Servidor de Agendamento Em operação!');
});

// Rotas da aplicação
app.use('/usuarios', usuariosRoutes);
app.use('/agenda', agendaRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});