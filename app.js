const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello all! Happy Pongal 2024!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
