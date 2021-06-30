//var express = require('express');
import BaseRouter from "./BaseRouter.js"
class index extends BaseRouter{

  constructor (
    
  ){          // 이게 생성자 오버라이딩 이라고 하는듯함.
    super(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor 이거 없으면 이런 오류뜸

    this.Router.get('/',function(req, res, next) {
      res.json([
        {id:1, username:"test"},
        {id:2, username:"무야호2"},
        {id:3, username:"퇴근"}
      ]);
    });
    
  }
  
}

export default index;

