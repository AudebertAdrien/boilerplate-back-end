const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'http://localhost:5000'],
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  console.log('HOME');
  res.status(200).json(datas);
});

module.exports = app;
