const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
const routes = require('./routes/app');
const mongoose = require('mongoose');

app.use('/', routes);
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('Connected') });

const port = process.env.PORT || 5000;
app.listen(port);
