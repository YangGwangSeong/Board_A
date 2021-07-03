import Sequelize from "sequelize";
import fs from "fs";
import path from "path";
import { createRequire } from "module";
const __dirname = path.resolve("models"); //models 폴더를 지정해줘야할듯?
const require = createRequire(import.meta.url);

import User from "../models/User.js";

const env = process.env.NODE_ENV || "development";
const config = require(path.join("../","config", "db.json"))[env];

class Database{
   
    constructor(){
        //this._sequelize = new Sequelize() 이렇게 간단하게 해도 되지만 db조합이나 캐릭터셋 설정을 위해 수정
        this._sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config,
            {
                define:{
                    charset: "utf8",
                    collate : "utf8_unicode_ci"
                }
            }
            );

        this._models = {}
        
        
        // Load each model file
        const models = Object.assign({}, ...fs.readdirSync(__dirname)
        .filter(file =>
        (file.indexOf(".") !== 0) && (file !== "index.js")
         )
        .map((file) => {
            
        //console.log(file);
        //const model = this._sequelize.import(path.join(__dirname, file));
        //const model = require(path.join(__dirname, file)).default

        //return {
        //    [model.name]: model.init(this._sequelize),
        //}
        })
        )
        
        
    }
    get sequelize () {
        return this._sequelize
    }
    
    get models () {
        return this._models
    }

}

const database = new Database(); //생성및 초기화 후 내보내기 하기 위해
export default database;
