const { sendMessage, getAllMessages } = require("./controller");

const routes = require("express").Router();

routes.post("/addmsg", sendMessage);
routes.post("/getallmsg", getAllMessages);

module.exports = routes;