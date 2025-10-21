import express from 'express'
import router from './router/users.js';

const app = express();

app.use(express.json())

app.use('/api/v1', router)

const porta = 9999

app.listen(porta, () => {
    console.info(`servidor roubando na porta ${porta}`)
})