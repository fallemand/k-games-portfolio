const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

/**
 * Set base app endpoint. All routes will be handled client side
 */
app.use('/', express.static(path.join(__dirname, './build')));

/**
 * Redirect bad urls to 404
 */
app.use(/^\/(?!#\/).*/, (req, res) => res.redirect('/#/404'));

/**
 * Create a local server in order to start easily the application
 */
app.listen(config.port, config.host, () => {
  console.log(`App started | navigate to: http://${config.host}:${config.port}`);
});
