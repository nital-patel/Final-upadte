const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
//here we are initialize the app by calling express

const app = express();

//it listening the webpage on 3000 port and connect with it.in this case process.env.PORT is undefined
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//this creates the path localhost:3000
//and gives the path to our pizza-routes.js which will connect to controller > then do models

const pizzaRoutes = require('./routes/pizza-routes');
app.use('/pizza', pizzaRoutes);

//this is if something goes way wrong and the client will receive a 404 page. The route doesn't exist.
app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
