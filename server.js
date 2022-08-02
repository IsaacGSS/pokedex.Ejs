const express = require('express');
const favicon = require('serve-favicon');
const app = express();

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/assets/favicon.ico'));

app.get('/', (req, res) => {

  res.render('pages/index')
})

let PORT = 3000;

// app.listen(8080);
app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})
console.log('\n aah!, Servidor Rodando 🎉👏 \n')