const express = require('express');
const routes = require('./routes/routes');
const session = require('express-session');

const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

// middleware
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
})

app.use(session({
    secret: "verybigsecret",
    saveUninitialized: true,
    cookie: { sameSite: 'strict' },
    resave: false,
}))

app.use('/',routes);