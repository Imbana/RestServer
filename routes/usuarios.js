const { Router } = require("express");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require("../controllers/usuarios");

const router = Router();

router.get("/api", (req, res) => {
    res.send("Hola mundo API");
  });

  //Devolver en formato utilizado Json
  router.get("/", usuariosGet);

  router.put("/:id",usuariosPut);

  router.post("",usuariosPost);

  router.delete("", usuariosDelete);

  router.get("*", (req, res) => {
    res.send("404 | Page not found");
  });



module.exports = router