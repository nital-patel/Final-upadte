// Write your controller in this file!
const Pizza = require('../models/pizza');
const pizzaController = {};

pizzaController.index = (req, res) => {
    Pizza.findAll()
        .then((pizza) => {
        res.json({
        message: 'ok',
        data: pizza,
    });
}).catch((err) => {
        console.log(err);

});
};

pizzaController.show = (req, res) => {
    Pizza.findById(req.params.id)
        .then((pizza) => {
        res.json({
        message: 'ok',
        data: pizza
    })
}).catch(err => {
        console.log(err);

});
};



pizzaController.create = (req, res) => {
    Pizza.create({
        flavor: req.body.flavor,
        description: req.body.description,
        location: req.body.location,
    }).then((pizza) => {
        res.json({
        message: 'ok',
        data: pizza
    });
}).catch(err => {
        console.log(err);
});
};

pizzaController.update = (req, res) => {
    Pizza.update({
        flavor: req.body.flavor,
        description: req.body.description,
        location: req.body.location,
    }, req.params.id)
        .then(pizza => {
        res.json({
        message: 'updated',
        data: pizza
    });
}).catch(err => {
        console.log(err);
});
};

pizzaController.destroy = (req, res) => {
    Pizza.destroy(req.params.id)
        .then(() => {
        res.json({
        message: 'Pizza deleted successfully!'
    });
}).catch(err => {
        console.log(err);
});
}

module.exports = pizzaController;
