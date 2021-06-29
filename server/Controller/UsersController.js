//서비스 가져오고
//사용할 dao가져오고


class UsersController{
    


    test(req,res){

        req.body.map(day => {
            console.log(day)
        });
        
        res.json([
            {id:2, unser:"수정됨"}
        ])
    }   

}

module.exports = UsersController;