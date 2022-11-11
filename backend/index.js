/** @format */

const http = require('http');
const mysql = require('mysql');

// http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.write('the server is working');
//     response.write(request.url);
//     response.end();
// }).listen(8080);

// file system
// import fs
/*
The Node.js file system module allows you 
to work with the file system on your computer
To include the File System module, use the require() method:

Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files

*/
// const fs = require('fs');
// const http = require('http');

// http.createServer((request,response)=>{
//     fs.readFile('./index.html',(err,data)=>{
//         if (err) {
//             // console.log('something went wroong');
//             response.write('something went wroong');
//             response.end()
//         }else{
//             response.writeHead(200,{'Content-Type':'text/html'});
//             response.write(data);
//             response.end()
//         }
//     })
// }).listen(8080);

// reading a file with node js
// http.createServer(function(request,response){
//     fs.readFile('./index.html',function(error,data){
//         if (error) {
//             console.log('no such file');
//         }else{
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(data);
//             response.end();
//         }

//     })
// }).listen(8080);

// creating a file with node js

// http.createServer(function(request,response){
//     fs.appendFile('newhtml.html','babababs',function(error){
//         if (error) throw error;

//             console.log('file created!!!');

//     })
// }).listen(8080);

// delete file
// http.createServer(function(request,response){
//     fs.unlink('./profile.js',(err)=>{
//         if (err) {
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write('error');
//             response.end();
//         }else{
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write('deleted');
//             response.end();
//         }
//     })
// }).listen(8080);

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blow',
});

con.connect(function (err) {
  if (err) throw err;
  // console.log('Connected!');

  // creating a database
  // con.query('CREATE DATABASE blow', function (err, result) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //   }
  // });

  // Node.js MySQL Create Table
  // con.query(
  //   'CREATE Table students (id INT, name VARCHAR(50))',
  //   function (err, result) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('table was created');
  //     }
  //   }
  // );

  // Insert data Into Table

 
  // const mydata =[
  //   [4,'qwerty'],
  //   [5,'dzjhd'],
  //   [6,'bnbvn'],
  //   [7,'nnnn'],
  //   [8,'zzzz'],
  // ]
  // con.query("INSERT INTO students(id, name) VALUES ?",[mydata] ,function (err, result) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(` ${result.affectedRows} was inserted indet the tsble`);
  //   }
  // });


  con.query("SELECT * FROM  students" ,function (err, result,fields) {
    if (err) {
      console.log(err);
    } else {
      console.log(fields);
    }
  });




});
