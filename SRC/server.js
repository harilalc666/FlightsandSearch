const express = require("express");
const bodyparser = require("body-parser");
const {Port} = require("./config/ServerConfig.js");
const ApiRoutes = require('./routes/index')




const startSetUpServer = async () =>{

    const app = express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    

    app.listen(Port,async () => {

        console.log(`Server started on ${Port}`);

    })
}

startSetUpServer();