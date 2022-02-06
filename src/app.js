const express = require('express');
const app = express();
const cors = require('cors');
// settings
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(express.json());
app.use(cors());

// routers


module.exports = app;