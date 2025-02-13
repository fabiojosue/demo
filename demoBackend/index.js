const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokemon'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello, Express!' });
});

app.get('/pokemon', (req, res) => {    
    const sql = 'SELECT * FROM `pokemon`';
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)      
    });
});

app.get('/tipopokemon', (req, res) => {    
    const sql = 'SELECT * FROM `tipopokemon`';
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)      
    });
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});