/**
 * Module dependencies.
 */
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const sass = require('node-sass-middleware');
const bodyParser = require('body-parser');

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');


/**
 * Create Express server.
 */
const app = express();


/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs({ defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/** body parser stuff **/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/**
 * Primary app routes.
 */

app.get('/', homeController.index);
app.get('/indexvr', homeController.indexvr);

//404 landing page
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});


/**
 * Start Express server.
 */

app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode.', app.get('port'), app.get('env'));
});

module.exports = app;
