const { envs } = require('./config/env')
const { startServer } = require('./server/server')


const main = () => {
    //Le paso el puerto y el path que vienen en las envs
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


//Función anónima y autoconvocante que inicia la aplicación
(async() => { main() })()