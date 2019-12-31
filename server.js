require ('dotenv').config ();

const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors')
const morgan = require ('morgan')
const bodyParser = require ('body-parser');
//const bcrypt = require('bcrypt');
let router = express.Router ();


const app = express ();
app.use (morgan ('combined'))
app.use (bodyParser.json ())
app.use (cors ())


mongoose.connect (process.env.DB);
let db = mongoose.connection;
db.on ("error", console.error.bind (console, "connection error"));
db.once ("open", function (callback) {
  console.log ("connection succeeded");
});

const Pusher = require ('pusher');
const {PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, TIME} = process.env;

const pusher = new Pusher ({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: 'eu',
  encrypted: true
});

//models
const Team = require ('./server/models/Team');

//routes
const DataService = require ("./server/DataService");
const service = new DataService (Team);
app.get ('/', function (req, res) {
  res.sendFile (`${process.env.BASEPATH}index.html`);
});

app.post ('/test', (req, res) => {

  pusher.trigger ('food', 'status', {
    message: "asdfas",
    progress: 0.33
  });

  res.send ('asdf')
});

app.get ('/teams', async (req, res) => {
  let teams = await service.getAllTeam ();
  res.send (teams)
});

app.post ('/create-team', async (req, res) => {

  await service.createTeam (req.body);
  pusher.trigger ('team', 'updated', {});
  res.send ("ok")
});

app.post ('/update-team', async (req, res) => {
  await service.updateTeam (req.body.id, req.body.updateData);

  pusher.trigger ('team', 'updated', {});

  res.send ("ok")
});

app.post ('/delete-team', async (req, res) => {
  await service.deleteTeam (req.body.id);
  pusher.trigger('team', 'updated',{});
  res.send ("ok")
});


app.listen (process.env.PORT || 8081);
