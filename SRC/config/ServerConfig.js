const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    Port : process.env.PORT,
    user : process.env.user,
    password : process.env.password
}