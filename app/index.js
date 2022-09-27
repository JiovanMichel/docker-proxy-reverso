
const Helper = require('./src/helper');

const express = require('express');
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');


const hostname = '0.0.0.0';
const port = 8000;

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'mysql-proxy-reverse',
    user: 'root',
    password: 'root',
    database:'db_proxy_reverse'
});

app.get('/', async (req, res) => {
    let nome = Helper.gerarNomeRandomico();
    console.log('Inserir nome => ', nome);
    
    let [insert] = await connection.promise().query(`INSERT INTO people(name) values(?)`, [nome]);
    if(!(insert?.insertId))
        console.log('Erro ao inserir nome => ', nome);
        
    const [dados] = await connection.promise().query(`SELECT * FROM people`);
    res.render('index', {people: dados, peoples: []} );
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});