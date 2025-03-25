const usuarios = [];

class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    // salva
    save() {
        usuarios.push(this);
    }

    static fetchAll() {
        return usuarios;
    }

    // busca o usuario do id 
    static fetchOne(id) {
        return usuarios.find(u => u.id === id);
    }

    // atualiza
    static update(id, nome, email, senha) {
        const usuario = usuarios.find(p => p.id === id);
        if (usuario) {
            if (nome) usuario.nome = nome;
            if (email) usuario.email = email;
            if (senha) usuario.senha = senha; 
            return usuario;
        }
        return null;
    }

    //deleta
    static delete(id) {
        const index = usuarios.findIndex(p => p.id === id);
        if (index !== -1) {
            usuarios.splice(index, 1);
            return true;
        }
        return false;
    }

    static generateId() {
        const maxId = usuarios.reduce((max, usuario) => Math.max(max, usuario.id), 0);
        return maxId + 1;
    }
}

module.exports = Usuario;
