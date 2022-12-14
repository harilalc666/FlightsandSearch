const express = require("express");
const {Port} = require("./config/ServerConfig.js");
const bodyparser = require("body-parser");

const startSetUpServer = async () =>{
    const app = express();
    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(Port,() => {
        console.log(`Server started on ${Port}`);
        //console.log(process.env);
    })
}

startSetUpServer();