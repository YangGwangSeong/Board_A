//서비스 가져오고
<<<<<<< HEAD
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
=======
//사용할 dao가져오고


class UsersController{
    


    test(req,res){

        req.body.map(day => {
            console.log(day)
        });
>>>>>>> cbdc299 (설정 쌓임)
        
        res.json([
            {id:2, unser:"수정됨"}
        ])
    }   

}

<<<<<<< HEAD
export default UsersController;
=======
module.exports = UsersController;
>>>>>>> cbdc299 (설정 쌓임)
