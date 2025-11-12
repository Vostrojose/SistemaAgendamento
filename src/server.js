/**
 * Projeto PI Senac 2025 - v1 "backend" 
 * Autor: [grupo 31]
 * Descrição: Server simples usando Express.js
 * Data: [11-11-2025]
 */

require('dotenv').config();
const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarios'); // Importação de rotas de usuários

app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('ervidor de Agendamento Em operaçao !');
});

// Conectando as rotas de usuários
app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
