import express from 'express';
import data from './Data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Servidor está pronto!');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});