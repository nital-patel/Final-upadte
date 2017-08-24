//import the express using const
const express = require('express');
const pizzaRoutes = express.Router();

const pizzaController = require('../controllers/pizza-controller');
//get request to get all pizza table information via http://localhost:3000/pizza

pizzaRoutes.get('/', pizzaController.index);

//post request to create new pizza information using http://localhost:3000/pizza
pizzaRoutes.post('/', pizzaController.create);

//get request to get pizza information using id via http://localhost:3000/pizza/2
pizzaRoutes.get('/:id', pizzaController.show);

//put request to update a pizza info via http://localhost:3000/pizza/8
pizzaRoutes.put('/:id', pizzaController.update);

//delete request to delete pizza info using id via http://localhost:3000/pizza/4
pizzaRoutes.delete('/:id', pizzaController.destroy);


// exports the pizzaroutes
module.exports = pizzaRoutes;
