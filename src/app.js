const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config(); 
// settings
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(express.json());
app.use(cors());

// routers
app.use('/api/users', require('./routers/users'));
app.use('/api/notes', require('./routers/notes'));



module.exports = app;