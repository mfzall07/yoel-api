import {Sequelize} from "sequelize";

const db = new Sequelize('yoel', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;