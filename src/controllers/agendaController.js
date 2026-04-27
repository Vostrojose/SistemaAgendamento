/**
 * Projeto PI Senac 2025 - v1   "backend" 
 * Autor: [Grupo 31]
 * Descrição: Agenda simples usando Express.js (sem token)
 */

const { json } = require('express');
const pool = require('../config/db');
require('dotenv').config();

//Cadastrar novo agendamento (SEM TOKEN)
exports.novoAgendamento = async (req, res) => {
    try {
        // Dados vindos do front
        const { data, hora, descricao, userId} = req.body;

        // Verificações básicas
        if (!data || !hora || !userId) {
            return res.status(400).json({
                message: "Data, hora e user_id são obrigatórios."
            });
        }

        // Inserir no banco de dados
        const result = await pool.query(
            `INSERT INTO agendamentos (data_agendamento, hora_agendamento, descricao, user_id)
             VALUES ($1, $2, $3, $4) RETURNING id`,
            [data, hora, descricao, userId]
        );
        //CONSOLELOG PARA TESTE
        console.log("RESULTADO DO INSERT:", result);

        return res.status(201).json({
            message: "Agendamento criado com sucesso!",
            agendamento: {
                id: result.rows[0].id,
                data,
                hora,
                descricao,
                userId
            }
        });

    } catch (err) {
        console.error("Erro ao criar agendamento:", err);
        return res.status(500).json({ message: "Erro no servidor." });
    }
};

//Listar agendamentos 
exports.listarAgendamentos = async (req,res) =>{
    try {
        const lista = await pool.query(
            'SELECT * FROM agendamentos WHERE user_id = $1',
            [req.user.id]
        );

        if(lista.rows.length === 0){
            return res.status(400).json({
                error: "Nenhum agendamento encontrado."
            });
        }

        return res.status(200).json(
            lista.rows
        );

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}