const express = require("express");
const validator = require("express-validator");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");
const expressSession = require("express-session");
const path = require("path");

const port = process.env.PORT || 80;

let app = express()
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.set('view engine','ejs')
.use(express.static("build"))
.use(cookieParser())
// .use(expressSession({
//     secret : 'soooosecret',
//     resave : true,
//     saveUninitialized : false
// }))
.use(session({keys: ['secretkey1', 'secretkey2', '...']}));

app.use(express.static(path.join(__dirname, 'react-bootstrap-test', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  });
 

 app.listen(port);
 console.log('Server running at 80');