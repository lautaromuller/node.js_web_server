require('dotenv').config()
const { get } = require('env-var')

//Configuro mis variables de entorno
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

//Exporto las variables
module.exports = {
    envs
}