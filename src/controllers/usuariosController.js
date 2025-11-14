/**
 * Projeto PI Senac 2025 - v1  "backend" 
 * Autor: [grupo 31]
 * Descrição: controle de usúario 
 * Data: [11-11-2025]
 */


const jwt = require('jsonwebtoken');
const pool = require('../config/db');
require('dotenv').config();

// Cadastrar novo usuário
exports.registrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await pool.query(
      'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)',
      [nome, email, senhaCriptografada]
    );

    res.status(201).json({ message: ' Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message });
  }
};

// Login
exports.loginUsuario = async (req, res) => {
  try {
  if (!req.body || !req.body.nome || !req.body.email || !req.body.senha) {
  return res.status(400).json({ message: 'Campos obrigatórios.' });
}

const { nome, email, senha } = req.body;

    const resultado = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const usuario = resultado.rows[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: '✅ Login realizado com sucesso!',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
};
