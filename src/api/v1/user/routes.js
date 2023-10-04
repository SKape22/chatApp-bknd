const { register, login, setAvatar } = require("./controller");

const routes = require("express").Router();

routes.post("/register", register);

routes.post("/login", login);

routes.post("/setAvatar/:id", setAvatar);

module.exports = routes