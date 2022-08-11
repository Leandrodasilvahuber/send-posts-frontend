var express = require('express')
var path = require('path')
var STATIC_SERVER = require('serve-static')

var app = express()

app.use(STATIC_SERVER(path.join(__dirname, 'dist')))
var port = process.env.PORT || 500

app.listen(port)
console.log('Server start' + port)
