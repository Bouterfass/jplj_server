const express = require('express');
const connectDB = require('./config/db');
const users = require('./routes/users');
require('dotenv').config();
const cors = require('cors');

const app = express();


connectDB();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
}));


app.use('/api/users', users);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});