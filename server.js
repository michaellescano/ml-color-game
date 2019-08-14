const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}/`);
  console.log('Press CTRL + C to stop server');
});
