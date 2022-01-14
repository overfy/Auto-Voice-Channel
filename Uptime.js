app = require('express')();

app.get('/', (req, res) => res.send('REDI COOOK'));

app.get("/", (request, response) => {
  console.log("Okay");
  response.sendStatus(200);
});

module.exports = () => {
  app.listen(3000);
}