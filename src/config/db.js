const mysql = require ('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: "8889",
    database: "projeto",
    multipleStatements: true
})

// efetivando a conexão com o database
db.connect((erro)=>{
    if (erro){
        throw erro;
    }
    console.log ("conectado com banco de dados")
})

global.db = db;

module.exports = db;