/**
 * Projeto PI Senac 2025 - v1   "backend" 
 * Autor: [Grupo 31]
 * Descrição: Cadastro e login simples usando Express.js
 * Data: [11-11-2025]
 */

const express = require('express');
const router = express.Router();

// registrar usuário (Giovana ou Daniela)
router.post('/registrar', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: " Preencha todos os campos!" });
  }

  // cadastro 
  res.json({
    message: " Usuário cadastrado!",
    usuario: { nome, email }
  });
});

//  Rota de login
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: " Campos obrigatórios não informados." });
  }

  //  Usuário: Giovana (cliente)
  const usuarioGiovana = {
    email: "giovana.rodrigues@email.com",
    senha: "yoga123"
  };

  //  Usuário: Daniela (profissional)
  const usuarioDaniela = {
    email: "daniela.souza@yogastudio.com",
    senha: "studio123"
  };

  if (
    (email === usuarioGiovana.email && senha === usuarioGiovana.senha) ||
    (email === usuarioDaniela.email && senha === usuarioDaniela.senha)
  ) {
    return res.json({ message: " Login realizado !" });
  }

  res.status(401).json({ message: " dados incorretos." });
});

module.exports = router;
