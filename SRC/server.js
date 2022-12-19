const express = require("express");

const {Port} = require("./config/ServerConfig.js");

const bodyparser = require("body-parser");

const CityRepository = require("./repository/city-repository");

const startSetUpServer = async () =>{

    const app = express();

    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(Port,async () => {
        console.log(`Server started on ${Port}`);
        //console.log(process.env);
        const repo = new CityRepository();
       repo.createCity({name : "Mumbai"});
       
    })
}

startSetUpServer();