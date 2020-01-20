'use strict';

const express = require('express');
const cors = require('cors');
const request = require('request');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// API URL and Port
const serverUrl = 'http://18.222.162.8';
const serverPort = 8000;

// App
const app = express();
app.use(cors());
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/dist'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// API endpoints
let urls = {
  signup: `${serverUrl}:${serverPort}/api/v1/signup`,
  login: `${serverUrl}:${serverPort}/api/v1/login`,
  jobs: {
    pending: `${serverUrl}:${serverPort}/api/v1/jobs/pending`,
    approved: `${serverUrl}:${serverPort}/api/v1/jobs/approved`
  },
  maintenance: `${serverUrl}:${serverPort}/api/v1/maintenance`
};

// Signup Middleware
app.post('/signup', bodyParser.json(), (req, res) => {
  request(
    {
      url: urls.signup,
      method: 'POST',
      json: req.body.data
    },
    function(error, response, body) {
      console.log(body);
      res.send(body);
    }
  );
});

// Signin Middleware
app.post('/login', bodyParser.json(), (req, res) => {
  request(
    {
      url: urls.login,
      method: 'POST',
      json: req.body.data
    },
    function(error, response, body) {
      console.log(body);
      res.send(body);
    }
  );
});

// Pending Jobs Middleware
app.get('/jobs/pending', bodyParser.json(), (req, res) => {
  request(urls.jobs.pending, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

// Jobs Approved Middleware
app.get('/jobs/approved', bodyParser.json(), (req, res) => {
  request(urls.jobs.approved, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

// Maintenace Middleware
app.get('/maintenance', bodyParser.json(), (req, res) => {
  request(urls.maintenance, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

let server = app.listen(PORT, function() {
  console.log(`Running on http://${HOST}:${PORT}`);
});
