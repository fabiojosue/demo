const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, Express!' });
});

app.get('/pokemon', (req, res) => {    
    const databasePokemon = 'charmander';
    res.send({pokemon : `This is the pokemon info: ${databasePokemon}`});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});