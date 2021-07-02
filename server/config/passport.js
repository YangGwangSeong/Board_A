/*
npm install passport
npm install passport-local
npm install passport-jwt
npm install jsonwebtoken
*/
import passport from "passport";
import passportJWT from "passport-jwt";
import passport_local from "passport-local";
import path from "path";
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = passport_local.Strategy;

const salt_tmp = path.join("../", "config", "db.json");
//import salt from salt_tmp;
//import salt from path.join("../", "config", "db.json");

//import salt from "../config/db.json";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const salt = require(path.join("../", "config", "db.json"))
.salt
const JWT_SECRET = require(path.join("../", "config", "db.json"))
.JWT_SECRET


// 암호화 모듈 가져오기.

//db가져오기
//npm install --save mysql2
//npm install --save sequelize
//models 폴더 만든후 index.js에 세팅



// 함수로 내보내서 사용하자.

export default () => {
  
    
}




//node --experimental-json-modules about.js