const express = require("express");
const {Port} = require("./config/ServerConfig.js");

const startSetUpServer = async () =>{
    const app = express();
    
    app.listen(Port,() => {
        console.log(`Server started on ${Port}`);
        //console.log(process.env);
    })
}

startSetUpServer();