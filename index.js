const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');

// body parser middleware
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port);
