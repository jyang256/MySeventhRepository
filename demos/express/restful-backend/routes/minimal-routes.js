var express = require('express');
var router = express.Router();

// These aren't even RESTful

router.route('/sayHello').get((req, res) => {
  res.send('Hello!');
});

router.route('/sayHelloQuery').get((req, res) => {
  let name = req.query.name;
  res.send(`sayHelloQuery: Hello, ${name}!`);
});

router.route('/sayHelloParam/:name').get((req, res) => {
  let name = req.params.name;
  res.send(`sayHelloParam: Hello, ${name}!`);
});

router.route('/sayHelloPost').post((req, res) => {
  const person = req.body;
  let message = "sayHelloPost: Fine, don't tell me who you are";
  if (person && person.firstName && person.lastName) {
    message = `sayHelloPost: Welcome to our API, ${person.firstName} ${person.lastName}.`;
  }
  res.send(message);
});

router.route('*').get((req, res) => {
  res.status(404).send("minimal: I don't know that route, sorry");
});

module.exports = router;
