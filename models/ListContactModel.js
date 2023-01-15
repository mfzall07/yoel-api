import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const ListContact = db.define('listContact',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true
});

export default ListContact;