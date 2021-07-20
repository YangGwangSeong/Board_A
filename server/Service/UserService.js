import path from "path";
import hashing from "../lib/hashing.js";
import { createRequire } from "module";
import passport from "passport";
import jwt from "jsonwebtoken";
const require = createRequire(import.meta.url);
const salt = require(path.join("../", "config", "db.json"))
.salt
const JWT_SECRET = require(path.join("../", "config", "db.json"))
.JWT_SECRET

import UserDao from "../Dao/UserDao.js";

const userDao = new UserDao();
const hash = new hashing();

class UserService{
    
    UserCreate(req,res){
        const body = req.body;
        
        //암호화된 비밀번호 체크
        const hashpw = hash.enc(body.email,body.password,salt);
        userDao.UserCreate(req,hashpw, result => {
            if(result){
                res.send(result);
            }
        })
    }

    UserLogin(req,res){
        const body = req.body;
        passport.authenticate('local', {session: false}, (err, user) => {
            const obj = {};
            
            if ( err || !user){
                obj["suc"] = false;
                obj["msg"] = "로그인 실패";

                return res.send({obj,err});
            }
            req.login( user, {session: false}, (err) => { // passport 내장함수인듯?
                if (err) {
                    res.send(err);
                }
                
                const token = jwt.sign({ id : user.id}, JWT_SECRET , { expiresIn : "180m"} ); 
                obj["suc"] = true;
                obj["msg"] = "로그인 성공";
                
                
                return res.send({obj,token});
            })
        })(req,res);

    }
}

export default UserService;