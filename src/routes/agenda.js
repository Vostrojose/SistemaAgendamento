/**
 * Projeto PI Senac 2025 - v1   "backend" 
 * Autor: [Grupo 31]
 * Descrição: Agenda simples usando Express.js
 * Data: [11-11-2025]
 */

const express = require('express');
const router = express.Router();

// Rota principal da agenda
router.get('/', (req, res) => {
  res.json({ message: ' Lista de agendamentos!' });
});

module.exports = router;

// Criar um novo agendamento
router.post('/', (req, res) => {
  const novoAgendamento = req.body;
  res.status(201).json({
    message: 'Agendamento criado!',
    dados: novoAgendamento
  });
});

// Atualizar um agendamento
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Agendamento ${id} atualizado!` });
});

// Excluir um agendamento
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Agendamento ${id} removido!` });
});
