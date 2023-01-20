const express = require("express");
const bodyparser = require("body-parser");
const {Port} = require("./config/ServerConfig.js");
const ApiRoutes = require('./routes/index');
// const db = require('./models/index');
// const sequelize = require('sequelize');



const startSetUpServer = async () =>{

    const app = express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/flights/api',ApiRoutes);
    app.use('/airports/api',ApiRoutes);
    app.use('/airplanes/api',ApiRoutes);
    app.use('/cities/api',ApiRoutes);
    

    app.listen(Port,async () => {

        console.log(`Server started on ${Port}`);
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter:true});
        // }
    })
}

startSetUpServer();