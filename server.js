require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
let router = express.Router();


const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//models
//const Note = require('./Note');


const Pusher = require('pusher');
const { PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, TIME } = process.env;

const pusher = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: 'eu',
  encrypted: true
});


app.get('/',function(req,res) {
  res.sendFile('index.html');
});

app.post('/test', (req, res) => {

  pusher.trigger('food', 'status', {
    message: "asdfas",
    progress: 0.33
  });

  res.send('asdf')
});



app.listen(process.env.PORT || 8081);
/*let stage = 1;
const interval = setInterval(() => {
  const messages = {
    1: "Order Received",
    2: "Order Placed",
    3: "In the Oven",
    4: "Out for Delivery",
    5: "Delivered"
  }
  stage = stage + 1;
  const messageId = stage-1;
  if (stage > 5) {
    console.log('clearing');
    clearInterval(interval);
  }
  console.log("now")
  pusher.trigger('food', 'status', {
    message: messages[messageId],
    progress: messageId/5
  });
}, TIME);*/
