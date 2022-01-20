const express = require('express')//모듈 가져오기
const app = express()//함수를 이용해 앱을 만들고
const port = 5000

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'vCloud2020@',
  database : 'ds'
});

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();


/// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// /////////// ////////

app.get('/', (req, res) => {
  res.send('Hello World! 대식 방가방가 ㅎㅎ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})