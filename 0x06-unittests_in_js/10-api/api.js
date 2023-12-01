// Creating a small HTTP server using Express

const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });

});

// Middleware to parse JSON in request body for post request
app.use(express.json());

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

app.listen(port, hostname, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
