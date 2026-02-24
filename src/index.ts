import express from "express";

const app = express(); 

app.get("/hello", (rep, res)=> {
    console.log("hello world");
    res.send("hello wrold")
});

app.listen(8080, () => {
console.log("servidor running on port 8080");
});