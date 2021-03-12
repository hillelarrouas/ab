"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

app.use(express.json());
app.use(express["static"]('public'));
var url = "mongodb+srv://hillel:Aa25802580@cluster0.rv8jb.mongodb.net/Matzah";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
var Users = mongoose.model('User', {
  name: String,
  password: String,
  email: String,
  phone: String,
  LastSeen: String
});
var Tens = mongoose.model('Tens', {
  baking: String,
  cosher: String,
  Tables: String,
  Roundsonthetable: String,
  id: String,
  timeLength: String,
  Type: String
});
app.post('/getdata', function _callee(req, res) {
  var day, deta;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          day = req.body.day;
          _context.next = 3;
          return regeneratorRuntime.awrap(Tens.find({
            Type: day
          }));

        case 3:
          deta = _context.sent;
          res.send({
            deta: deta
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/oupdetRounds', function _callee2(req, res) {
  var _req$body, day, RoundCounter, deta;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, day = _req$body.day, RoundCounter = _req$body.RoundCounter;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Tens.updateOne({
            Type: day
          }, {
            Roundsonthetable: RoundCounter
          }));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(Tens.find({
            Type: day
          }));

        case 5:
          deta = _context2.sent;
          res.send({
            deta: deta
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.post('/savetime', function _callee3(req, res) {
  var _req$body2, timeLength, cosher, Tables, baking, radio, deta;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, timeLength = _req$body2.timeLength, cosher = _req$body2.cosher, Tables = _req$body2.Tables, baking = _req$body2.baking, radio = _req$body2.radio;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Tens.replaceOne({
            Type: radio
          }, {
            cosher: cosher,
            Tables: Tables,
            baking: baking,
            timeLength: timeLength,
            Type: radio,
            Roundsonthetable: 0
          }));

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(Tens.find({}));

        case 5:
          deta = _context3.sent;
          res.send({
            deta: deta
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.post('/gettyperadio', function _callee4(req, res) {
  var Type, deta;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          Type = req.body.Type;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Tens.find({
            Type: Type
          }));

        case 3:
          deta = _context4.sent;
          res.send({
            deta: deta
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.get('*', function (req, res) {
  res.send('<h1 style="text-align: center"><a href="/" style="color: rgb(82, 24, 24)">דף 404 לחץ כאן לחזרה</a></h1>');
});
var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});