import Database from "../models/index.js";

const models = Database.models;
const User = models.User;
const {Sequelize : { Op }} = models.Sequelize;
const sequelize = Database._sequelize;

Database._sequelize
.sync({force: false})
.then ( () => {
    console.log("Connection has been established successfully")
 })
.catch( err => {
    console.log("Unable to connect to the database:" , err)
})
class UserDAO{

    UserCreate(req, hashpw, callback){
        const body = req.body;

        User.count({
            where : { email : body.email }
        })
        .then( cnt => {
            
            if(cnt > 0) { //이미 존재하는 계정.
                 callback(false); 
            } else {
                User.create({
                    email: body.email,
                    name: body.name,
                    password : hashpw,
                    age: body.age,
                    createdAt: sequelize.literal('now()'),
                    updatedAt : sequelize.literal('now()')
                }).then(data => {
                    callback(data);
                }).catch(err => {
                    throw err;
                })
            }
        })
      
    }

    UserFindOne(req, hashpw, callback){
        const body = req.body;
        
        User.findOne({
            where : {[Op.and]: [{email : body.email, password : hashpw}]}
        }).then( data =>{
            callback(data);
        }).catch(err => {
            throw err;
        })
    }
}

export default UserDAO;