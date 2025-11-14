/**
 * Projeto PI Senac 2025 - v1   "backend" 
 * Autor: [Grupo 31]
 * Descrição: Cadastro e login simples usando Express.js
 * Data: [11-11-2025]
 */
/**
 * Rotas de usuários usando Express.js
 * Baseado no guia oficial: https://expressjs.com/pt-br/guide/routing.html
 */


const express = require('express');
const router = express.Router(); // Cria um roteador separado

// Rota GET listar usuários
router.get('/', (req, res) => {
  res.send('Lista de usuários');
});

// Rota POST registrar novo usuário
router.post('/registrar', (req, res) => {
  // Verifica se o corpo da requisição existe e contém os campos esperados
  if (!req.body || !req.body.nome || !req.body.email || !req.body.senha) {
    return res.status(400).json({ message: "Preencha todos os campos!" });
  }

  const { nome, email, senha } = req.body;

  // Simula cadastro
  res.json({
    message: "Usuário cadastrado!",
    usuario: { nome, email }
  });
});

// Rota POST para login
router.post('/login', (req, res) => {
  if (!req.body || !req.body.email || !req.body.senha) {
    return res.status(400).json({ message: "Campos obrigatórios não informados." });
  }

  const { email, senha } = req.body;

  // Usuário 1: Giovana (cliente)
  const usuarioGiovana = {
    email: "giovana.rodrigues@email.com",
    senha: "yoga123"
  };

  // Usuário 2: Daniela (profissional)
  const usuarioDaniela = {
    email: "daniela.souza@yogastudio.com",
    senha: "studio123"
  };

  // Verifica se os dados estão corretos
  if (
    (email === usuarioGiovana.email && senha === usuarioGiovana.senha) ||
    (email === usuarioDaniela.email && senha === usuarioDaniela.senha)
  ) {
    return res.json({ message: "Login realizado!" });
  }

  // Se os dados estiverem errados
  res.status(401).json({ message: "Dados incorretos." });
});

// Exporta todas as rotas para serem usadas no app principal
module.exports = router;