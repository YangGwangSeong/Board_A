//var express = require('express');
import BaseRouter from "./BaseRouter.js"
class index extends BaseRouter{

  constructor (
    
  ){

    this.Router.get('/',function(req, res, next) {
      res.render('index', { title: 'Express' });
    });
    
  }
  
}

export default index;

