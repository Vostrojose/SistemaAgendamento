/**
 * Projeto PI Senac 2025 - v1 "backend"
 * Autor: [grupo 31]
 * Descrição: Rotas de usuário (login/registro)
 * Data: [17-11-2025]
 */
/**
 * Rotas de usuários usando Express.js
 * Baseado no guia oficial: https://expressjs.com/pt-br/guide/routing.html
 */


const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/registrar', usuariosController.registrarUsuario);

router.post('/login', usuariosController.loginUsuario);

router.get('/perfil', usuariosController.obterPerfilUsuario);

router.get('/retornaUsuarios', usuariosController.retornaUsuarios);

router.put('/editar', usuariosController.editarUsuario);

// Array em memória para simular banco de dados
// let usuarios = [
//   { id: 1, nome: "José", email: "teste@email.com", senha: "123" }
// ];

// Rota POST para login
// router.post('/login', (req, res) => {
//   if (!req.body || !req.body.email || !req.body.senha) {
//     return res.status(400).json({ message: "Campos obrigatórios não informados." });
//   }

//   const { email, senha } = req.body;

//   const usuarioEncontrado = usuarios.find(
//     (u) => u.email === email && u.senha === senha
//   );

//   if (usuarioEncontrado) {
//     return res.json({
//       message: "Login realizado!",
//       token: "abc123", // token de exemplo
//       usuario: { id: usuarioEncontrado.id, nome: usuarioEncontrado.nome, email: usuarioEncontrado.email }
//     });
//   }

//   res.status(401).json({ message: "Dados incorretos." });
// });

module.exports = router;
