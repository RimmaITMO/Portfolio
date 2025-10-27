const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');


const app = express();

const PORT = 3001; // порт для Node.js сервера

app.use(cors()); 
app.use(express.json());

// Подключение к базе данных
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql', // имя сервиса из docker-compose
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'test'
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await pool.query('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
    res.status(200).json({ message: 'Данные сохранены' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
