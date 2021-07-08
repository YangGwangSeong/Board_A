<<<<<<< HEAD

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
=======
var express = require('express');
var router = express.Router();

const UsersController = require("../Controller/UsersController");

/* GET users listing. */
router.get('/', function(req, res){ //하나의 라우터에 하나의 컨트롤러 붙임.
  new UsersController().test(req,res);
});

router.get('/:id', function(req, res, next) {
  res.json([
    {id:1, username:"test"},
    {id:2, username:"무야호2"},
    {id:3, username:"퇴근"}
  ]);
});

router.put('/:id', function(req, res, next) {
  res.json([
    {id:2, unser:"수정됨"}
  ])
})

module.exports = router;
>>>>>>> cbdc299 (설정 쌓임)
