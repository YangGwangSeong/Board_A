import Database from "../models/index.js";
Database._sequelize
.authenticate()
.then ( () => {
    console.log("Connection has been established successfully")
 })
.catch( err => {
    console.log("Unable to connect to the database:" , err)
})
class UserDAO{

}

export default UserDAO;