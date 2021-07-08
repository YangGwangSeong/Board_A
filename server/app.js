import createError  from "http-errors";
import express from "express";
import path from "path";
const __dirname = path.resolve(); 
import logger from "morgan";
import cookieParser from "cookie-parser"; // cookie-parser 모듈 import

import passport from "passport";
import passportConfig from "./config/passport.js";
//const passportConfig = require("./config/passport");

passportConfig();

/* 사용 할 컨트롤러와 라우터 선언 */
import index from "./routes/index.js";
import users from "./routes/users.js";

import UsersController from "./Controller/UsersController.js";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* 컨트롤러 라우터 선언부 */
const userController = new UsersController(); //컨트롤러 클래스

//const indexRouter = new index(userController); //라우터 클래스
const usersRouter = new users(userController); //유저 라우터 클래스

/* 라우터 호출 부분 */
//app.use('/api', indexRouter.Router); // url에 해당하는 라우터 호출
app.use('/api/users', usersRouter.Router);




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

//module.exports = app;
export default app;
