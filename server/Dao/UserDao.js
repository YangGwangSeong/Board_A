import Database from "../models/index.js";

const models = Database.models;
const User = models.User;

Database._sequelize
.sync({force: false})
.then ( () => {
    console.log("Connection has been established successfully")
 })
.catch( err => {
    console.log("Unable to connect to the database:" , err)
})
class UserDAO{

    UserLogin(req, callback){
        const body = req.body;
        
        User.create({
            id: body[0].id,
            name: body[0].name,
            age: 3,
            comment : "admin",
            createdAt: "2021-07-04 18:08:58",
            updatedAt : "2021-07-04 18:08:58"
        }).then(data => {
            callback(data);
        }).catch(err => {
            throw err;
        })
    }
}

export default UserDAO;