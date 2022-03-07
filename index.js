const express = require("express");

const app = express();

app.get("/users", (req,res)=>{
    
    console.log("hello");

    res.send("hello world");
});

app.get("/books", (req , res)=>{
    res.send({
        "1" : "Math",
        "2" : "scince",
        "3" : "DBMS",
        "4" : "OS" 
    });
    console.log("books")
})

app.listen(4000, ()=>{
    console.log("listening port 4000")
});