const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definição do Schema
const conteudoSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },

    exemplo: {
        type: String,
        required: true
    },

    corpo: {
        type: String,
        required: true
    }

}, { timestamps: true });

// Construtor criado a partir do Schema
const Conteudo = mongoose.model('Conteudo', conteudoSchema);

module.exports = Conteudo;