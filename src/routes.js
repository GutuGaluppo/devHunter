const {Router} = require('express');
const DevController = require('./contronllers/DevController')
const SearchController = require('./contronllers/SearchController');

const routes = Router()

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;



// HTTP methods: GET, POST, PUT, DELETE

//Params types:
// Query Params: req.query: filtro, ordem, paginação, ...
// Route Params: req.params: identificar um recurso na alteração ou remoção
// Body: dados para criação ou alteração de um registro

//MongoDB: banco não relacional
