// Utiliza-se module.exports ao invez do default export 
// por causa do sequelize-cli. Ele não aceita o default exports
require('dotenv/config');

const { BDHOST, BDUSERNAME, BDPASS, BD } = process.env;

module.exports = {
    dialect: 'mysql',
    host: BDHOST, 
    username: BDUSERNAME,
    password: BDPASS,
    database: BD,
    define: {
        // Gera um created_at e updated_at na tabela
        timestamps: true,
        // Cria tabelas com underlines ao inves de camel case
        underscored: true,
    }
};