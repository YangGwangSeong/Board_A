'use strict'
import Sequelize from 'sequelize';

export default class User extends Sequelize.Model {
    static init(sequelize) {
        let options = {}
        options.sequelize = sequelize
        options.indexes = [
          {
            unique: true,
            fields: ['userName']
          }
        ]
    
        // init(attributes, options)
        // Using additional options like getterMethods, setterMethods, indexes etc
        return super.init({
          userName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false,
          }
        }, options)
    }
}