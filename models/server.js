const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        // Middlewares'
        this.middlewares()

        // Rotas da aplicação
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        //Ler
        this.app.use( express.json() );
        // Directorio Publico
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen() {

        this.app.listen( this.port, () => {
            console.log('Servidor correndo na porta', this.port );
        })
    }

}

module.exports = Server