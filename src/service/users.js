import User from '../model/users.js'
import jwt from 'jsonwebtoken'

const JWT_SEGREDO = 'AS3nh4d0L0uvr3Er4loUvr3'

class ServiceUser {
    async FindAll() {
        return await User.findAll()
    }
    async FindOne(id) {
        if (!id) {
            throw new Error('Favor informar o id')
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return user
    }
    async Create(nome, email, senha, ativo) {
        if (!nome || !email || !senha) {
            throw new Error('Favor preencher todos os campos')
        }

        await User.create({ nome, email, senha, ativo })
    }
    async Update(id, nome, email, senha, ativo) {
        if (!id) {
            throw new Error('Favor informar o id')
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        if (!nome || !email || !senha) {
            throw new Error('Favor preencher todos os campos')
        }

        user.nome = nome
        user.email = email
        user.senha = senha
        user.ativo = ativo

        await user.save()
    }
    async Delete(id) {
        if (!id) {
            throw new Error('Favor informar o id')
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        await user.destroy()
    }
    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error('Email ou senha inválidos')
        }

        const user = await User.findOne({ where: { email } })

        if (!user || user.senha != senha) {
            throw new Error('Email ou senha inválidos')
        }

        return jwt.sign({ id: user.id, nome: user.nome }, JWT_SEGREDO, { expiresIn: 60 * 60 })
    }
}

export default new ServiceUser()