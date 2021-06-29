var createError = require('http-errors');
//var express = require('express');
import express from "express";
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 라우트 선언 부분
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const passport = require("passport");
const passportConfig = require("./config/passport");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* 라우터 호출 부분 */
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
