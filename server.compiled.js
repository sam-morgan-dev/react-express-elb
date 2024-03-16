"use strict";

var _path = _interopRequireDefault(require("path"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.HTTP_PORT || 4001;
var app = (0, _express["default"])();
app.unsubscribe(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
  res.send('Just going to send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    color: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log('Server listening at port ${PORT}.');
});
