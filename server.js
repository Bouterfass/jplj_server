const express = require('express');
const connectDB = require('./config/db');
const users = require('./routes/users');
require('dotenv').config();

const app = express();


connectDB();

app.use(express.json());

app.use('/api/users', users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});