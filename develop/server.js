const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');


const sequelize = require('./connections/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const APIRoute = require ('develop/public/js/api.js')

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const hbs = exphbs.create({
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(express.static('public'))

// Use the API routes
app.use('/api', apiRoutes);

// app.get('/dashboard', (req, res) => {
//   res.render('dashboard', { title: 'Dashboard' });
// });

app.get('/dashboard', (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  res.render('dashboard', { title: 'Dashboard' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

// make more get request and renders per the url's

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
