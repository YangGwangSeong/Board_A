//서비스 가져오고
import UserService from "../Service/UserService.js";
const userService = new UserService();

class UsersController{
    
    constructor(){
        
    }
    UserCreate(req,res){
        
        userService.UserCreate(req,res);
        
    }
    UserLogin(req,res){
        userService.UserLogin(req,res);
    }
}

export default UsersController;