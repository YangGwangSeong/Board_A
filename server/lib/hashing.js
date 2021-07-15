// npm install sha256
import sha256 from "sha256";
class hashing{
    /*
    정적 메소드는 this를 사용할 수 없다.
    정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
    정적 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다. 따라서 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.
    */
    // static enc(id, pw, salt){
    //     console.log("enc!!!");
    // }

    enc(id, pw, salt){
        
        return sha256(id + pw + salt);
    }
}

export default hashing;
