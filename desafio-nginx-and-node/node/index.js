const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

app.get('/', (req,res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('foobar')`
    connection.query(sql)
    connection.query(`select * from people`, function (err, result, fields) {
        if (err) throw err;
        let strResult;
        for(let person of result){
            strResult += `<p>${person.name}</p>`
        }
        res.send(`<h1>Full Cycle Rocks!</h1>` + strResult)
      })
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})