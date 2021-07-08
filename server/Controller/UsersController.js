//서비스 가져오고
import UserService from "../Service/UserService.js";

class UsersController{
    
    constructor(){
        
    }

    UserLogin(req,res){
        
        const userService = new UserService();
        userService.UserLogin(req,res);
        
        //res.json([
        //    "로그인성공"
        //])
    }









    test(req,res){
        
        /*
        if(req.body.length){
            req.body.map(day => {
                console.log(day)
            });
        }
        */
        
        res.json([
            {id:2, unser:"수정됨"}
        ])
    }   

}

export default UsersController;