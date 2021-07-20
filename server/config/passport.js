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
import hashing from "../lib/hashing.js";

import Database from "../models/index.js";
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

const models = Database.models;
const User = models.User;

const {Sequelize : { Op }} = models.Sequelize;

// 함수로 내보내서 사용하자.

const hash = new hashing();
export default () => {
    
    /*
    const id = "6";
    const name = "숙면6";
    User.findOne({
        where : {[Op.and]: [{id : id, name : name}]}
    }).then( data =>{
        console.log(data);
    })
    */
    
    // Local Strategy
    passport.use(new LocalStrategy({
        usernameField : "email",
        passwordField: "password"
    },
    function (email, password, done){

        //암호화된 비밀번호 체크
        const hashpw = hash.enc(email,password,salt);

        return User.findOne({
            where : {[Op.and]: [{email : email, password : hashpw}]}
        })
        .then( user => {
            if(!user){
                return done(null, false,{message : "Incorrect id  or password."})
            }
            return done(null, user, {message: "Logged In Successfully"})
        })
        .catch(err => done(err))
    }

    ));

    // JWT Strategy
    passport.use(new JWTStrategy({
        jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey : JWT_SECRET
    },
    function (jwtPayload, done) {
        
        return User.findOne({
            where : { [Op.and] : [{id : jwtPayload.id}]}
        })
        .then( use => {
            return done(null, use);
        })
        .catch(err => {
            return done("err");
        });
    }
    ));
}




//node --experimental-json-modules about.js