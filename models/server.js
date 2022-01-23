//Esta es una clase de server, crear una instancia
// y ejecutar el listener

const express = require("express");
const cors = require("cors")



class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = "/api/usuarios"

    //Middleware
    this.middlewares();
    
    //Rutas de la aplicacion
    this.routes();
  }
  routes() {
    this.app.use(this.usuariosRoutePath, require("../routes/usuarios"))
  }

  middlewares() {
    this.app.use(cors())

    // Lectura y parseo de body
    this.app.use(express.json())
    //Directorioo publico
    this.app.use(express.static("public"));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
