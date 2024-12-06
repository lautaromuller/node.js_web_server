const express = require('express')
const path = require('path')

//Funcion que lee el puerto y el path
const startServer = (options) => {
    const { port, public_path = 'public'} = options;
    
    
    const app = express() //Guardamos en app toda la información de express

    app.use(express.static(public_path)) //Middleware para poner a disposición todo el contenido estatico (carpeta public)

    //Mostramos la página que nos piden, si no se especifica mostramos la carpeta public (cada carpeta es una página)
    app.get('*', (req,res)=> {
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log("escuchando...")
    })
}

module.exports = {
    startServer
}