'use strict'
import Sequelize from 'sequelize';

export default class User extends Sequelize.Model {
    
    static init(sequelize) {
        
        
        let options = {}
        options.sequelize = sequelize
        options.timestamps = true //true로 하면 createdAt과 updatedAt을 생성한다.
        options.underscored = false //기본적으로 테이블명과 컬럼명을 CamelCase로 바꾸는데 snake case로 변경해준다
        options.modelName = "User" //모델 이름을 설정할 수있다
        options.tableName = "User" //기본적으로 모델이름을 소문자및 복수형으로 만드는데 모델이 User면 users가된다
        options.paranoid = "false" // true로 설정하면 deletedAt 컬럼이 생긴다. 삭제시 완전히 지워지지 않고 deletedAt에 지운시각이 기록된다.
        options.charset = "utf8" //이모티콘까지 입력되게하려면 utf8mb4와 utf8mb4_general_ci오입력한다
        options.collate = "utf8_unicode_ci"
        /*
        options.indexes = [
          {
            unique: true,
            fields: ['userName']
          }
        ]
        */
    
        // init(attributes, options)
        // Using additional options like getterMethods, setterMethods, indexes etc
        return super.init({
            email:{
                type: Sequelize.STRING(100),
                allowNull : false,
                unique: true,
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED, //양수
            },
            password: {
              type: Sequelize.STRING(100),
              allowNull : false,  
            },
        }, options)
    }
    
    
    //1대1 관계에서 hasMany와 belongsTo
    static associate(db) {
        
        db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
    }
    // VARCHAR STRING
    // INT INTEGER
    // TINYINT BOOLEAN
    // DATETIME DATE
    // NOT NULL allowNull: false
    // UNIQUE unique:true
    // DEFAULT now() defalutValue:Sequelize.NOW
};