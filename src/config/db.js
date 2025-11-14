/**
 * Projeto PI Senac 2025 - v1   "backend"  
 * Autor: [grupo 31]
 * Descrição: controle de usúario 
 * Data: [11-11-2025]
 */

const { Pool } = require('pg');
require('dotenv').config();

// Configuração da conexão com PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false } // Render exige SSL com essa opção
    : false // Em ambiente local, SSL pode ser desativado
});

// Teste de conexão (opcional, mas útil para logs)
pool.connect()
  .then(() => console.log(' Conectado ao PostgreSQL com sucesso!'))
  .catch(err => console.error(' Erro ao conectar ao banco:', err));

module.exports = pool;