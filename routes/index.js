const { home, insertImg } = require('../controllers/homeController');

const routes = require('express').Router();

routes.get('/',home)
routes.post('/insertImg',insertImg)

module.exports = routes