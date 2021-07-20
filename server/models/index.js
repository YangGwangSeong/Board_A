import Sequelize from "sequelize";
import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import User from "../models/User.js";
import Comment from "../models/comment.js";

const env = process.env.NODE_ENV || "development";
const config = require(path.join("../","config", "db.json"))[env];


class Database{
   
    constructor(
        
    ){
        const db = {}
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
        this.db = db;
        
        this.db.sequelize = this._sequelize;
        this.db.Sequelize = Sequelize;
        this.db.User = User;
        User.init(this._sequelize);
        this.db.Comment = Comment;
        Comment.init(this._sequelize);

        
        User.associate(this.db);
        Comment.associate(this.db);

        

    }

    get sequelize () {
        return this._sequelize;
    }

    get models () {
        return this.db;
    }

    get test(){
        console.log("하위");
    }

}

const database = new Database(); //생성및 초기화 후 내보내기 하기 위해
export default database;
