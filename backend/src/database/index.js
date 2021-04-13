const Sequelize = require('sequelize');

const dbConfig = require('./config');

const conn = new Sequelize(dbConfig);

const Comments = require('../models/Comments');
Comments.init(conn);

//module.exports = conn;