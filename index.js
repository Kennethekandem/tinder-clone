const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
require('./connectors/mongodb');
const route = require('./routes');

// body parser middleware
app.use(bodyParser.json());

// Routes for API
app.use('/', route);

const port = process.env.PORT || 5000;
app.listen(port);
