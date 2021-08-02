'use strict'
import Sequelize from 'sequelize';

export default class comment extends Sequelize.Model {
    static init(sequelize) {
        let options = {}
        options.sequelize = sequelize
        options.timestamps = true //true로 하면 createdAt과 updatedAt을 생성한다.
        options.underscored = false //기본적으로 테이블명과 컬럼명을 CamelCase로 바꾸는데 snake case로 변경해준다
        options.modelName = "Comment" //모델 이름을 설정할 수있다
        options.tableName = "Comments" //기본적으로 모델이름을 소문자및 복수형으로 만드는데 모델이 User면 users가된다
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
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        }, options)
    }
    static associate(db) {
        //users 테이블과 연동된 commenter 컬럼이 없다.
        //
        // 관계설정 User는 댓글을 여러개 가지고 있으므로 hasMany Comment 댓글은 그와 반대로 연관되어있다
        db.Comment.belongsTo(db.User, { foreignKey: "commenter", targetKey: "id" });
    }
};