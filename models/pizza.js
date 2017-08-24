// Write your model in this file!const db = require('../db/config');
const db = require('../db/config.js');
const Pizza = {};


Pizza.findAll = () => {
    return db.query('SELECT * FROM pizza');
};

Pizza.findById = (id) => {
    return db.one(
        `SELECTs
      *
    FROM
      pizza
    WHERE
      id=$1`,
        id
    );
s

Pizza.create = (pizza) => {
    return db.one(
        `INSERT INTO
      pizza
      (flavor, description, location)
    VALUES
      ($1, $2, $3)
       ` [pizza.flavor, pizza.description, pizza.location]
    );
};

Pizza.update = (pizza, id) => {
    return db.one(
        `UPDATE
      pizza
    SET
      flavor = $1,
      description = $2,
      location = $3
    WHERE
      id = $4
    RETURNING
      *`,
        [pizza.flavor, pizza.description, pizza.location]);
};

};

Pizza.destroy = (id) => {
    return db.none(
        `DELETE FROM
      pizza_kestrel_dev 
    WHERE
      id = $1`,
        id
    );
};
module.exports = Pizza;
