const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.set( "views",path.join(__dirname, "/views"));

const connection = mysql.createConnection({ 
    host:"localhost",
    user: "root", 
    database: "delta_app",
    password:"MySql@2026" 
});

let getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// let q = "insert into user(id, username, email, password) values ?";

// let data = [];
// for(let i=1; i<=100; i++){
//   data.push(getRandomUser());
// } 
//let user =[["3", "z", "z@gmail.com","z123"],["2", "y", "y@gmail.com","y123"],];

//home route
app.get("/",(req,res)=>{
  let q = "select count(*) from user";
  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count});
})
}catch(err){
    console.log(err);
    res.send("Some error occured");
}
});

//get/show route
app.get("/user",(req,res)=>{
  let q = "select* from user"; 
  try{
    connection.query(q,(err,users)=>{
    if(err) throw err;
    //console.log(result);
    res.render("showusers.ejs",{users});
})
}catch(err){
    console.log(err);
    res.send("Some error occured");
}
});

app.listen("8080",()=>{
  console.log("app is listening to port 8080");
});


// console.log(getRandomUser());

// connection.end();