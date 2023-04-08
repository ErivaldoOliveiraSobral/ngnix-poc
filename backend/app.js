const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./api');

const PORT = process.env.PORT || '3001';

app.use(({ method, url }, _, next) => {
  console.log({ method, url, timestamp: new Date() });
  next();
});

app.use(cors());
app.use('/api', api);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor!');
});

app.listen(PORT, function() {
  console.log(`A aplicação está rodando na porta ${PORT}!`);
});

module.exports = app;
