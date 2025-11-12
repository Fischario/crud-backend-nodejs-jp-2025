import User from '../model/users.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = 'AS3nh4d0L0uvr3Er4loUvr3'
const SALT = 12

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
    async Create(nome, email, senha, ativo, permissao) {
        if (!nome || !email || !senha) {
            throw new Error('Favor preencher todos os campos')
        }

        const senhaCriptografada = await bcrypt.hash(String(senha), SALT)

        await User.create({ nome, email, senha: senhaCriptografada, ativo, permissao })
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

        user.nome = nome || user.nome
        user.email = email || user.email
        user.senha = senha ? await bcrypt.hash(String(senha), SALT) : user.senha
        user.ativo = ativo || user.ativo

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

        if (!user 
            || !(await bcrypt.compare(String(senha), user.senha))
        ) {
            throw new Error('Email ou senha inválidos')
        }

        return jwt.sign({ id: user.id, nome: user.nome, permissao: user.permissao }, JWT_SEGREDO, { expiresIn: 60 * 60 })
    }
}

export default new ServiceUser()