
import BaseRouter from "./BaseRouter.js";


class users extends BaseRouter{
  constructor(
    UsersController
  ){

    super(UsersController);

    this.Router.route('/login')
    .all( (req, res, next) =>{
      // runs for all HTTP verbs first
      // think of it as route specific middleware!
      //console.log("여기에 미들웨어 호출?");
      next();
    })
    .post( (req,res,next) => {
      this.Controller.UserLogin(req,res);
    })

  }
}

export default users;
