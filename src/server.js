const express = require('express')
const path = require('path')
const app = express()
// const morgan = require('morgan')
const { engine } = require ('express-handlebars');
// const  query  = require('express');
const db = require('./config/db')
const port = 3000

const cookieParser = require('cookie-parser')
app.use(cookieParser())



const route = require('./routes')





app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

// Connect db
db.connect();
route(app);

//public file
app.use(express.static(path.join(__dirname, 'public')))


// template engine
app.engine('hbs', engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));






app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})