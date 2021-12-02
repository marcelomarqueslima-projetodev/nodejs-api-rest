const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'M@r15ma02li82',
    database: 'agenda-petshop'
})

module.exports = conexao