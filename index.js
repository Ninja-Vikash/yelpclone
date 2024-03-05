const express = require('express')
const app = express()
let ejs = require('ejs');
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})