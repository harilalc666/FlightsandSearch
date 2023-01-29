const express = require("express");
const bodyparser = require("body-parser");
const {Port} = require("./config/ServerConfig.js");
const ApiRoutes = require('./routes/index');
const cors = require('cors')
// const db = require('./models/index');
// const sequelize = require('sequelize');

var corsOptions = {
    origin: '127.0.0.1:3002',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const startSetUpServer = async () =>{

    const app = express();
    app.use(cors(corsOptions))

    const checkPayloadSize = (req, res, next) => {
        if (req.headers['content-length'] > 10485760) {
            return res.status(413).json({
                message: 'Payload Too Large'
            });
        }
        next();
    }


    app.use(bodyparser.json({ limit: '10mb'}));
    app.use(bodyparser.urlencoded({limit: '10mb', extended:true}));
    app.use(checkPayloadSize);
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