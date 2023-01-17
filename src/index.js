//https://www.youtube.com/watch?v=-bI0diefasA&t=8996s min: 40

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initiliazations
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));

//config view engine
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', 'handlebars');
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: 'true',
    saveUninitialized: true
}));
//Global variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Statics Files
app.use(express.static(path.join(__dirname, 'public')));

// Server is lintenning
app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'));
});
