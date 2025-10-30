import database from "../config/database.js"

// const nomes = new Array('Erick', 'Guilherme', 'Augusto') // const nomes = [] // Mesma coisa, só que mais bonito

class User {
    constructor() {
        this.model = database.db.define('users', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING
            },
            senha: {
                type: database.db.Sequelize.STRING
            },
            ativo: {
                type: database.db.Sequelize.BOOLEAN
            }
        })
    }
}

export default new User().model