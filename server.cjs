const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');


const app = express();

const PORT = 3001; // порт для Node.js сервера

app.use(cors()); 
app.use(express.json());

// Подключение к базе данных
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'test'
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
