const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const allRouter = require('./routes/data');

app.use('/api', allRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});