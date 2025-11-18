/**
 * Projeto PI Senac 2025 - v1 "backend"
 * Autor: [grupo 31]
 * Descrição: Rotas da agenda
 * Data: [17-11-2025]
 */
/**
 * Baseado no guia oficial: https://expressjs.com/pt-br/guide/routing.html
 */

const express = require('express');
const router = express.Router(); // Cria um rote
const pool = require('../config/db');

//Rota GET para lista de agendamentos do usuário
router.get('/meus', function (req, res) {
  // TODO: Implementar autenticação e buscar agendamentos do usuário no banco
  const agendamentos = [
    {
      id: 1,
      data: '2025-11-20',
      hora: '10:30',
      descricao: 'Consulta médica'
    }
  ];
  res.json(agendamentos);
});

//Rota GET para lista de todos os agendamentos
router.get('/', function (req, res) {
  res.json({ message: 'Lista de agendamentos!' });
});

// Rota POST novo agendamento
router.post('/', async function (req, res) {
  const novoAgendamento = req.body;
  const datAtual = new Date().toISOString();

  // Validação básica
  if (!novoAgendamento.titulo || !novoAgendamento.data_horario) {
    return res.status(400).json({
      message: 'Campos obrigatórios: titulo, data_horario',
      error: 'Dados incompletos'
    });
  }

  try { 
    const token = req.headers.authorization?.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const resultado = await pool.query(
      'SELECT id, nome, email FROM usuarios WHERE id = $1',
      [decoded.id]
    );

    const result = await pool.query(
      'INSERT INTO agenda (titulo, descricao, data_horario, cliente_id, criado_em) VALUES ("Agendador", $1, $2, $3, $4)',
      [novoAgendamento.descricao, novoAgendamento.data_horario, resultado, datAtual]
    );

    // Retorna o agendamento criado com o ID
    res.status(201).json({
      message: 'Agendamento criado com sucesso!',
      id: result.rows[0].id,
      dados: novoAgendamento
    });
  } catch (error) {
    console.error('Erro ao registrar agendamento:', error);
    const resposta = {
      message: 'Erro ao registrar agendamento',
      error: error.message
    };
    return res.status(404, 505).json({ message: token });
  }
});

// Rota PUT para atualizar agendamento 
router.put('/:id', function (req, res) {
  const id = req.params.id;

  // Simula 
  res.json({ message: `Agendamento ${id} atualizado!` });
});

//  Rota DELETE
router.delete('/:id', function (req, res) {
  const id = req.params.id;

  // Simu exclusão
  res.json({ message: `Agendamento ${id} removido!` });
});

// Exporta todas as rotas para serem usadas no principal
module.exports = router;