/**
 * Projeto PI Senac 2025 - v1 "backend" 
 * Autor: [grupo 31]
 * Descrição: Server simples usando Express.js
 * Data: [11-11-2025]
 */

require('dotenv').config();
const express = require('express');
const app = express();

// Caminhos ajustados para refletir a estrutura dentro de src/
const usuariosRoutes = require('./routes/usuarios');
const agendaRoutes = require('./routes/agenda');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor em Operação');
});

app.use('/usuarios', usuariosRoutes);
app.use('/agenda', agendaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));