import ModelUser from '../model/users.js'

class ServiceUser {
    FindAll() {
        return ModelUser.FindAll()
    }
    FindOne(index) {
        // Verificar se o index é menor q o .lenght da array
        return ModelUser.FindOne(index)
    }
    Create(nome) {
        // Verificar se o nome é válido
        ModelUser.Create(nome)
    }
    Update(index, nome) {
        // Verificar se o index é menor q o .lenght da array e se o nome é válido
        ModelUser.Update(index, nome)
    }
    Delete(index) {
        // Verificar se o index é menor q o .lenght da array
        ModelUser.Delete(index)
    }
}

export default new ServiceUser()