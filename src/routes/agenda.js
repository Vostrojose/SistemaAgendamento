/**
 * Projeto PI Senac 2025 - v1   "backend" 
 * Autor: [Grupo 31]
 * Descrição: Agenda simples usando Express.js
 * Data: [11-11-2025]
 *//**
 * Baseado no guia oficial: https://expressjs.com/pt-br/guide/routing.html
 */

const express = require('express');
const router = express.Router(); // Cria um rote

//Rota GET para lista de agendamentos
router.get('/', function (req, res) {
  res.json({ message: 'Lista de agendamentos!' });
});

// Rota POST novo agendamento
router.post('/', function (req, res) {
  const novoAgendamento = req.body;

  // Retorna o agendamento 
  res.status(201).json({
    message: 'Agendamento criado!',
    dados: novoAgendamento
  });
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