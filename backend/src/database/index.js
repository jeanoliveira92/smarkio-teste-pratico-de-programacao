const Sequelize = require('sequelize');

// Configurações do banco de dados
const dbConfig = require('./config');

// envia as configurações do banco de dados para a instancia do sequelize
const conn = new Sequelize(dbConfig);

// inicia o model de comentarios
const Comments = require('../models/Comments');
Comments.init(conn);