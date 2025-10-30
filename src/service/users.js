import User from '../model/users.js'

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
}

export default new ServiceUser()