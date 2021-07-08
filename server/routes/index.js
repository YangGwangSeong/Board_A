import BaseRouter from "./BaseRouter.js";


class index extends BaseRouter{

  constructor (
    UsersController
  ){          // 이게 생성자 오버라이딩 이라고 하는듯함.

    
    super(UsersController); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor 이거 없으면 이런 오류뜸

    //this.Router.get('/test', (req, res, next) =>  {
    //  this.Controller.test(req,res);
    //});
    
    this.Router.route('/test')
    .all( (req, res, next) =>{
      // runs for all HTTP verbs first
      // think of it as route specific middleware!
      //console.log("여기에 미들웨어 호출?");
      next();
    })
    .get( (req,res, next) => {
      this.Controller.test(req,res);
    })
    .post( (req,res,next) => {
      this.Controller.test(req,res);
    })
    .put ( (req,res,next) => {
      this.Controller.test(req,res);
    })
    .delete ( (req,res,next) => {
      this.Controller.test(req,res);
    })
  
  }
  
}

export default index;

