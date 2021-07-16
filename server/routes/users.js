import BaseRouter from "./BaseRouter.js";


class users extends BaseRouter{
  constructor(
    UsersController
  ){

    super(UsersController);
    
    /*
    URL : login
    로그인 요청
    */
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

    /*
    URL : register
    회원가입 요청
    */
    /*
    URL : auth
    토큰이 유효한지 안한지 판별. 아마 로그인 상태인지 확인할떄 쓰고 로그인 상태일때 만 사용 할 수 있는 미들웨어를 쓸려면
    passport.authenticate('jwt', ) 이거를 쓰면됨. jwt 토큰이 유효한지 확인하는 미들웨어 
    */
    

  }
}

export default users;
