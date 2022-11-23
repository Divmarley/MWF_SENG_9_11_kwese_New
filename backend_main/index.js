/** @format */

// npm install  mysql express

const mysql = require('mysql');
const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');


const app = express();
const port = 3001;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecom',
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))    
// app.use(express.bodyParser())
app.use(express.json())

app.get('/', (request, respones) => {
  connection.query('SELECT * FROM product', function (err, result) {
    if (err) {
      respones.send('error fetching data');
    } else {
      respones.json(result);
    }
  });
});
 

app.post('/create',(req,resp)=>{
  const name =req.body.name;
  const price =req.body.price;
  connection.query('INSERT INTO product(name,price) VALUES (?,?)',[name,price],(err,result)=>{
    if (err) {
        console.log(err);
      } else {
        // console.log(result);
        resp.json(result);
        // console.log("hello");
      }
})
})

app.get('/product/:id', (request, respones) => {
  connection.query('SELECT * FROM product', function (err, result) {
    if (err) {
      respones.send('error fetching data');
    } else {
      const product = result.find(
        (product) => product.id === Number(request.params.id)
      );
      product ? respones.json(product) : respones.json('no data matching');
    }
  });
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('conected');
  }
});
