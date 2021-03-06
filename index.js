const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/dist')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

