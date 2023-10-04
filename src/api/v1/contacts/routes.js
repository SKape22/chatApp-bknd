const { getAllContacts } = require("./controller");

const routes = require("express").Router();

routes.get("/getAllContacts/:id", getAllContacts);

module.exports = routes