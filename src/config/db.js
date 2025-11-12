/**
 * Projeto PI Senac 2025 - v1   "backend"  
 * Autor: [grupo 31]
 * Descrição: controle de usúario 
 * Data: [11-11-2025]
 */

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE, // conexão projeto_pi_senac_2025_v1
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

pool.connect()
  .then(() => console.log('Conectado ao PostgreSQL com sucesso!'))
  .catch(err => console.error(' Erro ao conectar ao banco:', err));

module.exports = pool;
