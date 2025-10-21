const nomes = new Array('Erick', 'Guilherme', 'Augusto') // const nomes = [] // Mesma coisa, só que mais bonito

class ModelUser {
    FindAll() {
        return nomes
    }
    FindOne(index) {
        return nomes[index]
    }
    Create(nome) {
        nomes.push(nome)
    }
    Update(index, nome) {
        nomes[index] = nome
    }
    Delete(index) {
        nomes.splice(index, 1)
    }
}

export default new ModelUser()