//서비스 가져오고
//사용할 dao가져오고
import UserDAO from "../Dao/UserDao.js";

class UsersController{
    
    constructor(){
        
    }

    UserLogin(req,res){
        console.log(req.body);
        res.json([
            "로그인성공"
        ])
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