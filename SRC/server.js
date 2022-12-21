const express = require("express");
const bodyparser = require("body-parser");
const {Port} = require("./config/ServerConfig.js");
const ApiRoutes = require('./routes/index')
const {Airports, City} = require('./models/index');
// const db = require('./models/index');
// const sequelize = require('sequelize');



const startSetUpServer = async () =>{

    const app = express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    

    app.listen(Port,async () => {

        console.log(`Server started on ${Port}`);

        // db.sequelize.sync({alter: true});
        const city = await City.findOne({
        where: {
            id: 4
        }
        });
        const airports = await city.getAirports();
        console.log(airports);
    })
}

startSetUpServer();