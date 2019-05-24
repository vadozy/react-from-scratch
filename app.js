/**
 * app.js
 */
import path from 'path';
import express from 'express';
import 'dotenv/config';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';

// Express app setup
const app = express();

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// logger
app.use(logger('combined'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// use routes
app.use('/', routes);

/*
 * Placing the middleware function after all other route handlers is important.
 * If the requested route can be handled by the application, one of the route
 * handlers will process it, otherwise the error 404 handler will receive the
 * request and render our error page.
 */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

export default app;
