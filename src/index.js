import express from 'express'
import router from './router/users.js';
import database from './config/database.js';

const app = express();

app.use(express.json())

app.use('/api/v1', router)

const porta = 9999

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(porta, () => {
            console.info(`servidor roubando na porta ${porta}`)
        })
    })
    .catch((e) => {
        console.log('deu ruim mané, não deu pra conectar com o banco: ' + e)
    })
