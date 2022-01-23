const { request,response } = require("express");


const usuariosGet = (req=request, res = response) => {
    const {q, nombre="No name", apikey} = req.query;

    res.json({
      msg: "GET api - Controlador ",
      q,
      nombre,
      apikey,
    });
}
const usuariosPost = (req, res = response) => {

    const {nombre,id} = req.body;

    res.json({
      msg: "Post api - Controlador ",
      nombre,
      id,
    });
}
const usuariosPut = (req, res = response) => {
    const id = req.params.id

    res.json({
      msg: "Put api - Controlador ",
      id
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
      msg: "Delete api - Controlador ",
    });
}

  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosDelete,

  }