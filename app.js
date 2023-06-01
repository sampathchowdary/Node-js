const express = require('express')
const app = express()
const port = 3000
const mysql_connector = require('mysql');
const connection = mysql_connector.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password  :'password',
  database : 'dummy'
});

app.get('/allUsers', (req, res) => {
  connection.connect();
  connection.query("select * from users", function(error, results){
    console.log("query response is ", results, error);
    res.json(results);
  })
  connection.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})