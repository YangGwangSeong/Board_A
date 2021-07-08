import UserDao from "../Dao/UserDao.js";

class UserService{
    

    UserLogin(req,res){

        const userDao = new UserDao();

        userDao.UserLogin( req, result => {
            if(result){
                res.send(result);
            }
        });
        
    }

}

export default UserService;