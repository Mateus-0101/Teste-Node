const express = require('express');
const controleConteudo = require('../controllers/controleConteudo');

// API de Roteamento das páginas
const rotas = express.Router();

// Rotas dos Conteúdos
rotas.get('/', controleConteudo.conteudo_index);

// Enviando conteúdo
rotas.post('/', controleConteudo.conteudo_enviar);

// Página Criar
rotas.get('/criar', controleConteudo.conteudo_criar);

// Procurar objeto por id (":" significa que o que está a frente é um parâmetro)
rotas.get('/:id', controleConteudo.conteudo_detalhes);

rotas.delete('/:id', controleConteudo.conteudo_delete);

module.exports = rotas;