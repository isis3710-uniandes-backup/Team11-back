var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var novelasRouter= require('./routes/novelas');
var usuariosRouter= require('./routes/usuarios');
var autoresRouter= require('./routes/autores');
var fansubsRouter= require('./routes/fansubs');
var generosRouter= require('./routes/generos');
var capitulosRouter= require('./routes/capitulos');

var playlistsRouter= require('./routes/playlists');
var recomendacionesRouter= require('./routes/recomendaciones');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/novelas', novelasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/autores', autoresRouter);
app.use('/fansubs', fansubsRouter);
app.use('/generos', generosRouter);
app.use('/capitulos', capitulosRouter);
app.use('/playlists', playlistsRouter);
app.use('/recomendaciones', recomendacionesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
