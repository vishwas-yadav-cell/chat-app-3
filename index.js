const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const passport = require('passport');

// database connectivity:
const connectDB = require('./config/db');
connectDB();

// setting up the urlencoded for taking the values from the browser/html:
app.use(express.urlencoded({ extended: true }));

// setting up the passport google:
require('./config/passport')(passport);

// setting up the view engine:
app.engine('.handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', '.handlebars');

// serialize and deserialize:
app.use(passport.initialize());
app.use(passport.session());

// for setting up the routes:
app.use('/', require('./routes/index'));
app.use('/auth',require('./routes/auth'));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server on port : ${port}`);
});